import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="main flex items-center justify-between md:justify-around lg:justify-around px-5 py-3 ">
        <div className="left">
            <img className='w-28 md:w-44 lg:w-44' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
        </div>
        <div className="right text-white flex items-center ">
            <div className="selector mx-3">
               <select className='bg-black px-5 py-1 rounded-md border-2 border-gray-600 bg-transparent hover:ring-2 hover:ring-gray-200 opacity-80 outline-none' name="" id="">
                <option value="">English</option>
                <option value="">Hindi</option>
               </select>
            </div>
            <button className='px-5 py-1 bg-red-600 font-bold rounded-md hover:bg-red-500'>
              Sign In
            </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
