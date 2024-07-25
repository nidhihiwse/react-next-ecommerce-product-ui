import React from "react";

const Specifications: React.FC = () => {
  return (
    <div className="mt-8 w-full">
      <h2 className="text-2xl font-bold mb-12">Specifications</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Exterior</h3>
          <div className="grid grid-cols-2 gap-x-4">
            <ul>
              <li className="mb-1">Body Style</li>
              <li className="mb-1">Exterior Colour</li>
              <li className="mb-1">Length</li>
              <li className="mb-1">Wheelbase</li>
              <li className="mb-1">Width</li>
              <li className="mb-1">Full Width</li>
              <li className="mb-1">Clearance</li>
            </ul>
            <ul>
              <li className="mb-1">Hatchback”</li>
              <li className="mb-1">Blue</li>
              <li className="mb-1">175”</li>
              <li className="mb-1">106”</li>
              <li className="mb-1">69.7”</li>
              <li className="mb-1">N/A</li>
              <li className="mb-1">6”</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Interior</h3>
          <div className="grid grid-cols-2 gap-x-4">
            <ul>
              <li className="mb-1">Seating</li>
              <li className="mb-1">Interior Colour</li>
              <li className="mb-1">Head Room Front</li>
              <li className="mb-1">Head Room Rear</li>
              <li className="mb-1">Leg Room</li>
              <li className="mb-1">Leg Room Rear</li>
              <li className="mb-1">Shoulder Room Front</li>
            </ul>
            <ul>
              <li className="mb-1">5 Adults</li>
              <li className="mb-1">NA</li>
              <li className="mb-1">41”</li>
              <li className="mb-1">37”</li>
            </ul>
          </div>
          <a href="#" className="text-blue-600 hover:underline mt-4 block">
            Show more →
          </a>
        </div>
        <div>
          <div>
            <h3 className="font-semibold mb-2">BEV Performance</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul>
                <li className="mb-1">Horsepower</li>
                <li className="mb-1">MPGe</li>
                <li className="mb-1">Top Speed</li>
              </ul>
              <ul>
                <li className="mb-1">107hp</li>
                <li className="mb-1">102</li>
                <li className="mb-1">90 mph</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Charging</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul>
                <li className="mb-1">Electric Rangei.</li>
                <li className="mb-1">Battery Size</li>
                <li className="mb-1">Cost to charge (full) </li>
              </ul>
              <ul>
                <li className="mb-1">73 Mi.</li>
                <li className="mb-1">$2.50</li>
                <li className="mb-1">$2.50</li>
              </ul>
            </div>
            <a href="#" className="text-blue-600 hover:underline mt-4 block">
              Show more →
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
          Show all specifications
        </button>
      </div>
    </div>
  );
};

export default Specifications;
