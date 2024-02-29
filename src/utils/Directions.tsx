import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Play from "../pages/Play";

export default function Directions() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Landing />} path="*" />
        <Route element={<Play />} path="/play" />
      </Routes>
    </BrowserRouter>
  );
}
