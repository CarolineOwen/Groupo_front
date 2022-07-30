import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



const SinglePost = () => {
   
const {_id}= useParams();
const [getpost, setGetpost] = useState({})
const [comments, setComments] = useState('');
const [imageUrl, setImageUrl] = useState('');
const [likes, setLikes] = useState(0);
let navigate = useNavigate();

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




console.log(getpost.likes)


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
    navigate('/home');
    })
    .catch((err)=>{
        console.log(err)
    })

}
const handleSupp=(e)=>{
    e.preventDefault();
    axios({method:"delete",
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
    navigate('/home');
    })
    .catch((err)=>{
        console.log(err)
    })
}

const handleLike=(e)=>{
    e.preventDefault();
    axios({method:"post",
    url: `http://localhost:3000/api/posts/${_id}/like`,
    withCredentials: false,
    data:{
        likes,
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
            <label htmlFor='comments'>Votre ancien message:  {getpost.comments}
            <input className='champs' type="text" name="comments" id="comments" placeholder='Modifier le message' onChange={(e) =>
       setComments(e.target.value)} value={comments}/></label>
       </div>
       <br/>
       <label htmlFor='imageUrl'>
    Modifier l'image? {getpost.imageUrl}
    <input className='champs' type="file" name="imageUrl" id='imageUrl' onChange={(e) =>
       setImageUrl(e.target.value)} value={imageUrl}/>
  </label>
  <br/>
       <input className='btn-submit' type="submit" value="modifier"/>

       <button onClick={handleSupp}>supprimer</button>
            </form>

            
<div>
<button onClick={(e) => setLikes(e.target.value)} value={likes}><i className="fa-solid fa-thumbs-up"></i>Like:{getpost.likes}</button>
            </div>
        </div>
    );
};

export default SinglePost;