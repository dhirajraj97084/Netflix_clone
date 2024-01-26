import React from 'react'

function Enjoy() {
  return (
    <div>
      <div className="main flex px-4 flex-wrap items-center py-20 justify-evenly ">
        {/* left */}
        <div className="left">
          <h1 className='text-white text-4xl text-center md:text-start lg:text-start lg:text-5xl md:lg:text-5xl font-bold mb-3'>Enjoy On your TV</h1>
          <p  className='text-white mb-7 text-lg text-center md:text-start lg:text-start '>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br className='hidden md:block lg:block' /> Laudantium explicabo architecto obcaecati voluptatem ipsam non.</p>
        </div>
        {/* right */}
        <div className="right">
           <video autoPlay={true} muted  className='w-[22em] md:w-[35em] lg:w-[35em]' src="/video/ram.mp4"></video>
        </div>
      </div>
      <div className="hr"></div>
    </div>
  )
}

export default Enjoy
