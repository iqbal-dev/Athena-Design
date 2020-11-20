import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import WeDo from '../WeDo/WeDo';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <Navbar></Navbar>
                <Banner></Banner>
                </div>
                <WeDo></WeDo>
        </div>
    );
};

export default Header;