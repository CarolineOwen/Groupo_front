
import React, { useEffect, useState } from 'react';


const Hook = () => {
const [count, setCount]= useState(10)

useEffect(()=>{
console.log("je suis toto")
})
//prev pour être sur que la valuer précédente est bien prise en compte
const click=()=>{
setCount((prevCount) =>
   prevCount +1 )
}

    return (
        <div>
            Hook{count}
            <button onClick={click}>Click</button>
        </div>
    );
};

export default Hook;


/*function Header () {
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
};*/