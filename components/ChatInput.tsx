"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || data.error || "No response",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        background: "#111827",
        borderRadius: "16px",
        color: "#ffffff",
      }}
    >
      <h2>🤖 Galaxy Next AI Chat</h2>

      <div style={{ minHeight: "400px", marginBottom: "20px" }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              margin: "12px 0",
              padding: "12px",
              borderRadius: "12px",
              background:
                msg.role === "user" ? "#2563eb" : "#1f2937",
              textAlign:
                msg.role === "user" ? "right" : "left",
            }}
          >
            <b>
              {msg.role === "user"
                ? "You"
                : "Galaxy Next AI"}
              :
            </b>
            <br />
            {msg.content}
          </div>
        ))}

        {loading && <p>🤖 Galaxy Next AI is typing...</p>}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        style={{
          width: "75%",
          padding: "12px",
          borderRadius: "8px",
        }}
      />

      <button
        onClick={sendMessage}
        style={{
          marginLeft: "10px",
          padding: "12px 20px",
          background: "#2563eb",
          color: "#ffffff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  );
}
