import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = (props) => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching ( async (id) =>{
        const response = await PostService.getById(id);
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching ( async (id) =>{
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })
    
    useEffect( () => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
  return (
    <div className="post_page">
        <div className="container">
            <div className="app_wrap">
                <div className="left_sidebar">
                        <div class="left_sidebar_item">
                            <div class="left_sidebar_title">Learn React</div>         
                            <ul>
                                <li><a href="#">Quick Start</a></li>                    
                                <li><a href="#">Installation</a></li>                    
                                <li><a href="#">Describing the UI</a></li>                    
                                <li><a href="#">Adding Interactivity</a></li>                    
                                <li><a href="#">Managing State</a></li>                    
                                <li><a href="#">Escape Hatches</a></li>    
                            </ul>
                        </div>
                        <div class="left_sidebar_item">
                            <div class="left_sidebar_title">API Reference</div>         
                            <ul>
                                <li><a href="#">React APIs</a></li>                    
                                <li><a href="#">React DOM APIs</a></li>    
                            </ul>
                        </div>
                        <div class="left_sidebar_item">
                            <div class="left_sidebar_title">Community</div>         
                            <ul>
                                <li><a href="#">Code of Conduct</a></li>                    
                                <li><a href="#">Meet the Team</a></li>                    
                                <li><a href="#">Docs Contributors</a></li>                    
                                <li><a href="#">Acknowledgements</a></li>    
                            </ul>
                        </div>
                </div>
                <div className="content_wrap">
                    {isLoading
                        ? <Loader/>
                        :   <div className="post_page_block">
                                <h1>{post.title}</h1>
                                <div className="post_page_content">
                                     {post.body}
                                </div>
                            </div>
                    }
                        {isComLoading
                            ? <Loader />
                            :  <div className="post_page_comments"> 
                            {comments.map ( comm =>
                                    <div key={comm.id}   className="comment" style={{marginTop:15}}>
                                        <h5>{comm.email}</h5>
                                        <div>{comm.body}</div>
                                    </div>)}
                            
                            </div>}
                    
                </div>
            </div>
         </div>
    </div>
  )
};

export default PostIdPage;
