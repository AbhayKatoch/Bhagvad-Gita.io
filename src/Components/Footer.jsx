import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <section className=' bg-orange-300 p-8 md:p-16 flex flex-col items-center'>
        <div className='flex sm:flex-row sm:flex-wrap sm:justify-center gap-4 lg:text-xl font-semibold sm:text-md'>
          <Link to="https://www.linkedin.com/in/abhaykatoch/"  className='hover:text-white'>
            About me
          </Link>
          <Link to="https://rapidapi.com/bhagavad-gita-bhagavad-gita-default/api/bhagavad-gita3" className='hover:text-white'>
            API
          </Link>
          <Link to="https://github.com/AbhayKatoch/Bhagvad-Gita.io" className='hover:text-white'>
            Github
          </Link>
          <a className='hover:text-white' href="mailto:abhaykatoch210@gmail.com">Contact me</a>

        </div>


        <div className='mt-8'>

            Made with 💙
        </div>

      </section>
    </>
  )
}

export default Footer