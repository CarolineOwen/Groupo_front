// import axios from 'axios';
// import React, { useState } from 'react';

// const NewPost = () => {
 
//     const [comments, setComments] = useState("");
//     const [imageUrl, setImageUrl] = useState(null);
//     const [file, setFile] = useState();
    

//     const handleImageUrl =(e) =>{
// setImageUrl(URL.createObjectURL(e.target.files[0]));
// setFile(e.target.files[0]);
//     }

//     const handlePost =(e)=>{
//         e.preventDefault();
//         const userId = localStorage.getItem("userId");
//         console.log(userId);
//         const config = {
//             headers: {
//                 authorization: 'Bearer ' + localStorage.getItem('token')
//             }
//         }
//         axios({method:"post",
// url: 'http://localhost:3000/api/posts', config,
// withCredentials: false,
// data:{userId,
//     comments, 
//     imageUrl
//   },
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err)
// });

//     }

//     return (
//         <>
//         <div className='global-post'>
//         <div className='message'>
//             <textarea name="comments" id="comments" placeholder="Ecrivez quelque chose" 
//             onChange={(e)=>setComments(e.target.value)} value={comments}/>
//         </div>
//         <div>
//         <i className="fa-solid fa-image"></i>
//         <input type="file" id="file-upload" name="file" accept=".jpg, .jpeg, .png" 
//         onChange={(e)=> handleImageUrl(e)} />
//         </div>
//         <button type="submit" onClick={handlePost}>Poster</button>
//         {/*<p>{comments}</p>
//         <img src={imageUrl} alt="illustration du post"/>*/}
//         </div>
//         </>
//     );
// };

// export default NewPost;