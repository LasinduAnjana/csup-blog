import React from 'react'
import {FaTimes} from 'react-icons/fa'

const post = ({post, onDelete, closePost}) => {
    return (
        <div className="container post-page">
            <div className="post-title">
            <h2>{post.title} </h2><FaTimes style={{color:'red', cursor:'pointer'}} onClick={closePost}/>
            </div>
            
            <hr />
            <img className="post-image" src={post.imgUrl} />
            <p>{post.author}</p>
            <p>{post.body}</p>

            <button className="btn btn-danger" onClick={() => onDelete(post.id)}>Delete</button>
        </div>
    )
}

export default post
