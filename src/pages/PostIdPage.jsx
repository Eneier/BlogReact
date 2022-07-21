import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const {id} = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])
    return (
        <div>
            <h1>The page ID is {id}</h1>
            <div>
               <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default PostIdPage;