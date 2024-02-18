'use client';
import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    './hero-1.jpg',
    './hero-2.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Ensure images are loaded before rendering
    images.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-900 bg-opacity-75 h-screen lg:h-64">
      
      <img
        src={images[currentSlide]}
        alt="Hero Slide"
        className="w-full object-cover transition-opacity duration-500 ease-in-out h-full"
        style={{ opacity: 1 }}
      />

      <img
        src={images[(currentSlide + 1) % images.length]}
        alt="Hero Slide (Next)"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        style={{ opacity: 0 }}
      />

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prevSlide} className="text-white bg-slate-800 rounded-full hover:bg-opacity-75 p-2 mr-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={nextSlide} className="text-white bg-slate-800 rounded-full hover:bg-opacity-75 p-2 ml-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;