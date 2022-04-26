import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FundsPage from "./pages/FundsPage";


const Rout = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}> </Route>
            <Route path="/funds" element={<FundsPage />}> </Route>
            <Route path="/datos-cliente" element={<h1>Statistics Page</h1>}></Route>
        </Routes>
    );
};

export default Rout;
