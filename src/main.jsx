import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Chapters from './Components/All Chapters/Chapters.jsx'
import Layout from './Layout.jsx'
import Chapter1 from './Components/All Chapters/Chapter1.jsx'
import Interface from './Components/Interface.jsx'
import Sloks from './Components/Sloks.jsx'
import About from './Components/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<Layout />}>
        <Route path=''  element={<Interface/>}/>
        <Route path='chapter/:chap' element={<Chapter1 />}/>
        <Route path='/:chap/verse/:slokid' element={<Sloks/>}/>


      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
