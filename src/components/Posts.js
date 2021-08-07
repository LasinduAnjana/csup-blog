import React from 'react';
import PostCard from './PostCard';
import useFetch from './useFetch';
import { Scrollbars } from 'react-custom-scrollbars'


function Posts() {

    const {data : posts} = useFetch("https://jsonplaceholder.typicode.com/posts")

    return (
        <Scrollbars style={{width: "100%", height: "90vh" }} >
            {posts ? (posts.map((post) => (
                <PostCard key={post.id} post={post}/>                    
            ))) : "loading...."}
        </Scrollbars>
    )
}

export default Posts
