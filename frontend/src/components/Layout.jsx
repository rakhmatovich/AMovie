import React from 'react';
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function Layout({children}) {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;
