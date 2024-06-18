import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer'


function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Simulating a network request or some initialization
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Adjust the timeout duration as needed
    }, []);
  
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-orange-500 rounded-full animate-spin"></div>
      </div>
      );
    }
  return (
    <>
        <Header/>
        <main className='flex-grow'>
          <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout