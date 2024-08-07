import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import "../CSS/AdminLogin.css";
import asuLogoPlain from "../assets/asuLogoPlain.png";

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Placeholder login validation. Replace with actual authentication logic.
    if (username === "admin" && password === "password") {
      setAuth(true);
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <img src={asuLogoPlain} alt="ASU Logo" className="logo" />
        <h2 className="admin-login-title">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
