import React from 'react'

function SectionTitle({ title }) {
  return (
    <div className='flex gap-20  items-center '>
      <div className='w-40 h-[1px] bg-tertiary'></div>
      <h1 className=' text-5xl text-tertiary'>{title}</h1>
      <div className='w-40 h-[1px] bg-tertiary'></div>

     
    </div>
  );
}

export default SectionTitle;
