export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f172a, #1e3a8a, #312e81)",
        color: "#ffffff",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          🚀 Galaxy Next AI
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Welcome to <b>Galaxy Next AI</b> – your intelligent AI assistant
          powered by modern language models. Chat, learn, create, and explore
          with a fast and beautiful AI experience.
        </p>

        <a
          href="/chat"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            background: "#2563eb",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          💬 Start Chat
        </a>
      </div>
    </main>
  );
}
