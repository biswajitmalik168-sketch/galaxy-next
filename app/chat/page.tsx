"use client";

import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  async function sendMessage() {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setReply(data.reply || data.error);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        padding: "20px",
      }}
    >
      <h1>🤖 Galaxy Next AI Chat</h1>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask anything..."
        style={{
          width: "100%",
          height: "120px",
          color: "black",
        }}
      />

      <br />
      <br />

      <button onClick={sendMessage}>
        Send
      </button>

      <h2>AI Reply</h2>

      <p>{reply}</p>
    </main>
  );
}
