import React, { useEffect, useState } from 'react'
import Cards from '../Cards'
import { useNavigate } from 'react-router-dom';
import Interface from '../Interface';

function Chapters() {
  const cards = [];
  for (let index = 1; index<=18; index++) {
    cards.push(<Cards key={index} chap={index} />)
  }

  

  return (
    <>
       <section className='  mx-auto px-28 py-12 w-full min-h-screen bg-bg-black'>
            <div className='flex flex-col gap-y-6 mx-auto'>
                <h1 className=' text-left font-semibold text-5xl text-orange-500 font-serif'>Chapters</h1>
                <div className='flex flex-wrap flex-row gap-y-16 gap-x-16 justify-center'>
                  
                    {cards}

                </div>


            </div>

       </section>
    </>
  )
}

export default Chapters