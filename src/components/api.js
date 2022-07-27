import axios from "axios";

const url ="http://localhost:3000/api/posts";

export const getAllPosts=()=> axios.get(url);


