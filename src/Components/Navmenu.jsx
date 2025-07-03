import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import hamburger from '../assets/hamburger.png'
import Sun from '../assets/sun.jpeg'
const Navmenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='p-6  '>
      <div className='flex justify-between items-center'>

        {/* Left side */}
        <div>
          <p className='font-inter font-medium text-3xl'>&lt;SS/&gt;</p>
        </div>

        {/* Desktop nav links (hidden on small screens) */}
        <div className='hidden md:flex items-center space-x-6'>
          <div className='flex space-x-4'>
             <a href="#about">About</a>
  <a href="#work">Work</a>
  <a href="#testimonials">Testimonials</a>
  <a href="#contact">Contact</a>
          </div>
          <div className='flex items-center space-x-4'>
  {/* <div className='w-16 h-16 cursor-pointer'>
   <img src={Sun} />
  </div> */}
  <a
  href="/SALMANFAYYAZ.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 bg-gray-900 text-white rounded-xl cursor-pointer"
>
  Download CV
</a>

</div>

        </div>

        {/* Hamburger Icon (shown only on small screens) */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
           <img className='w-8 h-8 cursor-pointer' src={hamburger} alt='hamburger' />
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      {isOpen && (
        <div className='mt-4 flex flex-col space-y-4 md:hidden'>
          <NavLink to='/about' onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to='/work' onClick={() => setIsOpen(false)}>Work</NavLink>
          <NavLink to='/testimonials' onClick={() => setIsOpen(false)}>Testimonials</NavLink>
          <NavLink to='/contact' onClick={() => setIsOpen(false)}>Contact</NavLink>
          <div className='flex items-center space-x-4'>
            <i className='fa-solid fa-sun text-2xl cursor-pointer'></i>
            <button className='px-4 py-2 bg-gray-900 text-white rounded-xl cursor-pointer'>
              Download CV
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navmenu;
