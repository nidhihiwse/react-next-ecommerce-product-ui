"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";
import { SliderComponentProps } from "./productDetails.types";


const SliderComponent: React.FC<SliderComponentProps> = ({
  images,
  selectedImage,
  setSelectedImage,
}) => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current: number, next: number) => setSelectedImage(next),
    prevArrow: (
      <button type="button" className="slick-prev">
        Previous
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        Next
      </button>
    ),
  };

  useEffect(() => {
    if (sliderRef) {
      sliderRef.slickGoTo(selectedImage);
    }
  }, [selectedImage, sliderRef]);

  return (
    <div className="space-y-4">
      <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image}
              alt={`Car ${index + 1}`}
              className="w-full h-auto max-w-full"
            />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center flex-wrap">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-8 h-8 sm:w-20 sm:h-20 m-2 rounded-lg shadow-md cursor-pointer ${
              selectedImage === index
                ? "border-2 border-teal-500 opacity-100"
                : "opacity-50"
            }`}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;