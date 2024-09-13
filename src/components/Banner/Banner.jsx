import React from 'react'

const Banner = () => {
  return (
    <div className='w-full h-[65vh] bg-green-900'>
      <div className='main-heading'>
        <h1 className='font-bold text-3xl text-[#fff]'>Plumber near me in <span className='uppercase'>usa</span> </h1>
      </div>
      <div className="description">
        <p className='font-medium text-sm text-[#fff] leading-relaxed' >Looking for Plumber services near you? Find reliable and experienced Plumbing Company in the USA.</p>
      </div>
     <a href="">
        <button>
            <span></span>
            <p> (877) 674-0877</p>
        </button>
     </a>
    </div>
  )
}

export default Banner
