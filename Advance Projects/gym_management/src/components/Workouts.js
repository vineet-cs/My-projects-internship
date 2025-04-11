import React from "react";
import "./../styles/Workouts.css";
import sc from "../images/S&c.jpeg";
import hx from "../images/H&X.jpeg";
import boxing from "../images/Boxing.jpeg";
import dancing from "../images/Dancing.jpeg";

const Workouts = () => {
  const workouts = [
    { name: "S&C", img: sc },
    { name: "HRX Workout", img: hx },
    { name: "Boxing Bag Workout", img: boxing },
    { name: "Dance Fitness", img: dancing },
  ];

  return (
    <div className="workouts-container">
      {workouts.map((workout, index) => (
        <div className="workout-card" key={index}>
          <img src={workout.img} alt={workout.name} />
          <h3>{workout.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Workouts;
