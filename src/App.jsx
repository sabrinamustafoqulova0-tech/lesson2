import { Button, CircularProgress } from '@mui/material'
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

let Layout =lazy(()=> import ('./Layout/Layout'))
let Services =lazy(()=> import ('./pages/Services'))
let Table =lazy(()=> import ('./pages/TablePages'))
let TableById =lazy(()=> import ('./pages/TableById'))


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>   
       <Route path='/'  element={<Suspense fallback={<CircularProgress />}><Layout /></Suspense>}>
        <Route index={true} element={<Suspense fallback={<CircularProgress />}><Services /></Suspense>} />
        <Route path="/table" element={<Suspense fallback={<CircularProgress />}><Table /></Suspense>} />
      </Route>
      <Route path="/table/:categoryId" element={<TableById/>}/>
    </Routes>
  </BrowserRouter></>
  )
}

export default App