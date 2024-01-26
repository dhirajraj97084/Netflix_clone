import React from 'react'

function CreateProfile() {
  return (
    <div>
      <div className="main flex px-4 flex-wrap items-center py-20 justify-evenly ">
        {/* left */}
        <img src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="img" />
        {/* right */}
        <div className="right">
        <div className="left">
          <h1 className='text-white text-4xl text-center md:text-start lg:text-start lg:text-5xl md:lg:text-5xl font-bold mb-3'>Create Profile for Kids <br className='hidden md:block lg:block' />To watch offline</h1>
          <p  className='text-white mb-7 text-lg text-center md:text-start lg:text-start '>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br className='hidden md:block lg:block' /> Laudantium explicabo architecto obcaecati voluptatem ipsam non.</p>
        </div>
        </div>
      </div>
      <div className="hr"></div>
    </div>
  )
}

export default CreateProfile
