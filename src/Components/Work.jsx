import React from 'react'
import portfolioone from '../assets/portfolioone.png'
const Work = () => {
  return (
    <div className='p-24 '>
       <div className='flex flex-col justify-center items-center '>
         <p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Work</p>
      <p className='mt-2 mb-8'>Some of the noteworthy projects I have built:</p>
       </div>

      <div className=' gap-12'>
          <div className='w-[1152px] flex justify-center mt-8 h-[480px] rounded-xl items-stretch'>
            <div className='bg-gray-50 p-12 w-1/2'>
                <img className='rounded-xl w-[480px] h-[384px]' src={portfolioone} alt='project image' />
            </div>
            <div className='p-12 flex flex-col justify-center gap-6 h-full w-1/2'>
                <p className='font-bold text-2xl'>Fiskli</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className='flex flex-wrap gap-8'>
                        <p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>TailwindCSS</p>
                        <p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>HTML</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>CSS</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Bootstrap</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>React</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Blazor</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Express</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Native</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Node js</p>
                    </div>
                    <p>
                        <i class="fa-solid fa-up-right-from-square cursor-pointer"></i>
                    </p>
            </div>
        </div>

              <div className='w-[1152px] flex justify-center mt-8 h-[480px] rounded-xl items-stretch'>
            
            <div className='p-12 flex flex-col justify-center gap-6 h-full w-1/2'>
                <p className='font-bold text-2xl'>Fiskli</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className='flex flex-wrap gap-8'>
                        <p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>TailwindCSS</p>
                        <p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>HTML</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>CSS</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Bootstrap</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>React</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Blazor</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Express</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Native</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Node js</p>
                    </div>
                    <p>
                        <i class="fa-solid fa-up-right-from-square cursor-pointer"></i>
                    </p>
            </div>
            <div className='bg-gray-50 p-12 w-1/2'>
                <img className='rounded-xl w-[480px] h-[384px]' src={portfolioone} alt='project image' />
            </div>
        </div>
         <div className='w-[1152px] flex justify-center mt-8 h-[480px] rounded-xl items-stretch'>
            <div className='bg-gray-50 p-12 w-1/2'>
                <img className='rounded-xl w-[480px] h-[384px]' src={portfolioone} alt='project image' />
            </div>
            <div className='p-12 flex flex-col justify-center gap-6 h-full w-1/2'>
                <p className='font-bold text-2xl'>Fiskli</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className='flex flex-wrap gap-8'>
                        <p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>TailwindCSS</p>
                        <p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>HTML</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>CSS</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Bootstrap</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>React</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Blazor</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Express</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Native</p><p className='w-[95px] h-[28px] bg-gray-200 rounded-2xl text-center'>Node js</p>
                    </div>
                    <p>
                        <i class="fa-solid fa-up-right-from-square cursor-pointer"></i>
                    </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work
