import React from 'react'

function Loader() {
  return (
    <div className='w-100% h-screen bg-black'>
      <div className='text-white absolute top-8 left-1/2 transform -translate-x-1/2 font-sans font-thin text-sm text-center'>
        <h5 className=''>Designing Portfolio</h5>
        <h5>&copy; 2024</h5>
      </div>
      <h1 className='text-white font-sans font-normal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Nikita <span className='font-display'>Mundaye</span> is a</h1>
    </div>
  )
}

export default Loader
