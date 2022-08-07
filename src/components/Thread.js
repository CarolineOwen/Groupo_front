import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';



const Thread = ({ post }) => {
    const userId = localStorage.getItem("userId")
    const [isliked, setIsliked] = useState(false);
    const [isdisliked, setIsdisliked] = useState(false);
    const [onePost, SetOnePost] = useState(post);
    const [email, SetEmail] = useState("")

   
    axios.get('http://localhost:3000/api/auth/login')
        .then((res) =>
        SetEmail(res.data.email))
        .catch((err) => console.log(err))

        

    const getData = () => {
        const config = {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        axios.get(`http://localhost:3000/api/posts/${post._id}`, config)
            .then((res) =>
                SetOnePost(res.data))
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        onePost.usersLiked.includes(userId) ? setIsliked(true) : setIsliked(false)
        onePost.usersDisliked.includes(userId) ? setIsdisliked(true) : setIsdisliked(false)
    }, [userId, onePost.usersDisliked, onePost.usersLiked])


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


    const id = onePost._id
    const handleSupp = (e) => {
        e.preventDefault();
        axios({
            method: "delete",
            url: 'http://localhost:3000/api/posts/' + id,
            withCredentials: false,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => {
                console.log(res);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleLike = (e) => {
        axios({
            method: "post",
            url: `http://localhost:3000/api/posts/${id}/like`,
            withCredentials: false,
            data: {
                like: 1,
                userId
            },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
            },
        })
            .then((res) => {
                console.log(res);
                getData();
            })
            .catch((err) => {
                console.log(err)
            })

    }


    const handleDislike = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: `http://localhost:3000/api/posts/${id}/like`,
            withCredentials: false,
            data: {
                like: -1,
                userId
            },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
            },
        })
            .then((res) => {
                console.log(res);
                getData();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    let role = (localStorage.getItem("role"));
    const visible = (onePost.userId === (localStorage.getItem("userId"))) || (role === "admin")
    const boutonlike = <button onClick={handleLike} className={`pouces1${isliked ? ' isliked' : ''}`}><i className="fa-solid fa-thumbs-up"></i>{onePost.usersLiked ? onePost.usersLiked.length : 0}</button>
    const boutondislike = <button onClick={handleDislike} className={`pouces2${isdisliked ? ' isdisliked' : ''}`}><i className="fa-solid fa-thumbs-down"></i>{onePost.usersDisliked ? onePost.usersDisliked.length : 0}</button>
    


    return (
        <div className='global'>
            <div className='comments'>
            <div className="intro">
                <p className='intro-forme'>Publié par:{email} </p>
                <p className='intro-forme'>Le: {dateParser(onePost.createdAt)}</p>
                </div>
                <p>Message: {onePost.comments}</p>
                <div>{onePost.imageUrl && <img src={onePost.imageUrl} alt="legende" />}</div>
                <div className='container-pouces'>
                    {(isliked || !isdisliked) && <div className='pouce-like'>
                        {boutonlike}
                    </div>}
                    {(isdisliked || !isliked) && <div className='pouce-dislike'>
                        {boutondislike}
                    </div>}
                </div>
                <div>
                    {visible && <button className='btn' onClick={handleSupp}>supprimer</button>}
                    {visible && <NavLink to={`/singlePost/${onePost._id}`}><button className='btn'>modifier</button></NavLink>}
                </div>
            </div>
        </div>
    );
};

export default Thread;