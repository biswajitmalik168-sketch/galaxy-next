import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>🚀 Galaxy Next AI</h1>

      <p>Welcome to Galaxy Next AI by Biswajit Malik.</p>

      <Link href="/chat">
        <button style={{ padding: "12px 20px", margin: "10px" }}>
          Chat
        </button>
      </Link>

      <Link href="/about">
        <button style={{ padding: "12px 20px", margin: "10px" }}>
          About
        </button>
      </Link>

      <Link href="/contact">
        <button style={{ padding: "12px 20px", margin: "10px" }}>
          Contact
        </button>
      </Link>
    </main>
  );
}
