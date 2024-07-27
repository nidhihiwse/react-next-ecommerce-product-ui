"use client";

import React, { useState } from "react";
import Accordion from "./Accordion";
import About from "./About";
import Specifications from "./Specifications";
import SliderComponent from "./SliderComponent";


const Product: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("SILVER");

  const images = [
    "car-image-1.png",
    "car-image-2.png",
    "car-image-3.png",
    "car-image-4.png",
    "car-image-5.png",
  ];

  const accordionItems = [
    {
      title: "Description",
      content: "Detailed description of the Tesla Model 3 goes here.",
    },
    {
      title: "Product Highlights",
      content: "Highlights of the Tesla Model 3 features go here.",
    },
    {
      title: "Delivery & Warranty",
      content: "Information about delivery and warranty goes here.",
    },
  ];

  const colorOptions = [
    { color: "BLACK", class: "bg-black" },
    { color: "RED", class: "bg-red-500" },
    { color: "BLUE", class: "bg-blue-500" },
    { color: "GREEN", class: "bg-green-500" },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Side - Slider */}
        <div className="md:col-span-3">
          <SliderComponent
            images={images}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </div>

        {/* Right Side - Details */}
        <div className="md:col-span-2 px-16">
          <div className="inline-block px-2 py-1 bg-teal-200 text-blue-800 text-xs rounded-full font-semibold mb-2">
            NEW
          </div>
          <h2 className="text-3xl font-bold mb-2">2021 Tesla Model 3</h2>
          <div className="text-gray-500 mb-2">
            VIN <span className="font-semibold">JN1AZ0CP0BT009448</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★ ★ ★ ★ ★</span>
          </div>
          <div className="text-2xl font-semibold py-6 border-b">$41,103</div>
          <div className="mb-12">
            <p className="font-semibold my-4">Colour</p>
            <div className="flex items-center justify-between">
              <div>
                {colorOptions.map((option) => (
                  <button
                    key={option.color}
                    className={`w-6 h-6 rounded-full ${option.class} mr-2`}
                    onClick={() => setSelectedColor(option.color)}
                  ></button>
                ))}
              </div>
              <span
                className={`${
                  selectedColor === "BLACK"
                    ? "text-black"
                    : selectedColor === "RED"
                    ? "text-red-500"
                    : selectedColor === "BLUE"
                    ? "text-blue-500"
                    : selectedColor === "GREEN"
                    ? "text-green-500"
                    : "text-gray-700"
                }`}
              >
                {selectedColor}
              </span>
            </div>
          </div>
          <button className="w-full mb-4 px-4 py-4 bg-blue-800 text-teal-200 rounded-lg">
            Order Now
          </button>
          <div className="text-gray-500 text-center mb-6">
            Estimated within 16 Aug - 23 Aug
          </div>
          <p className="text-gray-700 font-semibold text-lg mb-6 mt-24">
            Tesla believes in accelerating the world's transition to sustainable
            energy with electric cars.
          </p>
          <a href="#" className="text-blue-600 hover:underline mb-6">
            View the Tesla collection
          </a>
          <Accordion items={accordionItems} />
        </div>
      </div>

      {/* About component */}
      <About />

      {/* Specifications component */}
      <Specifications />
    </>
  );
};

export default Product;