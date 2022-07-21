import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from 'react';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
            <form>
                {/*=============управляемый компонент=========*/}
                <MyInput
                    type="text"
                    placeholder="Post name"
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                />

                <MyInput
                    type="text"
                    placeholder="Post description"
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})} // НОВОЕ ЗНАЧЕНИЕ ИСПОЛЬЗУЕМ ОБЬЕКТ =========
                    // onChange={e => setBody(e.target.value)} СТАРОЕ ЗНАЧЕНИЕ ПЕРЕДАЧА ОДНОГО ЗНАЧЕНИЯ =========
                />
                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>
    );
};

export default PostForm;