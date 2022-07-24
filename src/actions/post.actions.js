import axios from "axios";

//posts

export const GET_POSTS="Get_POSTS";

export const getPosts =() =>{
    return (dispatch) =>{
        return axios
        .get("http://localhost:3000/api/posts")
        .then((res)=>{
            dispatch({type:GET_POSTS, playload: res.data})

        })
.catch((err)=> console.log(err))
    }
}