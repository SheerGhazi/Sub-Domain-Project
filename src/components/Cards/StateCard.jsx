import React from 'react';

const StateCard = ({ state }) => {
  return (
    <div
      className='w-full h-auto p-6 flex bg-[#ffffff] md:px-8 py-10 transform transition-transform duration-300 hover:scale-105'
      style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.15)' }}
    >
      <h3 className='font-bold text-xl'>{state}</h3>
    </div>
  );
};

export default StateCard;
