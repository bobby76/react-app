import {useMemo, useState} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo( () =>{
        console.log('Отработала функция сортед постс')
        if (sort){
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
   }, [sort, posts])

   return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.excerpt.rendered.toLowerCase().includes(query.toLowerCase()) || post.title.rendered.toLowerCase().includes(query.toLowerCase()))
   }, [query, sortedPosts])

   return sortedAndSearchedPosts;
}
