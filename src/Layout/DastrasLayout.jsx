import React from 'react'
import { Link, Outlet } from 'react-router'

const DastrasLayout = () => {
  return (
    <div>
      <nav className='flex justify-between px-[100px]'>
        <div className='flex gap-3'>
    <Link to={"/dastras"}>Dastras</Link>
    <Link to={"/dastras/ob"}>Ob</Link>
    </div>
    <Link to={"/"}>Home</Link>
    </nav>
    <div>
        <Outlet/>
    </div>
    </div>
  )
}

export default DastrasLayout
