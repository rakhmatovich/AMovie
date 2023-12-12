import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import RoomsMenu from './components/RoomsMenu.jsx';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms-menu" element={<RoomsMenu/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
