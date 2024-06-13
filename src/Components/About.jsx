import React from 'react'

function About() {
  return (
    <>
        <section className='flex flex-col lg:flex-row px-4 sm:px-6  lg:px-28 py-12' >
            <div className='flex flex-col gap-y-6 w-full lg:w-1/2'>

                <h2 className=' text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-orange-500'>
                    About Bhagvad Gita
                </h2>
                <p className='text-black font-semibold text-base lg:text-lg'>
                Bhagavad Gita, also known as the Gita - "The Song of The Lord" is a practical guide to one's life that guides one to re-organise their life, achieve inner peace and approach the Supreme Lord (the Ultimate Reality). It is a 700-verse text in Sanskrit which comprises chapters 23 through 40 in the Bhishma-Parva section of the Mahabharata.
                <br/>
                <br />
            The Bhagavad Gita is a dialogue between Arjuna, a supernaturally gifted warrior and his guide and charioteer Lord Krishna on the battlefield of Kurukshetra. As both armies stand ready for the battle, the mighty warrior Arjuna, on observing the warriors on both sides becomes overwhelmed with grief and compassion due to the fear of losing his relatives and friends and the consequent sins attributed to killing his own relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus, follows the wisdom of the Bhagavad Gita. Over 18 chapters, Gita packs an intense analysis of life, emotions and ambitions, discussion of various types of yoga, including Jnana, Bhakti, Karma and Raja, the difference between Self and the material body as well as the revelation of the Ultimate Purpose of Life.
                </p>
            </div>
            <div className='sm:mt-12 sm:w-80 sm:mx-auto  lg:w-1/2 flex justify-center lg:justify-end items-center '>
                <img src=" new.png" alt="" className= ' border border-black rounded-full w-full lg:w-3/4 lg:pt-0 h-fit animate-glow'  />
                


            </div>
            

            
        </section>
    </>
  )
}

export default About