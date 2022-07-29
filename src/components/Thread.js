import React from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';



const Thread = ({props}) => {
    console.log(props)
    let navigate = useNavigate();

const handleModify = (e)=>{
    console.log(e);
    const config = {
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }
    axios.get('http://localhost:3000/api/posts/' + (e), config)
    .then((res)=>
    console.log(res))
 
    .catch((err)=> console.log(err))

}
 
const handleDelete = (e)=>{
    console.log(e);
    const config = {
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }
    axios.delete('http://localhost:3000/api/posts/' + (e), config)
    .then((res)=>
    console.log(res.data))
         
    .catch((err)=> console.log(err))

}

    return (
        <div className='global'>
            <div className='comments'>
                <p>Message:{props.comments}</p>
                <div>{props.imageUrl && <img src={props.imageUrl} alt="legende"/>}</div>
                <div className="pouces">
                <button><i className="fa-solid fa-thumbs-up"></i>Like</button>
                <button><i className="fa-solid fa-thumbs-down"></i>Dislike</button>
                </div>
                <NavLink to={`/singlePost/${props._id}`}><button onClick={()=>handleModify(props._id)}>modifier</button></NavLink>
                <button onClick={()=>handleDelete(props._id)}>supprimer</button>
            </div>
        </div>
    );
};

export default Thread;