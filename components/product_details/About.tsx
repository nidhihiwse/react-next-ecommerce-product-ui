import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-gray-700 w-full mt-8 mb-16 px-16 md:px-0">
      <h2 className="text-3xl font-bold mb-12">About this car</h2>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8">
        <div className="flex items-center mb-4 lg:mb-0">
          <img src="fuel-icon.png" alt="Fuel" className="h-6 w-6 mr-4" />
          <span>Diesel Fuel</span>
        </div>
        <div className="flex items-center mb-4 lg:mb-0">
          <img src="transmission-icon.png" alt="Transmission" className="h-6 w-6 mr-4" />
          <span>Automatic Transmission</span>
        </div>
        <div className="flex items-center mb-4 lg:mb-0">
          <img src="mileage-icon.png" alt="Mileage" className="h-6 w-6 mr-4" />
          <span>11,594 Miles</span>
        </div>
        <div className="flex items-center">
          <img src="engine-icon.png" alt="Engine" className="h-6 w-6 mr-4" />
          <span>3.5L Displacement</span>
        </div>
      </div>
    </div>
  );
};

export default About;