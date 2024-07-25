"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";
import Accordion from "./Accordion";
import About from "./About";
import Specifications from "./Specifications";

const Product: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const images = [
    "car-image-1.png",
    "car-image-2.png",
    "car-image-3.png",
    "car-image-4.png",
    "car-image-5.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => setSelectedImage(next),
  };

  useEffect(() => {
    if (sliderRef) {
      sliderRef.slickGoTo(selectedImage);
    }
  }, [selectedImage, sliderRef]);

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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Side - Images */}
        <div className="md:col-span-3 space-y-4">
          <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Car ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </Slider>
          <div className="flex justify-center space-x-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 rounded-lg shadow-md cursor-pointer ${
                  selectedImage === index
                    ? "border-2 border-teal-500 opacity-100"
                    : "opacity-50"
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
        {/* Right Side - Details */}

        <div className="md:col-span-2 px-16">
          <h2 className="text-3xl font-bold mb-2">2021 Tesla Model 3</h2>
          <div className="text-gray-500 mb-2">VIN: JN1AZ0CP0BT009448</div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-yellow-500">★★★★★</span>
            <span>(5 stars)</span>
          </div>
          <div className="text-2xl font-semibold mb-2">$41,103</div>
          <div className="space-x-2 mb-4">
            <span className="text-gray-500">Color:</span>
            <button className="w-6 h-6 rounded-full bg-black"></button>
            <button className="w-6 h-6 rounded-full bg-red-500"></button>
            <button className="w-6 h-6 rounded-full bg-blue-500"></button>
            <button className="w-6 h-6 rounded-full bg-green-500"></button>
          </div>
          <button className="w-full mb-4 px-4 py-4 bg-blue-600 text-white rounded-lg">
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

      {/* Add the About component */}
      <About />

      {/* Add the Specifications component */}
      <Specifications />
    </>
  );
};

export default Product;
