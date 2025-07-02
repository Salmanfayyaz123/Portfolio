import React from 'react'
import image from '../assets/image.jpg'

const Hero = () => {
  return (
    <div className="py-20 px-24 h-[552px]">
      <div className="flex justify-center items-center px-8 gap-12">
        {/* text div */}
        <div className="flex flex-col gap-y-12 w-[768px]">
          <p className="font-bold text-6xl">Hi, I’m Salman 👋</p>

          <p className="text-xl">
            I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
          </p>

          {/* location and availability */}
          <div className="flex flex-col gap-y-2 text-lg">
            <p>
              <i className="fa-solid fa-location-dot mr-2"></i>
              Bahawalpur,Pakistan
            </p>
            <p>
              <i className="fa-solid fa-circle-dot text-emerald-500 mr-2" ></i>
              Available for new projects
            </p>
          </div>

          {/* social icons */}
          <p className="flex flex-row gap-x-4 text-xl">
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </p>
        </div>

        {/* image div */}
        <div className="relative w-[400px] h-[360px]">
  {/* Background Layer */}
  <div className="absolute top-3 rounded left-4 w-full h-full bg-gray-200  shadow-md z-0"></div>

  {/* Foreground Image Layer */}
  <div className="relative z-10  bg-white  p-2">
    <img
      src={image}
      alt="Profile"
      className="w-[280px] h-[320px] ml-16 mt-5 object-cover "
    />
  </div>
</div>



        
      </div>
    </div>
  )
}

export default Hero
