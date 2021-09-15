import React from 'react'
import img from '../images/logo.png'
import './header.css'

export default function Header() {
    return (
        <div>
            <div className="header">
                <img src={img} className="logo"  />
                <h1 className="topic">The Entrepreneurship Network</h1>
                <a href="/login" ><button className="login">Login</button></a>
            </div><br></br>
        </div>
    )
}
