import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Thread from './Thread';


const Posts = () => {
    const [data, setData] =useState([]);


    const getData=()=>{
    

       axios.get('http://localhost:3000/api/posts')
       .then((res)=>
        setData(res.data))
        
       .catch((err)=> console.log(err))
    }
   
    useEffect(()=>{
    getData()
},[]);


    return (
    
        <>
        <div className='posts'>
        {data.map((posts)=>(
        <Thread key={posts._id} props={posts}/>))}
            </div>
        </>
    );
};

export default Posts;