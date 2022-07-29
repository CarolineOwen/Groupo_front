import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import axios from 'axios';


const SinglePost = () => {
   
const {_id}= useParams();
const [getpost, setGetpost] = useState({})
const [comments, setComments] = useState('');

useEffect(()=>{
    const config = {
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }
    axios.get(`http://localhost:3000/api/posts/${_id}` , config)
    .then((res)=>(res.data))
    .then((data)=>(setGetpost(data)))
    .catch((err)=> console.err(err))
},[_id])




console.log(getpost.comments);


const handleModi =(e) =>{
    e.preventDefault();
   
    
    axios({method:"put",
    url: `http://localhost:3000/api/posts/${_id}`,
    withCredentials: false,
    data:{
        comments,
    },
    
    headers: { 
      "Authorization": "Bearer " + localStorage.getItem('token'),
      "Content-Type": "multipart/form-data",
     },
    })
    .then((res)=>{
    console.log(res);
    })
    .catch((err)=>{
        console.log(err)
    })

}

    return (
        <div>
            <form className="global-post" action="" onSubmit={handleModi} id="post" method='post'>
  <div className='message-du-jour'>
            <label htmlFor='comments'>Votre message:{getpost.comments}
            <input className='champs' type="text" name="comments" id="comments" placeholder='Modifier le message' onChange={(e) =>
       setComments(e.target.value)} value={comments}/></label>
       </div>
       <br/>
       <input className='btn-submit' type="submit" value="modifier"/>
            </form>
        </div>
    );
};

export default SinglePost;