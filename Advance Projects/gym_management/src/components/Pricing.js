import React from "react";
import "./../styles/Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-card">
        <h2>12 Months</h2>
        <p className="price">₹38,602</p>
        <p>+ ₹7,089 Taxes</p>
        <ul>
          <li>30 days of membership pause</li>
          <li>Access 5 sessions in other cities</li>
        </ul>
        <button className="buy-btn">BUY NOW</button>
      </div>
      <div className="pricing-card highlight">
        <h2>12 Months + Bonus</h2>
        <p className="price">₹38,602</p>
        <p>+ ₹7,089 Taxes</p>
        <ul>
          <li>FREE 1.5 months extension</li>
          <li>Additional ₹500 off</li>
        </ul>
        <button className="buy-btn">BUY NOW</button>
      </div>
      <div className="pricing-card">
        <h2>6 Months</h2>
        <p className="price">₹19,958</p>
        <p>+ ₹3,698 Taxes</p>
        <ul>
          <li>FREE 1-month extension</li>
          <li>15 days of membership pause</li>
        </ul>
        <button className="buy-btn">BUY NOW</button>
      </div>
    </div>
  );
};

export default Pricing;
