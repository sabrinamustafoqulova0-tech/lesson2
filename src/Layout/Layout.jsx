import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
      <nav className='flex m-[10px] p-[20px] text-green-600 font-bold border-2 rounded-2xl border-dashed px-[300px] text-2xl justify-center gap-36 '>
        <Link to={"/"}>Home</Link>
        <Link to={"/card"}>Card</Link>
      </nav>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
