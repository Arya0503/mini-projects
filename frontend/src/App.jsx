import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    setMessage(data.message || data.error);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      setMessage("Login successful, token stored.");
    } else {
      setMessage(data.error);
    }
  };

  const accessProtected = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/protected", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.ok) {
      const data = await response.json();
      setMessage(data.message);
    } else {
      setMessage("Access denied. Invalid or missing token.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Authentication with JWT</h2>
      <form style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: "block", margin: "10px 0", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", margin: "10px 0", padding: "8px" }}
        />
        <button
          onClick={handleRegister}
          style={{ marginRight: "10px", padding: "8px" }}
        >
          Register
        </button>
        <button onClick={handleLogin} style={{ padding: "8px" }}>
          Login
        </button>
      </form>
      <button
        onClick={accessProtected}
        style={{ padding: "8px", marginBottom: "20px" }}
      >
        Access Protected Route
      </button>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#f0f0f0",
          borderRadius: "4px",
        }}
      >
        <strong>Message:</strong> {message}
      </div>
    </div>
  );
}

export default App;
