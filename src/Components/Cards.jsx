import React, { useState, useEffect } from 'react'
import './Cards.css'
import { useNavigate, useLoaderData } from 'react-router-dom';

function Cards({chap}) {
    const [data,setData] = useState("")
  const navigate = useNavigate();

  
  useEffect(()=>{
      fetch(`https://bhagavadgitaapi.in/chapter/${chap}/`)
      .then(response=>response.json())
      .then(data=>{
          console.log(data);
          setData(data);
        })
    },[chap])

    const navigation = ()=>{
        navigate(`/chapter/${data.chapter_number}`)
    }
  return (
    <>
        <div>
            
            <div class="relative font-serif flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div class="p-6">
                    <h6 class="block  mb-2 text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Chapter {data.chapter_number}
                    </h6>
                    <h5 class="block mb-2  text-xl text-orange-600 antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                      {data.translation}
                    </h5>
                    <h6 className=' text-gray-600 font-sans font-semibold'>
                        {data.verses_count} Verses
                    </h6>
                    <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                        {data.summary && data.summary.en.slice(0,200)}...
                    </p>
                </div>
                <div class="p-6 pt-0">
                    <button onClick={navigation}
                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-orange-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    Read More
                    </button>
                </div>
            </div>
        </div>  
            

    </>
  )
}

export default Cards