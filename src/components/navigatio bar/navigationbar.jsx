import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navigation">
            <div className="logo">Your Logo</div>
            <ul className="menu">
                <li className="menu-item active">Home</li>
                <li className="menu-item">About</li>
                <li className="menu-item">Services</li>
                <li className="menu-item">Contact</li>
            </ul>
            <div className="menu-master">Master</div>
        </div>
    );
};

export default Navbar;
