import axios from 'axios';
import React, { useState } from 'react';



const CreatePost = () => {
  const [comments, setComments] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [file, setFile] = useState();
  const email = localStorage.getItem("email");
  const pseudo = localStorage.getItem("pseudo");

  const handleImageUrl = (e) => {
    setImageUrl(e.target.files[0]);
    setFile(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var bodyFormData = new FormData();
    bodyFormData.append("comments", comments)
    bodyFormData.append("image", imageUrl)
    bodyFormData.append("email", email)
    bodyFormData.append("pseudo", pseudo)
    axios({
      method: "post",
      url: 'http://localhost:3000/api/posts',
      withCredentials: false,
      data: bodyFormData,
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

  return (
    <>
      <form className="global-post" action="" onSubmit={handleSubmit} id="post" method='post'>
        <div className='message-du-jour'>
          <label htmlFor='comments'>Votre message:
            <input className='champs' type="text" name="comments" id="comments" placeholder='Ecrivez quelque chose' onChange={(e) =>
              setComments(e.target.value)} value={comments} required /></label>

          <br />
          <div className='joindre'>
            <label htmlFor='imageUrl'>
              Une image? :
              <input className='champs' type="file" name="imageUrl" id='imageUrl' onChange={(e) =>
                handleImageUrl(e)} />
            </label>
          </div>
        </div>

        <input className='btn-submit' type="submit" value="publier" />
      </form>
    </>);
};

export default CreatePost;