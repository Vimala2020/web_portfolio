import React from 'react';

function Intro() {
  return (
    <div id='home' className="h-screen bg-primary flex flex-col items-center justify-center gap-12 px-6  md:px-12 md:py-20 lg:gap-12 lg:px-24 lg:py-24">
      <h1 className="text-gray-700 text-lg md:text-xl lg:text-2xl">Hi, I am</h1>
      <h1 className="text-4xl font-semibold text-secondary md:text-4xl lg:text-5xl xl:text-6xl" id='name'>Vimala Gandhi</h1>
      <h2 className="text-xl font-semibold text-gray-700 md:text-2xl lg:text-3xl xl:text-4xl text-center">
        From concept to deployment, I build robust web solutions.
      </h2>
      <p className="text-gray-700 text-base md:text-lg lg:text-xl xl:text-2xl text-center max-w-2xl">
        As a MERN stack developer, my expertise in React.js, Node.js, Express.js, and MongoDB allows me to build sophisticated web solutions that prioritize user experience and performance.
      </p>
      <a
        href="/Vimalanew_developer.pdf"
        download="Vimala_Gandhi_Resume.pdf"
        className="border-2 border-tertiary font-bold px-6 py-1 text-3xl md:px-8 md:py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-4 border-l-4 rounded text-tertiary transition-all duration-300 hover:bg-tertiary hover:text-2xl"
      >
        Resume
      </a>
    </div>
  );
}

export default Intro;
