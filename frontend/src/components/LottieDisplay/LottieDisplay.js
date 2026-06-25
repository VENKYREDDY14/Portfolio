// File: AnimatedGraphic.jsx
import React from "react";
import Lottie from "lottie-react";
import codeAnimation from "../../assets/Web-development.json"; // your Lottie file

const AnimatedGraphic = () => {
  return (
    <div className="flex justify-center items-center w-full md:w-1/2 mt-10 md:mt-0">
      <Lottie
        animationData={codeAnimation}
        loop={true}
        className="w-120 h-140"
      />
    </div>
  );
};

export default AnimatedGraphic;
