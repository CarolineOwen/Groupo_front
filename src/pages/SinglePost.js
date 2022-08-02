import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



const SinglePost = () => {
   
    const {_id}= useParams();
    const [getpost, setGetpost] = useState({});
    const [comments, setComments] = useState('');
    const [imageUrl, setImageUrl] = useState('');
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
        .catch((err)=> console.log(err))
    },[_id])

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


    const userId= localStorage.getItem('userId');
    console.log(userId);
    const like = 1;
    const handleLike=(e)=>{
        e.preventDefault();
        axios({method:"post",
        url: `http://localhost:3000/api/posts/${_id}/like`,
        withCredentials: false,
        data:{
            like,
            userId
        },
        headers: { 
            "Authorization": "Bearer " + localStorage.getItem('token'),
             // "Content-Type": "multipart/form-data",
        },
        })
        .then((res)=>{
            console.log(res);
            window.location.reload();
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
                         <input className='champs' type="text" name="comments" id="comments" placeholder='Modifier le message' 
                        onChange={(e) => setComments(e.target.value)} value={comments}/>
                    </label>
                </div>
                 <br/>
                <label htmlFor='imageUrl'>Modifier l'image? {getpost.imageUrl}
                     <input className='champs' type="file" name="imageUrl" id='imageUrl'
                        onChange={(e) => setImageUrl(e.target.value)} value={imageUrl}/>
                 </label>
                 <br/>
            <input className='btn-submit' type="submit" value="modifier"/>
            <button onClick={handleSupp}>supprimer</button>
            </form>      
            <div>
                
                <button onClick={handleLike}><i className="fa-solid fa-thumbs-up"></i>Like:{getpost.usersLiked ? getpost.usersLiked.length : 0}</button>
                <button onClick={handleLike}><i className="fa-solid fa-thumbs-up"></i>Dislike:{getpost.usersDisliked ? getpost.usersDisliked.length : 0}</button>
            </div>
        </div>
        );
};

export default SinglePost;