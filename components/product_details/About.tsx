import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-full mt-8 mb-16">
      <h2 className="text-3xl font-bold mb-12">About this car</h2>
      <div className="justify-between flex space-x-8 pr-24">
        <div className="flex items-center">
          <img
            src="fuel-icon.png"
            alt="Fuel"
            className="h-6 w-6 mr-4"
          />{" "}
          {/* Replace with your icon */}
          <span className="text-xl">Diesel Fuel</span>
        </div>
        <div className="flex items-center">
          <img
            src="transmission-icon.png"
            alt="Transmission"
            className="h-6 w-6 mr-4"
          />{" "}
          {/* Replace with your icon */}
          <span className="text-xl">Automatic Transmission</span>
        </div>
        <div className="flex items-center">
          <img
            src="mileage-icon.png"
            alt="Mileage"
            className="h-6 w-6 mr-4"
          />{" "}
          {/* Replace with your icon */}
          <span className="text-xl">11,594 Miles</span>
        </div>
        <div className="flex items-center">
          <img
            src="engine-icon.png"
            alt="Engine"
            className="h-6 w-6 mr-4"
          />{" "}
          {/* Replace with your icon */}
          <span className="text-xl">3.5L Displacement</span>
        </div>
      </div>
    </div>
  );
};

export default About;
