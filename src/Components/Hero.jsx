import React from 'react';
import image from '../assets/image.jpg';

const Hero = () => {
  return (
    <div className="py-12 mb-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        
        {/* text div */}
        <div className="flex flex-col gap-y-8 w-full md:w-[60%] text-center md:text-left">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Hi, I’m Salman 👋
          </p>

          <p className="text-base sm:text-lg md:text-xl">
            I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 2 years, I still love it as if it was something new.
          </p>

          {/* location and availability */}
          <div className="flex flex-col gap-y-2 text-base sm:text-lg">
            <p>
              <i className="fa-solid fa-location-dot mr-2"></i>
              Bahawalpur, Pakistan
            </p>
            <p>
              <i className="fa-solid fa-circle-dot text-emerald-500 mr-2"></i>
              Available for new projects
            </p>
          </div>

          {/* social icons */}
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <i className="fa-brands fa-github cursor-pointer"></i>
            <i className="fa-brands fa-x-twitter cursor-pointer"></i>
            <i className="fa-brands fa-linkedin cursor-pointer"></i>
          </div>
        </div>

        {/* image div */}
        <div className="relative w-[260px] sm:w-[300px] md:w-[360px] h-[320px] sm:h-[340px] md:h-[360px]">
          {/* Background Layer */}
          <div className="absolute top-3 left-4 w-full h-full bg-gray-200 rounded shadow-md z-0"></div>

          {/* Foreground Image Layer */}
          <div className="relative z-10 bg-white p-2 rounded">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>  
  );
};

export default Hero;
