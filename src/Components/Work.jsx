import React from 'react';
import portfolioone from '../assets/portfolioone.png';

const Work = () => {
  return (
    <div className='py-20 px-4 sm:px-8 md:px-24'>
      {/* Heading */}
      <div className='flex flex-col items-center text-center'>
        <p className='bg-gray-200 w-[95px] h-[28px] rounded-2xl text-center'>Work</p>
        <p className='mt-2 mb-8 text-base sm:text-lg'>
          Some of the noteworthy projects I have built:
        </p>
      </div>

      {/* Projects */}
      <div className='flex flex-col gap-12 items-center'>

        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
            } gap-6 bg-white rounded-xl shadow-sm w-full max-w-5xl overflow-hidden`}
          >
            {/* Image Section */}
            <div className='bg-gray-50 p-4 md:p-8 flex justify-center items-center md:w-1/2'>
              <img
                className='rounded-xl w-full max-w-[400px] h-auto object-cover'
                src={portfolioone}
                alt='project'
              />
            </div>

            {/* Description Section */}
            <div className='p-6 md:p-8 flex flex-col justify-center md:w-1/2 gap-4'>
              <p className='font-bold text-2xl'>Fiskli</p>
              <p className='text-sm sm:text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
              </p>

              <div className='flex flex-wrap gap-3'>
                {[
                  'TailwindCSS',
                  'HTML',
                  'CSS',
                  'Bootstrap',
                  'React',
                  'Blazor',
                  'Express',
                  'Native',
                  'Node js',
                ].map((tech, i) => (
                  <p
                    key={i}
                    className='bg-gray-200 text-sm px-3 py-1 rounded-2xl'
                  >
                    {tech}
                  </p>
                ))}
              </div>

              <p className='text-lg mt-2'>
                <i className='fa-solid fa-up-right-from-square cursor-pointer'></i>
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Work;
