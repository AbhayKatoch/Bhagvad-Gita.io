import React from 'react'
import './Verses1.css'
import { useState, useEffect } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import Sloks from '../Sloks'



function Verses1({chap, slok}) {
    const navigate = useNavigate()

    const [data,setData]=useState("")
    useEffect(()=>{
        fetch(`https://vedicscriptures.github.io/slok/${chap}/${slok}/`)
        .then(response=>response.json())
        .then(data=>{
            setData(data);
        })
    },[chap,slok])
    const navigation = ()=>{
        navigate(`/${data.chapter}/verse/${data.verse}`)
    }

    if(!data.siva?.et){
        return(
            <>
                    <div class="card animate-pulse hover:shadow-xl">
  <div class="h-4 bg-gray-200 rounded mb-2"></div>
  <div class="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
  <div class="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
  <div class="h-6 bg-gray-200 rounded w-1/4"></div>
</div>
                
        




                

            </>
        )}
  return (
    <>
        <div onClick={navigation} className="card hover:shadow-xl">
            <h3 className="card__title">Slok {data.verse}
            </h3>
            <p className="card__content">{data.siva?.et} </p>
            <div className="card__date">
                {data.siva?.author}
            </div>
            <div className="card__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                    <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                </svg>
            </div>
        </div>
    </>
  )
}

export default Verses1
