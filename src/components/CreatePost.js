import axios from 'axios';
import React, { useState } from 'react';



const CreatePost = () => {
 const [comments, setComments] = useState('');
const [imageUrl, setImageUrl] = useState(null);
const [file, setFile] = useState();


 const handleImageUrl =(e) =>{
setImageUrl(e.target.files[0]);
setFile(e.target.files[0]);
    }

const handleSubmit =(e) =>{
e.preventDefault();

var bodyFormData = new FormData();

bodyFormData.append("comments", comments)
bodyFormData.append("image", imageUrl)
axios({method:"post",
url: 'http://localhost:3000/api/posts',
withCredentials: false,
data:bodyFormData,
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

return(
<>
<form action="" onSubmit={handleSubmit} id="post" method='post'>
            <label htmlFor='comments'>votre message:
            <input type="text" name="comments" id="comments" placeholder='Ecrivez quelque chose' onChange={(e) =>
       setComments(e.target.value)} value={comments}/></label>
       <br/>

<label htmlFor='imageUrl'>
    Une image? :
    <input type="file" name="imageUrl" id='imageUrl' onChange={(e) =>
       handleImageUrl(e)}/>
  </label>

<input className='btn' type="submit" value="publier"/>
            </form>
</>);
};

export default CreatePost;