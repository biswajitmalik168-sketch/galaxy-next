"use client";

import { useState } from "react";

export default function EditProfilePage() {
  const [name, setName] = useState("Biswajit Malik");
  const [email, setEmail] = useState("user@example.com");

  function saveProfile() {
    localStorage.setItem("profile-name", name);
    localStorage.setItem("profile-email", email);
    alert("Profile Saved!");
  }

  return (
    <main
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        background: "#222",
        color: "white",
        borderRadius: "12px",
      }}
    >
      <h1>✏️ Edit Profile</h1>

      <br />

      <label>Name</label>

      <br />

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
        }}
      />

      <br />
      <br />

      <label>Email</label>

      <br />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
        }}
      />

      <br />
      <br />

      <button
        onClick={saveProfile}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Save Profile
      </button>
    </main>
  );
}
