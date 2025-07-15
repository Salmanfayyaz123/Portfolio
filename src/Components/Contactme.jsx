import React from 'react';

const Contactme = () => {
  return (
    <div className='px-4 sm:px-8 md:px-24 py-16 sm:py-20 bg-white'>
      <div className='flex flex-col justify-center items-center text-center'>
        {/* Section Badge */}
        <p className='w-[120px] h-[28px] bg-gray-200 rounded-2xl text-center text-sm flex items-center justify-center'>
          Get in touch
        </p>

        {/* Main Text */}
        <p className='mt-6 mb-8 text-lg sm:text-2xl md:text-3xl max-w-4xl'>
          What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
        </p>

        {/* Email */}
        <p className='mt-2 mb-4 text-lg sm:text-2xl font-semibold break-words'>
          <i className='fa-solid fa-envelope-circle-check mr-2'></i>
          salmanfayyaz123456@gmail.com
          <i className='fa-regular fa-copy ml-2'></i>
        </p>

        {/* Phone */}
        <p className='mb-6 text-lg sm:text-2xl font-semibold'>
          <i className='fa-solid fa-phone mr-2'></i>
          +92 348 9728866
          <i className='fa-regular fa-copy ml-2'></i>
        </p>

        {/* Social Prompt */}
        <p className='text-base mb-4'>You may also find me on these platforms!</p>

        {/* Social Icons */}
        <div className='flex flex-row gap-6 text-2xl sm:text-3xl md:text-4xl cursor-pointer'>
          <a href="https://github.com/Salmanfayyaz123" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-github"></i>
</a>

<a href="https://twitter.com/Salman1478271" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-x-twitter"></i>
</a>

<a href="https://linkedin.com/in/salman-fayyaz-206366289" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-linkedin"></i>
</a>

        </div>
      </div>
    </div>
  );
};

export default Contactme;
