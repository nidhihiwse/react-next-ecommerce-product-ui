"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";
import Accordion from "./Accordion";

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
    { title: "Description", content: "Detailed description of the Tesla Model 3 goes here." },
    { title: "Product Highlights", content: "Highlights of the Tesla Model 3 features go here." },
    { title: "Delivery & Warranty", content: "Information about delivery and warranty goes here." },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-5 gap-8">
        {/* Left Side - Images */}
        <div className="col-span-3 space-y-4">
        <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Car ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            ))}
          </Slider>
          <div className="flex space-x-2">
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
        <div className="col-span-2 space-y-4">
          <h2 className="text-3xl font-bold">2021 Tesla Model 3</h2>
          <div className="text-gray-500">VIN: JN1AZ0CP0BT009448</div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">★★★★★</span>
            <span>(5 stars)</span>
          </div>
          <div className="text-2xl font-semibold">$41,103</div>
          <div className="space-x-2">
            <span className="text-gray-500">Color:</span>
            <button className="w-6 h-6 rounded-full bg-black"></button>
            <button className="w-6 h-6 rounded-full bg-red-500"></button>
            <button className="w-6 h-6 rounded-full bg-blue-500"></button>
            <button className="w-6 h-6 rounded-full bg-green-500"></button>
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
            Order Now
          </button>
          <div className="text-gray-500">Estimated within 16 Aug - 23 Aug</div>
          <p className="text-gray-700">
            Tesla believes in accelerating the world's transition to sustainable
            energy with electric cars.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            View the Tesla collection
          </a>
          <Accordion items={accordionItems} />
        </div>
      </div>
      {/** About */}
      <div></div>
    </div>
  );
};

export default Product;
