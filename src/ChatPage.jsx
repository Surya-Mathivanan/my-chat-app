import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Message from "./Message";

const socket = io("https://my-chat-app-v2.onrender.com");

const ChatPage = ({ user }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    return () => socket.off("chat message");
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (input.trim()) {
      const msgData = {
        user: user.name,
        text: input,
        gender: user.gender,
        dob: user.dob,
      };
      socket.emit("chat message", msgData);
      setInput("");
    }
  };

  return (
    <div
      className="form"
      style={{
        maxWidth: 600,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "5%",
      }}
    >
      <div className="title">💬 Chat Room</div>
      <div className="message-list" style={{ height: 350, marginBottom: 10 }}>
        {messages.map((msg, index) => (
          <Message key={index} message={msg} isOwn={msg.user === user.name} />
        ))}
        <div ref={chatEndRef} />
      </div>
      <div
        className="input-container"
        style={{ padding: 0, borderTop: "none", background: "none" }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Enter Message"
          className="input"
          style={{ marginBottom: 0 }}
        />
        <button onClick={send} className="submit" style={{ minWidth: 90 }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
