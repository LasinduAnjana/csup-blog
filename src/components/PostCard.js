import React from 'react'


const PostCard = ({post, onClick}) => {
    
    return (
        <div className='postcard' onClick={() => onClick(post)} >
            <img src={post.imgUrl} className="card-image" />
            <p className="card-author">{post.author}</p>
            <h4 className="card-title">{post.title}</h4>
            

        </div>
    )
}

export default PostCard
