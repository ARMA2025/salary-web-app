
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../assets/logo.png";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "admin" && pass === "1234") {
      navigate("/dashboard");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="ARMA Logo" className="logo" />
      <input placeholder="Username" onChange={(e) => setUser(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
