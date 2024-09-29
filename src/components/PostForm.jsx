import React, { useState }  from "react";

import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MyTextarea from "./UI/input/MyTextarea";


const PostForm = ({create}) => {
    const [post, setPost] = useState({title: { rendered :''}, excerpt: {rendered :''}})
    const addNewPost= (e) => {
        e.preventDefault()
        const newPost = {
            ...post
        }
        create(newPost)
        setPost({title: { rendered :''},excerpt: {rendered :''}})

    }
    return (
        <form>
            {/* Управляемый компонент */ }
            <MyInput value={post.title.rendered} onChange={e=> setPost({...post, title:  { rendered :e.target.value}})} type="text" placeholder="Название поста"/>
            {/* Неуправляемый компонент */ }
            <MyTextarea value={post.excerpt.rendered} onChange={e=> setPost({...post, excerpt: { rendered :e.target.value}})} type="textarea" placeholder="Описание поста"/>
            <MyButton onClick={addNewPost}>Опубликовать</MyButton>
        </form>
    )
};

export default PostForm;
