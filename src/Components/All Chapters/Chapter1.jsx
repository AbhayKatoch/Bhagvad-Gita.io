import React from 'react'
import { useState, useEffect } from 'react'
import Verses1 from '../Verses/Verses1'
import { Await, useLoaderData, useParams } from 'react-router-dom'
import Sloks from '../Sloks'

function Chapter1() {
    const {chap} = useParams()
    
    const [data,setData]=useState("")
    useEffect(()=>{
        fetch(`https://bhagavadgitaapi.in/chapter/${chap}/`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data);
        })
    },[chap])
    if(!data){
        return <div>Loading...</div>
    }

   
  return (
    <>
        <div className=' px-56 py-8 w-full'>
            <div className='flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-6 pb-14'>
                    <div className='text-center chapter_no font-bold text-orange-500 text-3xl'>
                        Chapter {chap}
                        
                    </div>
                    <div className='text-center name text-3xl font-medium'>
                        {data.translation}
                        
                    </div>
                    <div className='text-center description'>
                        {data.summary && data.summary.en}

                        
                    </div>
                    
                </div>
                <div className='flex flex-col gap-y-5 text-center pb-8' >
                    <hr className=' bg-gray-400 h-0.5 '/>
                    <div className=' text-xl font-semibold'>{data.verses_count} Sloks</div>
                    <hr className=' bg-gray-400 h-0.5 '/>

                </div>
                <div className='flex  flex-wrap flex-row gap-y-4 px-6 justify-center gap-x-10'>
                {Array.from({ length: data.verses_count }, (_, index) => (
                    <Verses1 key={index} chap={chap} slok={index + 1} />
                ))}

                </div>
            </div>
        </div>
    </>
  )
}

export default Chapter1
