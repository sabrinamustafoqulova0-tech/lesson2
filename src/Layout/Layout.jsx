import React from 'react'
import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <nav className='flex justify-between px-[100px]'>
        <div className='flex gap-3'>
    <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About</Link>
    </div>
    
    <Link to={"/dastras"}>DASTRAS</Link>
    </nav>
    <div>
        <Outlet/>
    </div>
    </div>
  )
}

export default Layout
