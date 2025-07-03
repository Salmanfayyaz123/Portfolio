import React from 'react';
import blazor from '../assets/blazor.png';
import bootstrap from '../assets/bootstrap.png';
import c from '../assets/c.png';
import css from '../assets/css.png';
import express from '../assets/express.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import restapi from '../assets/restaspi.png';
import tailwind from '../assets/tailwind.png';
import wordpress from '../assets/wordpress.png';
import Server from '../assets/Server.png';

const Skills = () => {
  const skills = [
    { img: html, name: 'HTML' },
    { img: css, name: 'CSS' },
    { img: javascript, name: 'JavaScript' },
    { img: mongodb, name: 'MongoDB' },
    { img: express, name: 'Express' },
    { img: react, name: 'React' },
    { img: node, name: 'Node' },
    { img: mysql, name: 'MySQL' },
    { img: blazor, name: 'Blazor' },
    { img: c, name: 'C#' },
    { img: Server, name: 'Server' },
    { img: bootstrap, name: 'Bootstrap' },
    { img: tailwind, name: 'Tailwind CSS' },
    { img: restapi, name: 'REST API' },
    { img: github, name: 'GitHub' },
    { img: wordpress, name: 'WordPress' },
  ];

  return (
    <div className='py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white'>
      {/* Heading */}
      <div className='flex flex-col justify-center items-center text-center'>
        <p className='bg-gray-200 rounded-2xl px-4 py-1 text-sm mb-2'>Skills</p>
        <p className='text-base sm:text-lg'>
          The skills, tools and technologies I am really good at:
        </p>
      </div>

      {/* Skills Grid */}
      <div className='mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center'>
        {skills.map((skill, index) => (
          <div key={index} className='flex flex-col items-center w-[88px] h-[100px]'>
            <img src={skill.img} alt={skill.name} className='w-12 h-12 object-contain' />
            <p className='text-sm mt-2 text-center'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
