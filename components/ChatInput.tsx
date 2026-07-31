"use client";

export default function ChatInput() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Type your message..."
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #475569",
        }}
      />

      <button
        style={{
          padding: "12px 20px",
          background: "#2563eb",
          color: "#ffffff",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Send
      </button>
    </div>
  );
}
