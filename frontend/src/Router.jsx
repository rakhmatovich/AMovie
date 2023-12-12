import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Rooms from './pages/Rooms.jsx';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
