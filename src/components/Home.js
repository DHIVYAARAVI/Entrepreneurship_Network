import React from 'react'
import img1 from '../images/12.jpg'
import img2 from '../images/17.png'
import img4 from '../images/15.png'
import img5 from '../images/13.jpg'
import img6 from '../images/23.png'
import img7 from '../images/24.jpg'
import img8 from '../images/25.jpeg'
import img10 from '../images/32.png'
import './home.css'
import Carousel from './Carousel'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import Form from './Form'

export default function Home() {
    return (
        <div>
            <Header/>
            <Navbar/>
            
            <div className="knowledge">
                <div className="know_text">Knowledge has a beginning but no end.</div>
            </div>
            
            <div className="about">
                <h1 className="about_topic">About Us</h1>
                <div className="grid_about">
                    <div className="learn_quote">Key to success is getting people to the right thing at right time.</div>
                    <img src={img1} className="learn" />
                </div>
                <button className="learn_btn">Learn More</button>
            </div><br></br>
            
            <div className="discord">
                <h1 className="discord_topic">Welcome to the NEXT BIG THING</h1>
                <img src={img6} className="discord_img" />
                <button className="discord_btn">Join TEN Virtual Campus</button>
            </div>
            
            <div className="courses">
                <div className="journey1">
                    <div className="journey_img">
                        <div className="joy">Learning is a journey <br/>but not destination</div>
                    </div>
                    <div className="journey_topic1">
                        <div>Entrepreneurship made fun</div>
                        <button className="journey_topic1_btn">Learn More</button>
                    </div>
                </div>
                <div className="journey2">
                    <div className="journey_topic2">
                        <div>React Front-end Development</div>
                        <button className="journey_topic2_btn">Learn More</button>
                    </div>
                    <img src={img7} className="journey_img2"/>
                </div>
                <div className="journey3">
                    <img src={img8} className="journey_img3"/>
                    <div className="journey_topic3">
                        <div>Full Stack Development</div>
                        <button className="journey_topic_btn3">Learn More</button>
                    </div>
                </div>
            </div>
           
            <div className="bene_full">
                <div className="bene_topic">Our Course benefits</div>
                <div className="benefits">
                    <div>
                        <img src={img2} className="img"/>
                        <div className="top">Expert Teachers</div>
                        <div className="para">
                            Our instructors are more adept at monitoring student problems and assessing their level of understanding 
                            and progress, and they provide much more relevant, useful feedback. We are experts in developing and testing 
                            hypotheses about learning difficulties or instructional strategies.
                        </div>
                    </div>
                    <div></div>
                    <div>
                        <img src={img4} className="img"/>
                        <div className="top">Project</div>
                        <div className="para">
                            Many industrial projects will be taught by our teachers and you will get to know much knowledge about 
                            industries in real life. You will also get a chance to do these projects by your own ideas and discuss 
                            about it with our teacher to get more knowledge.
                        </div>
                    </div>
                    <div></div>
                    <div>
                        <img src={img5} className="img"/>
                        <div className="top">Flexible Curriculum</div>
                        <div className="para">
                            Our expert teachers design and curate the curriculum using best practices 
                            and careful consideration of how people learn and retain information with 
                            the ongoing tech trends in the professional domain. We've debated every facet of our methodology, 
                            from the order in which to teach concepts, the analogies used to clarify them and how exercises 
                            should be structured to deliver the maximum educational punch.
                        </div>
                    </div>
                </div>
            </div><br></br>
            
            <div className="review">
                <div className="review_topic">Testimonials</div>
                <Carousel />
            </div>

            <Form />

            <Footer />

            <div>
                <a href="/"><img src={img10}  className="up_btn" /></a>
            </div>
        </div>
    )
}
