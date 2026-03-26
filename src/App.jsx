import { Button } from '@mui/material'
import React from 'react'
import Layout from './Layout/layout'
import Booking from './pages/Booking'
import { BrowserRouter, Route, Routes } from 'react-router'
import Facilities from './pages/Facilities'
import AboutUs from './pages/AboutUs'
import Location from './pages/Location'
import Contact from './pages/contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout />}>
         <Route index={true} element={<Booking />} />
         <Route path='/facilities' element={<Facilities/>} />
         <Route path='/aboutUs' element={<AboutUs />} />
         <Route path='/location' element={<Location />} />
         <Route path='/contact' element={<Contact/>} />
       </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
