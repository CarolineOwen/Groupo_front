import React from 'react';
import {NavLink} from "react-router-dom";


 
function Footer() {

    const logout=()=>{
        localStorage.clear();
    }
    return (
        <nav className='footer-container'>
            <li onClick={logout}>
            <NavLink to="/"><i className="fa-solid fa-door-open"></i></NavLink>
            </li>
        </nav>
    )
}



export default Footer;