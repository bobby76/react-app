import React, { useState }  from "react";

import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MyTextarea from "./UI/input/MyTextarea";


const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})

    const addNewPost= (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})

    }
    return (
        <form>
            {/* Управляемый компонент */ }
            <MyInput value={post.title} onChange={e=> setPost({...post, title: e.target.value})} type="text" placeholder="Название поста"/>
            {/* Неуправляемый компонент */ }
            <MyTextarea value={post.body} onChange={e=> setPost({...post, body: e.target.value})} type="textarea" placeholder="Описание поста"/>
            <MyButton onClick={addNewPost}>Опубликовать</MyButton>
        </form>
    )
};

export default PostForm;
