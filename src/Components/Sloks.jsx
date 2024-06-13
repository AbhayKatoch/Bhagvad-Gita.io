import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Sloks() {
  const { chap, slokid } = useParams();
  const [data,setData]=useState("")
    useEffect(()=>{
        fetch(`https://bhagavadgitaapi.in/slok/${chap}/${slokid}/`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data);
        })
    },[chap, slokid])
    if(!data){
        return <div>Loading...</div>
    }
    let commentary;
  if (data.chinmay?.hc !== "No commentary.") {
    commentary = (
      <div className='flex flex-col gap-y-2 leading-normal text-xl'>
        <div>"{data.tej?.ht}"</div>
        <div>by {data.tej?.author}</div>
      </div>
    );
  } else {
    commentary = (
      <div className='flex flex-col gap-y-2 leading-normal text-xl'>
        <div>"{data.chinmay?.hc}"</div>
        <div>by {data.chinmay?.author}</div>
      </div>
    );
  }
    let engcommentary;
  if (data.shiva?.hc !== "No commentary.") {
    engcommentary = (
      <div className='flex flex-col gap-y-2 leading-normal text-xl'>
        <div>"{data.siva?.et.slice(5)}"</div>
        <div>by {data.siva?.author}</div>
      </div>
    );
  } else {
    engcommentary = (
      <div className='flex flex-col gap-y-2 leading-normal text-xl'>
        <div>{data.san?.et}"</div>
        <div>by {data.san?.author}</div>
      </div>
    );
  }

  return (
    <>
        <div className=' flex flex-col items-center gap-y-8 text-center px-20 py-4'>
          <div className='flex flex-col gap-y-5 items-center'>
            <div className=' font-bold text-orange-500 text-2xl'>Chapter {data.chapter}</div>
            <div className=' font-bold text-orange-600 text-5xl'>Slok {data.verse}</div>
            
          </div>
          <p className='font-medium text-3xl mx-auto max-w-md text-center leading-normal'>{data.slok}</p>
          <p className='font-medium text-2xl mx-auto text-center max-w-lg leading-normal'>{data.transliteration}</p>
          {commentary}
          {engcommentary} 
        </div>
    </>
  )
}

export default Sloks