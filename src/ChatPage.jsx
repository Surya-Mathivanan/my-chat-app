import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Message from "./Message";

const socket = io("http://localhost:3000");

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
    <div className="chat-container">
      <div className="chat-box">
        <h2 className="chat-header">💬 React Chat App</h2>
        <div className="message-list">
          {messages.map((msg, index) => (
            <Message key={index} message={msg} isOwn={msg.user === user.name} />
          ))}
        </div>
        <div ref={chatEndRef} />
        <div className="input-container">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Enter Message"
            className="chat-input"
          />
          <button onClick={send} className="send-button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
