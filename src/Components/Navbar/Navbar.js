import React from 'react';
import Logo from '../../Resources/Logo.jpg';

export default function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand">
                    <img src={Logo} width="30" height="30" className="d-inline-block align-top" /> Han's Inversions</div>
        </nav>
    );
}

