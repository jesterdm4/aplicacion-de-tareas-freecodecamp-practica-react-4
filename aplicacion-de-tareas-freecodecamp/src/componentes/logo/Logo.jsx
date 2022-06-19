import React from 'react';
import logo from '../imagenes/logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-contenedor">
            <img src={logo} className="logo" alt="" />
        </div>
    );
};

export default Logo;
