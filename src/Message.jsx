import React from "react";

const Message = ({ message, isOwn }) => {
  return (
    <div className={`message-bubble ${isOwn ? "my-message" : "other-message"}`}>
      <strong className="user-label">{message.user}</strong>
      <br />
      {message.text}
    </div>
  );
};

export default Message;
