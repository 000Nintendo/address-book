import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import clientRoutes from "./constants/routes";

const Home = lazy(() => import("./pages/home/Home"));

function App() {
  return (
    <div className="app-component">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={clientRoutes.home} element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
