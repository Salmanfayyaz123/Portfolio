import React from 'react'
import profile from '../assets/profile.png'
const Testimonial = () => {
  return (
    <div className='bg-gray-50 h-[740px] p-12'>
      <div className='flex flex-col justify-center items-center '>
         <p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Testimonials</p>
      <p className='mt-2 mb-8'>Nice things people have said about me:</p>
       </div>

       <div className='w-[1216px] h-[428px] flex flex-row gap-12 justify-center'>
       
       <div className='flex flex-col justify-center items-center w-[373px] h-[428px] bg-white rounded-xl p-12 gap-6'>
         <div>
            <img className='w-26 h-26' src={profile} alt='profile' />
        </div>
         <p>“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
        <p className='font-bold'>John Doe</p>
        <p >Founder - xyz.com</p>
       </div>
         <div className='flex flex-col justify-center items-center w-[373px] h-[428px] bg-white rounded-xl p-12 gap-6'>
         <div>
            <img className='w-26 h-26' src={profile} alt='profile' />
        </div>
         <p>“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
        <p className='font-bold'>John Doe</p>
        <p >Founder - xyz.com</p>
       </div>
         <div className='flex flex-col justify-center items-center w-[373px] h-[428px] bg-white rounded-xl p-12 gap-6'>
         <div>
            <img className='w-26 h-26' src={profile} alt='profile' />
        </div>
         <p>“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
        <p className='font-bold'>John Doe</p>
        <p >Founder - xyz.com</p>
       </div>
       </div>
    </div>
  )
}

export default Testimonial
