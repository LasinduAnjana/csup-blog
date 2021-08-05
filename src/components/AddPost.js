import React from 'react'
import { useState } from 'react'


const AddPost = ({onPost}) => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    const [imgUrl, setimgUrl] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        if(!author || !title || !body || !imgUrl) {
            alert("Please fill all feilds")
            return
        }
        onPost({author, title, body, imgUrl});

        setTitle("")
        setAuthor("")
        setBody("")
        setimgUrl("")
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
                    <label for="imgUrl-input" className="col-sm-2 col-form-label col-form-label">Image url : </label>
                    <div className="col-sm-10">
                        <input type="text" 
                            className="form-control form-control" 
                            id="imgUrl-input" 
                            placeholder="" 
                            value={imgUrl}
                            onChange={(e) => setTitle(e.target.value)} />
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
