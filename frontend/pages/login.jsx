import React, { useState } from "react";
import axios from "axios";
//import "./LoginPage.css";

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");
        try {
          const res = await axios.post("http://localhost:5005/api/login", formData);
          setMessage(res.data.message);
        } catch (err) {
          setError(err.response?.data?.error || "Login failed");
        }
      
};
return (
    <div className="login-container">
      <h2 className="login-title">Login to Turf Booking System</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      {message && <div className="success-msg">{message}</div>}
      {error && <div className="error-msg">{error}</div>}
    </div>
  );
};

export default LoginPage;