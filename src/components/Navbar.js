import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/csup_logo.png'


const Navbar = ({onAdd, showAddPost}) => {
    return (
        <nav className="navbar navbar-style">
        <div className="container">
            <div className="navbar-brand" >
                <img src={Logo} height={40} width={65} className="d-inline-block align-text-top" />
            </div>
            <h3>Csup Blog</h3>         
            <Link to="/add" className="btn btn-outline-primary" onClick={onAdd} >{!showAddPost ? "Show Add post" : "Hide Add Post"}</Link>
        </div>
        </nav>
    )
}

export default Navbar
