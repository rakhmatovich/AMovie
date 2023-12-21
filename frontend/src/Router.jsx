import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Rooms from './pages/Rooms.jsx';
import AboutUs from './pages/AboutUs.jsx';
import EventPage from './pages/EventPage.jsx';
import Contact from './pages/Contact.jsx';
import Reservation from './pages/Reservation.jsx'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms/>} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/events" element={<EventPage/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/reservation' element={<Reservation/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
