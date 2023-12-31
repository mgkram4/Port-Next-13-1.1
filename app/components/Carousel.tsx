"use client";

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import image1 from "/public/tom1.png";
import image2 from "public/IMG_2168.jpg";
import image3 from "public/IMG_2169.jpg";
import image4 from "public/IMG_2166.jpg";
import image5 from "public/IMG_2170.jpg";
import Image from "next/image";

function App() {
  const slides = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" flex h-96 carousel carousel-vertical rounded-box mt-12">
        <div className="carousel-item h-full">
          <img src="/tom1.png" />
        </div>
        <div className="carousel-item h-full">
          <img src="/lucy1.png" />
        </div>
        {/* <div className="carousel-item h-full">
          <img src="/cats1.png" />
        </div> */}

        <div className="carousel-item h-full">
          <img src="/cats2.png" />
        </div>
        <div className="carousel-item h-full">
          <img src="/cats4.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
