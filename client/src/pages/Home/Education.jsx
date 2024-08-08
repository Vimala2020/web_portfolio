import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Experience } from '../../resources/Experience';

function Education() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isDetailsVisible, setIsDetailsVisible] = useState(true);

  const handleClick = (index) => {
    setSelectedItem(index);
    setIsDetailsVisible(false);
    setTimeout(() => setIsDetailsVisible(true), 300); // Match duration with CSS transition
  };

  return (
    <div id='education'>
      <SectionTitle title="Education & Experience" />
      <div className='flex mt-10 gap-5 md:gap-10'>
        <div className='flex flex-col md:w-1/3 lg:w-1/4'>
          {Experience.map((experience, index) => (
            <div key={index} className='p-5 cursor-pointer' onClick={() => handleClick(index)}>
              <h1 
                className={`text-2xl px-5 ${selectedItem === index 
                  ? "text-tertiary border-tertiary rounded gap-2 border-l-4 -ml-[3px] bg-[#b8cff9] py-3" 
                  : "text-gray-700"}`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className='flex-1 md:w-2/3 lg:w-2/4 mt-5'>
          <div 
            className={`transition-all duration-100 ease-in-out ${isDetailsVisible ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"}`}
          >
            <h1 className='text-xl text-tertiary border-tertiary rounded gap-2 border-2 -ml-[3px] p-8'>
              {Experience[selectedItem].details}
            </h1>
            <div className='h-[30vh]'>
              <dotlottie-player src="https://lottie.host/8a22ee0f-ec96-4c89-986e-e9f08497dd5c/OKOdQLSXA7.json"
               background="transparent" 
               speed="1" 
               loop 
               autoplay
               ></dotlottie-player>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
