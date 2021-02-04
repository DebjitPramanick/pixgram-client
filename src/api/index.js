import axios from "axios";

const url = "http://localhost:5000/posts";
const createUrl = "http://localhost:5000/posts/create";

export const fetchPosts = () => axios.get(url);
export const createNewPost = (newPost) => axios.post(createUrl, newPost);
