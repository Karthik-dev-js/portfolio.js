import React from "react";
import { about } from "../assets/Images/developer-8764521_1280.jpg";

const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-900 z-50 text-gray-300">
      <div className="">
        <h2>About Me</h2>
        <div>
          <div>
            <img src={about} alt="about-me" className="w-[300px]" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
