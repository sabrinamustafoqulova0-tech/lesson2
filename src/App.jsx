import { Button } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home';
import Leayout from './Layout/Leayout';
import CardById from './pages/CardById';

const App = () => {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Leayout/>} >
      <Route index={true} element={<Home/>}/>
      </Route>
        <Route path="/card/:cardId" element={<CardById/>}/>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
