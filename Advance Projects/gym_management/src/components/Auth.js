import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(isLogin ? `Logged in as ${formData.username}` : `Signed up as ${formData.username}`);
    
    // Navigate to Home Page after successful login/signup
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
          )}

          <button type="submit" className="auth-button">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        <p className="auth-footer">
          {isLogin ? "Don't have an account?" : "Already have an account?"} 
          <span className="toggle-auth" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign up here" : " Log in here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
