import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import Workouts from "./components/Workouts";
import Membership from "./components/Membership";
import Features from "./components/Features";
import Contact from "./components/Contact";



const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Landing />

        {/* Sections with IDs for smooth scrolling */}
        <div id="pricing">
        <Pricing />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
    <div id="pricing">
        <Pricing />
      </div>

      <div id="pricing">
        <Pricing />
      </div> 
      <Landing />
      <div id="pricing">
        <Pricing />
      </div>
    <div id="workout">
        <Workouts />
      </div>

      <div id="membership">
        <Membership />
      </div>
     

      <div id="features">
        <Features />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
