import React from 'react';
import profile from '../assets/profile.png';

const Testimonial = () => {
  return (
    <div className='bg-gray-50 py-16 px-4 sm:px-8 md:px-24'>
      {/* Header */}
      <div className='flex flex-col items-center text-center mb-12'>
        <p className='bg-gray-200 w-[120px] h-[28px] rounded-2xl text-center'>Testimonials</p>
        <p className='mt-2 text-base sm:text-lg'>Nice things people have said about me:</p>
      </div>

      {/* Testimonials */}
      <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-4'>
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className='bg-white rounded-xl p-6 sm:p-8 w-full sm:w-[320px] md:w-[373px] shadow-md flex flex-col items-center text-center gap-4'
          >
            <img className='w-24 h-24 rounded-full object-cover' src={profile} alt='profile' />
            <p className='text-sm'>
              “Job well done! I am really impressed. He is very very good at what he does :) I would recommend Sagar and will rehire in the future for Frontend development.”
            </p>
            <p className='font-bold'>John Doe</p>
            <p className='text-sm'>Founder - xyz.com</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
