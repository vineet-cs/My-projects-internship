import React from "react";
import landing_img from "../images/Landing_img.jpeg";
import "./../styles/Landing.css";

const Landing = () => {
    return (
        <div className="landing">
            
            <div className="image-container">
                <img src={landing_img} alt="Landing" />
            </div>
            <div className="text-container">
                <p className="title">Welcome to Our Fitness Hub</p>
                <p>Your journey to a healthier life starts here.</p>
            </div>
        </div>
    );
};

export default Landing;
