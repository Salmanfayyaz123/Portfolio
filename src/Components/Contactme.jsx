import React from 'react'

const Contactme = () => {
  return (
    <div className='px-24 py-20 h-[560px]'>
      <div className='flex flex-col justify-center items-center '>
         <p className='w-[105px] h-[28px] bg-gray-200 rounded-2xl text-center'>Get in touch</p>
      <p className=' mb-8 text-3xl text-center mt-6'>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
      <p className='mt-2 mb-8 text-3xl font-bold'><i class="fa-solid fa-envelope-circle-check"></i> salmanfayyaz123456@gmail.com <i class="fa-regular fa-copy"></i></p>
      <p className='mt-2 mb-8 text-3xl font-bold'><i class="fa-solid fa-phone"></i> +923489728866 <i class="fa-regular fa-copy"></i> </p>
      <p className='mt-2 mb-8'>You may also find me on these platforms!</p>
      <div className='flex flex-row gap-5 text-4xl cursor-pointer'>
         <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
      </div>
       </div>
    </div>
  )
}

export default Contactme
