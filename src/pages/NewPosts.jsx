import React, { useEffect, useState, useRef } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostFilterSearch from "../components/PostFilterSearch.jsx";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts, useSortedPosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching.js";
import { getPageCount } from "../components/utils/pages.jsx";
import Pagination from "../components/UI/pagination/Pagination.jsx";
import { useObserver } from "../hooks/useObserver.js";
import MySelect from "../components/UI/select/MySelect.jsx";
import Navbar from "../components/UI/Navbar/Navbar.jsx";


function Posts() {
    const [posts, setPosts]  = useState( [ ])
  const [filter, setFilter]= useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState (0);
    const [limit, setLimit] = useState (10);
    const [page, setPage] = useState (1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();
   
    const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts( [...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })
   
    console.log(totalPages)

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect( () => {
        fetchPosts(limit, page)
    }, [page, limit])


   const createPost= (newPost) => {
    setPosts([newPost, ...posts])
    setModal(false)
   }


   const changePage = (page) => {
    setPage(page)
   }

   const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
   }
   
    
    return ( 
       
        <div className="App">
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
                        <PostForm create = {createPost}/>
                
                        {/* <MyModal visible={modal} setVisible={setModal}>
                                <PostForm create = {createPost}/>
                            </MyModal>*/}
                        <PostFilterSearch filter={filter} setFilter={setFilter} /> 
                            {/*<MySelect
                                    value={limit}
                                    onChange={value => setLimit(value)}
                                    defaultValue="Кол-во элементов на странице"
                                    options={[
                                        {value: 5, name: '5'},
                                        {value: 10, name: '10'},
                                        {value: 25, name: '25'},
                                        {value: -1, name: 'Показать всё'},
                                    ]}
                                />   */}  
                
                    
                
                        {postError &&
                            <h1>Произошла ошибка ${postError}</h1>}
                        <PostList remove={removePost} posts={sortedAndSearchedPosts} title=""/>
                        <div ref={lastElement} style={{height:20,     background: '#4177b5'}}/>
                        {isPostsLoading &&
                            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
                        }
                        <Pagination 
                            page={page} 
                            changePage = {changePage} 
                            totalPages={totalPages}
                        />
                
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;