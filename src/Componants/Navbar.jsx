import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex justify-evenly items-center shadow-md bg-blue-100 mb-4 sticky top-0'>
    <h3 className=' w-20 '>
        <img className=' rounded-full cursor-pointer ' src="https://pngimg.com/uploads/eagle/eagle_PNG1227.png" alt="" />
    </h3>
    <div>
        <input type="search" placeholder='Searce here...' className=' outline-none border-2 w-[45vw] px-3 py-1 rounded-md ' />
        <button className=' px-3 py-1 bg-gray-600 hover:bg-gray-900 rounded-md ml-4 text-white'>Search</button>
    </div>
    <ul className=' flex gap-5 text-xl font-bold '>
        <li className=' cursor-pointer'>Home</li>
        <li className=' cursor-pointer'>Cart</li>
    </ul>
   </nav>
  )
}

export default Navbar