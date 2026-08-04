export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        background: "#111827",
        color: "#ffffff",
      }}
    >
      <h2>🚀 Galaxy Next AI</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <a href="/" style={{ color: "#ffffff", textDecoration: "none" }}>
          Home
        </a>

        <a href="/chat" style={{ color: "#ffffff", textDecoration: "none" }}>
          Chat
        </a>

        <a href="/about" style={{ color: "#ffffff", textDecoration: "none" }}>
          About
        </a>

        <a href="/contact" style={{ color: "#ffffff", textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}
