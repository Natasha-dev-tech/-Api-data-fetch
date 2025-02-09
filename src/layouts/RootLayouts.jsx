import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'



const Rootlayouts = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   
   
   </>
  )
}

export default Rootlayouts