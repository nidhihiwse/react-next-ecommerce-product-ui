import React from "react";
import { specifications } from "./lookup";

const Specifications: React.FC = () => {
  return (
    <div className="mt-8 w-full px-16 md:px-0">
      <h2 className="text-2xl font-bold mb-12">Specifications</h2>
      <div className="text-gray-700 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {Object.keys(specifications).map((key, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-2">{specifications[key].title}</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul>
                {specifications[key].items.map((item, idx : Number) => (
                  <li key={idx} className="mb-1">
                    {item.label}
                  </li>
                ))}
              </ul>
              <ul>
                {specifications[key].items.map((item, idx : Number) => (
                  <li key={idx} className="mb-1">
                    {item.value}
                  </li>
                ))}
              </ul>
            </div>
            {key === "interior" || key === "charging" ? (
              <a href="#" className="text-blue-600 hover:underline mt-4 block">
                Show more →
              </a>
            ) : null}
          </div>
        ))}
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
