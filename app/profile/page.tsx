import Link from "next/link";

export default function ProfilePage() {
  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        color: "white",
      }}
    >
      <h1>👤 My Profile</h1>

      <div
        style={{
          background: "#222",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
            }}
          />
        </div>

        <p><strong>Name:</strong> Biswajit Malik</p>
        <p><strong>Email:</strong> user@example.com</p>
        <p><strong>Plan:</strong> Free</p>
        <p><strong>Joined:</strong> 2026</p>

        <br />

        <Link href="/profile/edit">
          <button
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Edit My Profile
          </button>
        </Link>
      </div>
    </main>
  );
}
