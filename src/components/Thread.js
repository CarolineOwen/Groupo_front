import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Thread = ({props}) => {
    const userId = props.userId;
    console.log(userId);
    console.log(props)

    const dateParser = (num) => {
        let options = {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        };
        let timestamp = Date.parse(num);
        let date = new Date(timestamp).toLocaleDateString("fr-FR", options);
        return date.toString();
      };

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

    const id= props._id
    const handleSupp=(e)=>{
        e.preventDefault();
        axios({method:"delete",
        url: 'http://localhost:3000/api/posts/' + id,
        withCredentials: false,
        headers: { 
        "Authorization": "Bearer " + localStorage.getItem('token'),
        "Content-Type": "multipart/form-data",
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

    const visible = ((props.userId) === (localStorage.getItem("userId")))
    return (
        <div className='global'>
            <div className='comments'>
                <p className='date'>Date de publication: {dateParser(props.createdAt)}</p>
                <p>Message: {props.comments}</p>
                <div>{props.imageUrl && <img src={props.imageUrl} alt="legende"/>}</div>
                <div className='container-pouces'>
                <button className="pouces1"><i className="fa-solid fa-thumbs-up"></i></button>
                <button className="pouces2"><i className="fa-solid fa-thumbs-down"></i></button>
                </div>
                <div>
                {visible ? <button className='btn' onClick={handleSupp}>supprimer</button> : <p></p>}
                {visible ? <NavLink to={`/singlePost/${props._id}`}><button className='btn' onClick={()=>handleModify(props._id)}>modifier</button></NavLink> : <p></p>}
                </div>
            </div>
        </div>
    );
};

export default Thread;