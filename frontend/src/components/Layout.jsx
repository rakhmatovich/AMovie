import React from 'react';
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import SecondFooter from './SecondFooter.jsx';

function Layout({children}) {
    return (
        <div>
            <Navbar/>
            {children}
            <SecondFooter />
            <Footer/>
        </div>
    );
}

export default Layout;
