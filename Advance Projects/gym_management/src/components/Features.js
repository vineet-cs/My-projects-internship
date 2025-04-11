import React from "react";
import "./../styles/Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-card">
        <h3>🚀 Buy Now</h3>
        <p>Start your fitness journey anytime, anywhere.</p>
      </div>
      <div className="feature-card">
        <h3>⏸️ Pause</h3>
        <p>Need a break? Pause your membership anytime.</p>
      </div>
      <div className="feature-card">
        <h3>🛡️ Safest</h3>
        <p>Train at the safest and most hygienic gyms in town.</p>
      </div>
      <div className="feature-card">
        <h3>💰 No-Cost EMI</h3>
        <p>Flexible EMI options available for hassle-free payments.</p>
      </div>
    </div>
  );
};

export default Features;
