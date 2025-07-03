import React from 'react';
import upwork from '../assets/upwork.png';

const Experience = () => {
  const experiences = [
    {
      title: 'Sr. Frontend Developer',
      company: 'Upwork',
      logo: upwork,
      period: 'Nov 2021 - Present',
      tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Ut pretium arcu et massa semper, id fringilla leo semper.',
        'Sed quis justo ac magna.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ],
    },
    {
      title: 'Sr. Frontend Developer',
      company: 'Upwork',
      logo: upwork,
      period: 'Nov 2021 - Present',
      tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Ut pretium arcu et massa semper, id fringilla leo semper.',
        'Sed quis justo ac magna.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ],
    },
    {
      title: 'Sr. Frontend Developer',
      company: 'Upwork',
      logo: upwork,
      period: 'Nov 2021 - Present',
      tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Ut pretium arcu et massa semper, id fringilla leo semper.',
        'Sed quis justo ac magna.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ],
    },
  ];

  return (
    <div className='bg-gray-50 py-16 px-4 sm:px-8 md:px-16 lg:px-24'>
      {/* Header */}
      <div className='flex flex-col items-center text-center'>
        <p className='bg-gray-200 rounded-2xl px-4 py-1 text-sm'>Experience</p>
        <p className='mt-2 text-base sm:text-lg'>
          Here is a quick summary of my most recent experiences:
        </p>
      </div>

      {/* Experience Cards */}
      <div className='mt-10 flex flex-col gap-10 items-center'>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row gap-6 md:gap-12 bg-white rounded-xl p-6 sm:p-8 w-full max-w-4xl shadow-sm'
          >
            {/* Logo */}
            <div className='flex-shrink-0 flex justify-center items-start md:items-center'>
              <img className='w-[102px] h-[28px]' src={exp.logo} alt={exp.company} />
            </div>

            {/* Text */}
            <div className='flex flex-col gap-3 flex-grow'>
              <p className='font-bold text-lg md:text-xl'>{exp.title}</p>
              <ul className='list-disc pl-4 space-y-1 text-sm sm:text-base'>
                {exp.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>

            {/* Date */}
            <div className='text-sm md:text-base text-right md:text-left whitespace-nowrap'>
              {exp.period}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
