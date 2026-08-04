"use client";

import ChatInput from "@/components/ChatInput";

export default function ChatPage() {
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
      <h1 style={{ marginBottom: "20px" }}>
        🤖 Galaxy Next AI Chat
      </h1>

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "12px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <ChatInput />
      </div>
    </main>
  );
}
