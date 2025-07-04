import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "tester",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/login", form);
      alert("login successful.");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
        <br/>
        
      <h2>Login</h2>
      
      <br />
       <br />
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
       <br />
        
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
       <br />
       <Link className="link_login" to="/register">Forgot password ?</Link>
    
        
       <br/>
       <br/>
       <br/>
      <button type="submit">Login</button>
      <br/>
      <br/>
    </form>
  );
}

export default Login;