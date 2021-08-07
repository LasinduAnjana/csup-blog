import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';


const AddPost = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault()

        if(!author || !title || !body) {
            alert("Please fill all feilds")
            return
        }
        const newPost = {author, title, body};

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                history.push('/');
            })
            .catch((err) => console.log(err))

        setTitle("")
        setAuthor("")
        setBody("")
    }

    return (
        <div className="container post-page p-3">
            <hr />
            <h3 className="title-text">Add New Post</h3>
            <form onSubmit={onSubmit}>
                <div className="row mb-3">
                    <label for="title-input" className="col-sm-2 col-form-label col-form-label">Post Title : </label>
                    <div className="col-sm-10">
                        <input type="text" 
                            className="form-control form-control" 
                            id="title-input" 
                            placeholder="" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="author-input" className="col-sm-2 col-form-label">Author</label>
                    <div className="col-sm-10">
                        <input type="text" 
                            className="form-control" 
                            id="author-input" 
                            placeholder="" 
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)} />
                            
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="textinput" className="col-sm-2 col-form-label col-form-label">Post content</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" 
                            aria-label="With textarea" 
                            id="textinput" 
                            value={body}
                            onChange={(e) => setBody(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <input value="Save Post" type="submit" className="btn btn-primary btn-block"/>
                </div>
            </form>
            <hr />
        </div>
    )
}

export default AddPost
