import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'
import Chapters from './All Chapters/Chapters'

function Header() {
  return (
    <>
      <div className='flex justify-center conte p-6'>
        <div className=' flex items-center  max-w-full  min-w-2/5 h-16 rounded-full bg-orange-500  border border-gray-100 border-opacity-80 text-white shadow-xl' >

          <div className=' flex max-w-full p-8 gap-x-6 opacity-100 cursor-pointer font-normal '>
            <Link to={"/"} className=' text-md   hover:text-gray-600 hover:underline '>Bhagavad Gita</Link>
            <a href="#about">About Gita</a>
            <a href="#chapters">
              Chapters
            </a>
            
            

          </div>

        </div>

      </div>
    </>
  )
}

export default Header