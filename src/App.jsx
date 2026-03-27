import { Button, CircularProgress } from '@mui/material'
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
let Layout =lazy(()=> import ('./Layout/layout'))
let Home =lazy(()=> import ('./pages/Home'))
let Card =lazy(()=> import ('./pages/Cards'))
let CardById =lazy(()=> import ('./pages/CardById'))

const App = () => {
  return (
    <div>
  <BrowserRouter>
    <Routes>   
        <Route path='/' element={<Layout />}>
        <Route index={true} element={<Suspense fallback={<CircularProgress />}><Home /></Suspense>} />
        <Route path="/card" element={<Suspense fallback={<CircularProgress />}><Card /></Suspense>} />
      </Route>
      <Route path="/card/:categoryId" element={<CardById/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
