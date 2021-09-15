import React from 'react'
import './footer.css'
import img9 from '../images/logo.png'
import img10 from '../images/28.png'
import img11 from '../images/29.png'
import img12 from '../images/30.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="font">
                <span>T</span>he 
                <br></br>
                <span>E</span>ntrepreneurship
                <br></br>
                <span>N</span>etwork
            </div>
            <div className="img_footer">
                <a href="/"><img src={img9} className="image"/></a>
                <a href="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/"><img src={img10} className="image" /></a>
                <a href="https://www.instagram.com/theentrepreneurshipnetwork/"><img src={img11} className="image" /></a>
                <a href="https://twitter.com/We_Are_TEN?s=08"><img src={img12} className="image" /></a>
            </div>
        </div>
    )
}
