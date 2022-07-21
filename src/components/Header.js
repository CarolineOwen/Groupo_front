import React from 'react';
import iconblack from "../assets/iconblack.png";

export default function Header () {
    return (
        <div>
        <header className='header-container'>
            <h1>Le réseau social d'entreprise</h1>
            <img src={iconblack} alt='logo entreprise'/>
        </header>
        </div>
    );
};







