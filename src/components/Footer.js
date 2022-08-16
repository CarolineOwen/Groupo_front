import React from 'react';
import { NavLink } from "react-router-dom";


//Footer fixe sur toutes les pages du site

function Footer() {

    const logout = () => {
        localStorage.clear();
    }
    return (
        <footer className='footer-container'>
            <div onClick={logout}>
                <NavLink to="/"><i className="fa-solid fa-door-open"></i></NavLink>
            </div>
        </footer>
    )
}



export default Footer;