import React from 'react';
import iconblack from "../assets/icon.png";
import { NavLink, useNavigate } from 'react-router-dom';


//Header fixe sur toutes les pages du site
function Header() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/")
    }
    return (
        <>
            <div className='global'>
                <header className='header-container'>
                    <div className='flex-logo-logout'>
                        <h1>Le réseau social d'entreprise
                            <i className="fa-solid fa-users"></i></h1>
                        <div className="logout-container" onClick={logout} >
                            <i className="fa-solid fa-door-open"></i>
                        </div>
                    </div>
                    <br />
                    <img src={iconblack} alt='logo entreprise' />
                </header>
            </div>
        </>
    );
};


export default Header;




