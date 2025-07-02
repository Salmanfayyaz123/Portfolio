import React from 'react'
import blazor from '../assets/blazor.png'
import bootstrap from '../assets/bootstrap.png'
import c from '../assets/c.png'
import css from '../assets/css.png'
import express from '../assets/express.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import mongodb from '../assets/mongodb.png'
import mysql from '../assets/mysql.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import restapi from '../assets/restaspi.png'
import tailwind from '../assets/tailwind.png'
import wordpress from '../assets/wordpress.png'
import Server from '../assets/Server.png'

const Skills = () => {
  return (
    <div className='h-[560px] p-24'>
      <div className='flex flex-col justify-center items-center '> <p className='w-[75px] h-[28px] bg-gray-200 rounded-2xl text-center'>Skills</p>
      <p className='mt-2'>The skills, tools and technologies I am really good at:</p>
       </div>
      <div className="mt-12 flex flex-wrap justify-center gap-15">
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={html} alt="skill" />
    <p className="text-sm mt-2">HTML</p>
  </div>
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={css} alt="skill" />
    <p className="text-sm mt-2">CSS</p>
  </div>
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={javascript} alt="skill" />
    <p className="text-sm mt-2">JavaScript</p>
  </div>
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={mongodb} alt="skill" />
    <p className="text-sm mt-2">MongoDB</p>
  </div>
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={express} alt="skill" />
    <p className="text-sm mt-2">Express</p>
  </div>
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={react} alt="skill" />
    <p className="text-sm mt-2">React</p>
  </div>
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={node} alt="skill" />
    <p className="text-sm mt-2">Node</p>
  </div>
   <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={mysql} alt="skill" />
    <p className="text-sm mt-2">My Sql</p>
  </div>
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={blazor} alt="skill" />
    <p className="text-sm mt-2">Blazor</p>
  </div>
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={c} alt="skill" />
    <p className="text-sm mt-2">C#</p>
  </div>
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={Server} alt="skill" />
    <p className="text-sm mt-2">Server</p>
  </div>
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={bootstrap} alt="skill" />
    <p className="text-sm mt-2">Bootstrap</p>
  </div>
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={tailwind} alt="skill" />
    <p className="text-sm mt-2">Tailwind CSS</p>
  </div>
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={restapi} alt="skill" />
    <p className="text-sm mt-2">REST API</p>
  </div>
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={github} alt="skill" />
    <p className="text-sm mt-2">GitHub</p>
  </div>
  <div className="flex flex-col items-center w-[88px] h-[100px]">
    <img src={wordpress} alt="skill" />
    <p className="text-sm mt-2">WordPress</p>
  </div>
</div>


    </div>
    
  )
}

export default Skills
