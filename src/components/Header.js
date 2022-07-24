import React from 'react';
import iconblack from "../assets/iconblack.png";



function Header () {
    const handleClic=(e)=>{
        console.log("ça fonctionne");
        localStorage.clear();
        window.location = '/';
    }
   
    return (
        <div>
        <header className='header-container'>
            
            <h1>Le réseau social d'entreprise</h1>
            
            <img src={iconblack} alt='logo entreprise'/>
            <button className="btn" onClick={handleClic}>logout</button>
        </header>
        </div>
    );
};


export default Header;




