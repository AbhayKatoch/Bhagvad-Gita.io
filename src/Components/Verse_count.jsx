import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Verse_count({chap,slok}) {
    const navigate = useNavigate()

    const [data,setData]=useState("")
    useEffect(()=>{
        fetch(`https://bhagavadgitaapi.in/slok/${chap}/${slok}/`)
        .then(response=>response.json())
        .then(data=>{
            setData(data);
        })
    },[chap,slok])
    const navigation = ()=>{
        navigate(`/${data.chapter}/verse/${data.verse}`)
    }
    
    

  return (
    <>
        
        <div onClick={navigation} className=" px-1 hover:text-white  cursor-pointer hover:bg-orange-400 rounded-md">
           { data.verse}
        </div>
    
    </>
  )
}

export default Verse_count