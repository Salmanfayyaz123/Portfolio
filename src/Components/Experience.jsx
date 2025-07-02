import React from 'react'
import upwork from '../assets/upwork.png'
const Experience = () => {
  return (
    <div className='bg-gray-50   h-[1140px] p-16'>
      <div className='flex flex-col justify-center items-center '> <p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Experience</p>
      <p className='mt-2'>Here is a quick summary of my most recent experiences:</p>
       </div>
       <div className='flex flex-col gap-12  justify-center items-center mt-8'>
        <div className='flex justify-center w-[896px] gap-12 h-[288px] bg-white rounded-xl p-8'>
            <div>
                <img className='w-[102px] h-[28px]' src={upwork} alt='upwork' />
            </div>
            <div className='flex flex-col gap-4'>
                <p className='font-bold text-xl'>Sr. Frontend Developer</p>
                <ul className='flex flex-col gap-3 list-disc'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                     <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                      <li>Sed quis justo ac magna.</li>
                       <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
            </div>
            <div>
                <p>Nov 2021 - Present</p>
            </div>
        </div>
        <div className='flex justify-center w-[896px] gap-12 h-[288px] bg-white rounded-xl p-8'>
            <div>
                <img className='w-[102px] h-[28px]' src={upwork} alt='upwork' />
            </div>
            <div className='flex flex-col gap-4'>
                <p className='font-bold text-xl'>Sr. Frontend Developer</p>
                <ul className='flex flex-col gap-3 list-disc'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                     <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                      <li>Sed quis justo ac magna.</li>
                       <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
            </div>
            <div>
                <p>Nov 2021 - Present</p>
            </div>
        </div>
        <div className='flex justify-center w-[896px] gap-12 h-[288px] bg-white rounded-xl p-8'>
            <div>
                <img className='w-[102px] h-[28px]' src={upwork} alt='upwork' />
            </div>
            <div className='flex flex-col gap-4'>
                <p className='font-bold text-xl'>Sr. Frontend Developer</p>
                <ul className='flex flex-col gap-3 list-disc'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                     <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                      <li>Sed quis justo ac magna.</li>
                       <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
            </div>
            <div>
                <p>Nov 2021 - Present</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Experience
