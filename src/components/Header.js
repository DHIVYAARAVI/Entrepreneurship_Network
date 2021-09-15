import React from 'react'
import img from '../images/logo.png'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <div>
            <div className="header">
                <img src={img} className="logo"  />
                <h1 className="topic">The Entrepreneurship Network</h1>
                <Link to="/login" ><button className="login">Login</button></Link>
            </div><br></br>
        </div>
    )
}
