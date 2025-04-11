import React from "react";
import "./../styles/Contact.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="mailto:info@fitnessclub.com"><FaEnvelope /></a>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="club-info">
          <h3>CLUB INFORMATION</h3>
          <p>📞 503-751-8427</p>
          <p>📍 5916 SW Nyberg Ln</p>
          <p>Tualatin, OR 97062</p>
        </div>

        {/* Hours of Operation */}
        <div className="operation-hours">
          <h3>HOURS OF OPERATION</h3>
          <p>🕒 Mon-Fri: 5:30 AM - 10:00 PM</p>
          <p>🕒 Sat-Sun: 6:30 AM - 10:00 PM</p>
        </div>

        {/* Wellness & Links */}
        <div className="wellness-links">
          <h3>ACHIEVING WELLNESS TOGETHER</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Schedule A Tour</a></li>
            <li><a href="#">Join Our Team</a></li>
            <li><a href="#">Rules & Guidelines</a></li>
            <li><a href="#">Guest Liability Waiver</a></li>
            <li><a href="#">Member Login</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
