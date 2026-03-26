import { Button } from '@mui/material'
import React, { Suspense } from 'react'
import { lazy } from "react"
import { BrowserRouter, Route, Routes } from 'react-router'
import CircularProgress from '@mui/material/CircularProgress';
import Layout from './Layout/layout'
import Home from './pages/Home'

const App = () => {
  const Home = lazy(() => import("./pages/Home"))
  const About = lazy(() => import("./pages/About"))
  const Contact = lazy(() => import("./pages/Contact"))
  return (
    <div>
      <BrowserRouter>
      <Routes>

  <Route path="/" element={<Layout />}>
    <Route index={true} element={<Suspense fallback={<CircularProgress />}><Home /></Suspense>} />
    <Route path="/about" element={<Suspense fallback={<CircularProgress />}><About /></Suspense>} />
    <Route path="/contact" element={<Suspense fallback={<CircularProgress />}><Contact /></Suspense>} />
  </Route>
</Routes>
</BrowserRouter>

    </div>
  )
}

export default App
