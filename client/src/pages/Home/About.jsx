import React from 'react';
import SectionTitle from '../../components/SectionTitle';

function About() {
  const Skills = [
    "HTML/CSS",
    "Javascript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Tailwind CSS"
  ];

  return (
    <div id='about' >
      <SectionTitle title="About" />
      <div className='flex flex-col lg:flex-row w-full items-center gap-9  mb-20'>
        <div className='h-[60vh]'>
          <dotlottie-player 
            src="https://lottie.host/526afb61-0672-4736-b07a-1ecd9bf113ee/8bnnMACGC7.json"
            background="transparent"
            speed="1"
            autoplay>
          </dotlottie-player>
        </div>
        <div className='flex flex-col gap-7 w-full lg:w-1/2'>
          <p className='text-gray-700 text-lg lg:text-xl'>
            As a versatile Full Stack Developer with a strong background in MERN stack, 
            I specialize in crafting seamless user experiences using React.js, Node.js, Express.js, 
            and MongoDB. My recent project, the "Employee Attendance Tracker," showcases my ability to develop robust backend systems, integrate third-party services, and create dynamic, responsive front-end interfaces.
          </p>
        </div>
      </div>

      <SectionTitle title="Skill" />
      <div className='flex flex-col lg:flex-row w-full items-center gap-9 mb-20'id='skills'>
      <div className='h-[30vh] flex items-center justify-center mt-20'>
          <dotlottie-player 
            src="https://lottie.host/12b94bcd-daea-4bfc-a4eb-1a0114d5f80e/DEvFqj6tKV.json" 
            background="transparent" 
            speed="1" 
            loop 
            autoplay>
          </dotlottie-player>
        </div>
        <div className='flex flex-col gap-14 w-full lg:w-1/2'>
        <div className='flex flex-row gap-10  flex-wrap '> 
            {Skills.map((skill, index) => (
              <div key={index}>
                <h1 className='border-2 border-tertiary px-4 py-3 text-xl'>{skill}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
