import React from 'react'
import { NavLink } from 'react-router-dom'
const Navmenu = () => {
  return (
    //main nav
    <div className='h-17 p-8 '>
        {/* inside nav */}
      <div className='flex justify-between items-center'>

       {/* left side */}
        <div>

        <p className='font-inter font-medium text-3xl'>&lt;SS/&gt;</p>

        </div>
            {/* right side */}
        <div className='flex justify-between items-center space-x-6'>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/work"}>Work</NavLink>
            <NavLink to={"/testimonials"}>Testimonials</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
        <div className='space-x-4'>
       <i class="fa-solid fa-sun text-2xl cursor-pointer"></i>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-xl cursor-pointer" >
            Download CV
        </button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Navmenu
