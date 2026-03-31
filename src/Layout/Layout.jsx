import { Button } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
  // const { t, i18n } = useTranslation();
  return (
    <>
    <div className='p-[20px] px-[200px] flex justify-between items-center'>
    <nav className='flex gap-28 '>
      <Link to={"/"}>Home</Link>
      <Link to={"/card"}>Card</Link>
      <Link to={"/tablemui"}>Table width MUI</Link>
      <Link to={"/tableantd"}>Table width ANTD</Link>
    </nav>
    <Button variant='contained'>Open Focus</Button>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  )
}

export default Layout
