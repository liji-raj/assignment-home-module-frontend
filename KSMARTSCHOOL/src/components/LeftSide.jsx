// components/LeftSide.jsx
import React from 'react';
import LogoSection from './LogoSection';
import ImageCarousel from './ImageCarousel';
import LeftSection from './LeftSection';

const LeftSide = () => {
  return (
    <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-white to-gray-100 p-8">
      <LogoSection />
      <ImageCarousel />
      <LeftSection />
    </div>
  );
};

export default LeftSide;