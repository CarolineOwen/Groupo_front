import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';


const NewPost = () => {
    const [message, setMessage] = useState("");
    const [picture, setPicture] = useState(null);
    const [file, setFile] = useState();
    
    

    const handlePicture =(e) =>{
setPicture(URL.createObjectURL(e.target.files[0]));
setFile(e.target.files[0]);
    }
    const handlePost =async()=>{

    }

    return (
        <>
        <div className='global-post'>
        <div className='message'>
            <textarea name="message" id="message" placeholder="Ecrivez quelque chose" 
            onChange={(e)=>setMessage(e.target.value)} value={message}/>
        </div>
        <div>
        <i className="fa-solid fa-image"></i>
        <input type="file" id="file-upload" name="file" accept=".jpg, .jpeg, .png" 
        onChange={(e)=> handlePicture(e)}/>
        </div>
        <button onClick={handlePost}>Poster</button>
        <p>{message}</p>
        <img src={picture} alt=""/>
        </div>
        </>
    );
};

export default NewPost;