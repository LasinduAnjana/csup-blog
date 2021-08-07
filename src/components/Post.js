import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';

function Post() {

    const history = useHistory();
    const { id } = useParams();
    const { data: postdata } = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);
    console.log(postdata)

    const onDelete = () => {
        fetch(('https://jsonplaceholder.typicode.com/posts/' + id), {
            method: 'DELETE',
        });
        alert("post deleted");
        history.push('/');
    }

    return (
        <div className="container post-page">
            
            {postdata && (
                <>
                    <div className="post-title">
                    <h3>{postdata.title} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => history.push('/')}/></h3>
                    </div>
                    
                    <hr />
                    <img className="post-image" src="https://picsum.photos/300/200" />
                    <p>{postdata.userId}</p>
                    <p>{postdata.body}</p>

                    <button className="btn btn-danger" onClick={onDelete}>Delete</button>
                </>
            )}
        </div>
    )
}

export default Post
