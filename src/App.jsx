import { Button, CircularProgress } from "@mui/material";
import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "./Layout/Layout";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import CardById from "./pages/CardById";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<CircularProgress />}>
                  <Layout />
                </Suspense>
              }
            >
              <Route
                index={true}
                element={
                  <Suspense fallback={<CircularProgress />}>
                    <Discover />
                  </Suspense>
                }
              />
              <Route
                path="/profile"
                element={
                  <Suspense fallback={<CircularProgress />}>
                    <Profile />
                  </Suspense>
                }
              />
            </Route>
          <Route path="/card/:id" element={<CardById/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
