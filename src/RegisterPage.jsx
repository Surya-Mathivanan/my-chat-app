import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase"; // Only import auth

const RegisterPage = ({ onRegister, onSwitchToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      // Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // No Firestore usage here

      console.log("User registered successfully:", user);
      onRegister({ name, email, uid: user.uid });
    } catch (error) {
      console.error("Registration error:", error);
      let errorMessage = "Registration failed. Please try again.";

      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "An account with this email already exists.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        case "auth/weak-password":
          errorMessage =
            "Password is too weak. Please choose a stronger password.";
          break;
        case "auth/operation-not-allowed":
          errorMessage =
            "Email/password accounts are not enabled. Please contact support.";
          break;
        default:
          errorMessage = error.message;
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <h2 className="chat-header">Register</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {error && (
            <div
              style={{
                color: "#f44336",
                backgroundColor: "#ffebee",
                padding: "10px",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            >
              {error}
            </div>
          )}

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="chat-input"
            style={{ margin: "0" }}
            disabled={loading}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="chat-input"
            style={{ margin: "0" }}
            disabled={loading}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="chat-input"
            style={{ margin: "0" }}
            disabled={loading}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="chat-input"
            style={{ margin: "0" }}
            disabled={loading}
          />

          <button type="submit" className="send-button" disabled={loading}>
            {loading ? "Creating Account..." : "Register"}
          </button>

          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <span style={{ color: "#666", fontSize: "14px" }}>
              Already have an account?{" "}
            </span>
            <button
              type="button"
              onClick={onSwitchToLogin}
              disabled={loading}
              style={{
                background: "none",
                border: "none",
                color: "#4CAF50",
                cursor: "pointer",
                fontSize: "14px",
                textDecoration: "underline",
              }}
            >
              Login here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
