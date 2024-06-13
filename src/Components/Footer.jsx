import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <section className='border border-black p-20 flex flex-col items-center'>
        <div className='flex flex-row text-xl font-semibold  justify-center  gap-x-12'>
          <Link to="https://www.linkedin.com/in/abhaykatoch/"  className='hover:text-orange-500'>
            About me
          </Link>
          <Link to="https://rapidapi.com/bhagavad-gita-bhagavad-gita-default/api/bhagavad-gita3" className='hover:text-orange-500'>
            API
          </Link>
          <Link to="https://github.com/AbhayKatoch/Bhagvad-Gita.io" className='hover:text-orange-500'>
            Github
          </Link>
          <a className='hover:text-orange-500' href="mailto:abhaykatoch210@gmailcom">Contact me</a>

        </div>


        <div className='mt-12'>

            Made with 💙
        </div>

      </section>
    </>
  )
}

export default Footer