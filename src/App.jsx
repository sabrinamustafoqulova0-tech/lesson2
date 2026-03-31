import { Button } from "@mui/material";
import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
const Leyout = lazy(() => import("./Layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Card = lazy(() => import("./pages/Card"));
const TableMui = lazy(() => import("./pages/TableMui"));
const TableAntd = lazy(() => import("./pages/TableAntd"));

let CardById = lazy(() => import("./pages/CardById"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Leyout />}>
            <Route index={true} element={<Home />} />
            <Route path="/card" element={<Card />} />
            <Route path="/tablemui" element={<TableMui />} />
            <Route path="/tableantd" element={<TableAntd />} />
          </Route>

          <Route path="/card/:categoryId" element={<CardById />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
