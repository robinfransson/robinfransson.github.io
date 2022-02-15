import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./views/Home";
import { CardContainer } from "./components/CardContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home></Home>} />
          <Route path="cards" element={<CardContainer></CardContainer>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
