"use client";

import { useEffect, useState } from "react";
import ChatInput from "@/components/ChatInput";

type ChatMessage = {
  id: number;
  role: string;
  content: string;
  createdAt: string;
};

export default function ChatPage() {
  const [history, setHistory] = useState<ChatMessage[]>([]);

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    try {
      const res = await fetch("/api/chat/history");
      if (!res.ok) return;

      const data = await res.json();
      setHistory(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>🤖 Galaxy Next AI Chat</h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "20px auto",
          background: "#1e293b",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <ChatInput />

        <h2 style={{ marginTop: "30px" }}>Previous Conversations</h2>

        {history.map((msg) => (
          <div
            key={msg.id}
            style={{
              borderBottom: "1px solid #334155",
              padding: "10px 0",
            }}
          >
            <strong>{msg.role}</strong>

            <p>{msg.content}</p>

            <small>
              {new Date(msg.createdAt).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </main>
  );
}
