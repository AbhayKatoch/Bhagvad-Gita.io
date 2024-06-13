import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer'



function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout