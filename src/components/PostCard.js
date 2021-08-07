import React from 'react'
import { Link } from 'react-router-dom'


const PostCard = ({post}) => {
    
    return (
        <Link to={`/get/${post.id}`}>
            <div className='postcard' >
                <img src="https://picsum.photos/200/300" className="card-image" />
                <p className="card-author">{post.author}</p>
                <h4 className="card-title">{post.title}</h4>
            </div>
        
        </Link>
        
    )
}

export default PostCard
