import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const SinglePost = () => {

    const { _id } = useParams();
    const [getpost, setGetpost] = useState({});
    const [comments, setComments] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [file, setFile] = useState();
    let navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        axios.get(`http://localhost:3000/api/posts/${_id}`, config)
            .then((res) => (res.data))
            .then((data) => {
                (setGetpost(data));
                (setComments(data.comments));
                (setImageUrl(data.imageUrl))
                console.log(data.imageUrl)
            })
            .catch((err) => console.log(err))
    }, [_id])



    const handleImageUrl = (e) => {
        setImageUrl(e.target.files[0]);
        setFile(e.target.files[0]);
    }

    const handleModi = (e) => {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append("comments", comments)
        bodyFormData.append("image", imageUrl)
        axios({
            method: "put",
            url: `http://localhost:3000/api/posts/${_id}`,
            withCredentials: false,
            data: bodyFormData,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => {
                console.log(res);
                navigate('/home');
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const isImage = getpost.imageUrl
    return (
        <>
            <form className="global-post-modify" action="" onSubmit={handleModi} id="post" method='post'>
                <div className='message-du-jour'>
                    <label htmlFor='comments'>Votre ancien message:
                        <input className='champs' type="text" name="comments" id="comments"
                            onChange={(e) => setComments(e.target.value)} value={comments} />
                    </label>
                </div>
                <br />
                {isImage ?
                    <label htmlFor='imageUrl'>Modifier l'image? <img src={getpost.imageUrl} alt="nouvelle image" /></label> : <p>Ajouter une image?</p>}
                <input className='champs' type="file" name="imageUrl" id='imageUrl'
                    onChange={(e) => handleImageUrl(e)} />

                <br />
                <input className='btn-submit' type="submit" value="modifier" />
            </form>

        </>
    );
};

export default SinglePost;