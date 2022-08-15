import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Thread from './Thread';

//Fonction qui appelle l'API et récupère ses données pour pouvoir les traiter et les afficher sur le Thread

const Posts = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        const config = {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        axios.get('http://localhost:3000/api/posts', config)
            .then((res) =>
                setData(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getData()
    }, []);
    console.log(data);
    return (
        <>
            <div className='posts'>
                {data.map((post) => (
                    <Thread key={post._id} post={post} />))}
            </div>

        </>
    );
};

export default Posts;