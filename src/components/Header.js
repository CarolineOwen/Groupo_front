import React from 'react';
import iconblack from "../assets/icon.png";


//Header fixe sur toutes les pages du site

function Header() {

    return (
        <div className='global'>
            <header className='header-container'>
                <h1>Le réseau social d'entreprise
                    <i className="fa-solid fa-users"></i></h1>
                <br />
                <img src={iconblack} alt='logo entreprise' />
            </header>
        </div>
    );
};


export default Header;




