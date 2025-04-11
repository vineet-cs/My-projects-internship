import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./../styles/Navbar.css";
import logo from "../images/H&X.jpeg"; // Add your actual logo image

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Logo and Brand Name */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="brand-name">FitZone</h2>
      </div>

      {/* Navigation Links with Scroll Effect */}
      <ul className="nav-links">
        <li>
          <Link to="pricing" smooth={true} duration={500} className="nav-item">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="membership" smooth={true} duration={500} className="nav-item">
            Membership
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration={500} className="nav-item">
            Features
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="nav-item">
            Contact
          </Link>
        </li>
      </ul>

      {/* Login/Signup Buttons */}
      <div className="auth-buttons">
        <button className="login-btn" onClick={() => navigate("/auth")}>Login</button>
        <button className="signup-btn" onClick={() => navigate("/auth")}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
