import { Button } from '@mui/material'
import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './Layout/layout';
import Home from './pages/home';
import Servic from './pages/servic';
import Notefound from './pages/notefound';
import Career from './pages/career';
import CareerDetails from './pages/CareerDetails';
import Contact from './pages/contact';

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/servic",
        element:<Servic/>
      },
      {
        path:"/career",
        element:<Career/>
      },
      {
        path:"/careerdatails",
        element:<CareerDetails/>
      },
      {
        path:"/contact",
        element:<Contact />
      }
    ]
  },
  {
    path:"*",
    element:<Notefound/>
  }
]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
