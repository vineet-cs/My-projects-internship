import React from "react";
import "./../styles/Membership.css";

const Membership = () => {
  return (
    <div className="membership-container">
      {/* Membership Cards */}
      <div className="membership-card elite">
        <h2>ELITE</h2>
        <p>All centers & gyms in Patna</p>
      </div>
      <div className="membership-card elite-plus">
        <h2>ELITE PLUS</h2>
        <p>All centers & gyms in India</p>
      </div>

      {/* Membership Benefits - Left to Right */}
      <div className="membership-details">
        <div className="left">
          <h3 className="heading">Why Choose <span>Elite Membership?</span></h3>
          <p className="content">
            <b>Elite Membership</b> gives you <b>exclusive access</b> to top-rated gyms in Patna.  
            Whether you're a beginner or a fitness enthusiast, enjoy modern equipment, personalized  
            training, and unlimited group workout sessions.
          </p>
          <p className="content">
            <b>• Premium fitness centers</b><br />
            <b>• Certified personal trainers</b><br />
            <b>• Customized diet & workout plans</b><br />
            <b>• Free access to fitness events & workshops</b><br />
          </p>
        </div>
        <div className="separator"></div>
        <div className="right"></div>
      </div>

      {/* Membership Benefits - Right to Left */}
      <div className="membership-details">
        <div className="left"></div>
        <div className="separator"></div>
        <div className="right">
          <h3 className="heading">Elite Plus – <span>Go Beyond Boundaries</span></h3>
          <p className="content">
            With <b>Elite Plus Membership</b>, your fitness journey is <b>not limited to one city</b>.  
            Travel anywhere in India and enjoy access to premium gyms at no extra cost.  
            Perfect for professionals, frequent travelers, and fitness enthusiasts.
          </p>
          <p className="content">
            <b>• Over 500+ fitness centers</b><br />
            <b>• Access to exclusive boot camps</b><br />
            <b>• Cross-city personal training programs</b><br />
            <b>• Discounted rates on supplements & gear</b><br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Membership;
