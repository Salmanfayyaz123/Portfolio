import React from 'react'
import image from '../assets/image2.jpg'
const About = () => {
  return (
    <div className="h-[962px] w-full bg-gray-50 relative">
  {/* Button */}
  <div className="flex justify-center items-center">
    <button className="bg-gray-200 w-[105px] h-[28px] rounded-xl mt-[96px] cursor-pointer">
      About me
    </button>
  </div>

  {/* Main Content Area */}
  <div className="mt-20 px-24 flex justify-center items-start gap-16">
    {/* Image Section */}
    <div className="relative w-[300px] h-[540px]">
      {/* Background Layer */}
      <div className="absolute top-4 left-4 w-full h-full bg-gray-200 rounded shadow-md z-0"></div>

      {/* Foreground Image */}
      <div className="relative z-10 bg-gray-50 p-2 rounded shadow-lg">
        <img
          src={image}
          alt="Profile"
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>

    {/* Text Section */}
    <div className="flex flex-col gap-6 w-[700px] text-gray-800">
      <p className="font-bold text-2xl">Curious about me? Here you have it:</p>

      <p>
        I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
      </p>

      <p>
        I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
      </p>

      <p>
        I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
      </p>

      <p>
        When I'm not in full-on developer mode, you can find me hovering around on Twitter or on Indie Hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
      </p>

      <p>Finally, some quick bits about me:</p>

      <ul className="list-disc list-inside space-y-1">
        <li>B.E. in Computer Engineering</li>
        <li>7+ Years of Experience</li>
        <li>Full Stack JavaScript Developer</li>
        <li>Based in India</li>
      </ul>

      <p>
        One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
      </p>
    </div>
  </div>
</div>

  )
}

export default About
