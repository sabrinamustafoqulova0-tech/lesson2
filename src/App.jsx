import { Button } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/about";
import Home from "./pages/home";
import Layout from "./Layout/layout";
import DastrasLayout from "./Layout/DastrasLayout";
import Dastras from "./pages/dastras";
import Ob from "./pages/ob";
import ProductById from "./pages/ProductById";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index={true} element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/dastras" element={<DastrasLayout />}>
            <Route index={true} element={<Dastras />} />
            <Route path="/dastras/ob" element={<Ob />} />
          </Route>
          <Route path="/product/:productId" element={<ProductById/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
