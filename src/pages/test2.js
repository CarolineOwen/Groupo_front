
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