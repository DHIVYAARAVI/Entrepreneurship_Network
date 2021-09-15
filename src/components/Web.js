import React from 'react'
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle
  } from 'reactstrap';
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import img_1 from '../images/24.jpg'
import img_2 from '../images/25.jpeg'
import img_5 from '../images/39.jpeg'
import img_6 from '../images/40.jpg'
import img_7 from '../images/41.jpeg'

const webs = [
    {
        src : img_5,
        topic:"Javascript",
        teacher: "Henry",
        price: "$45"
    },
    {
        src : img_6,
        topic:"Web Development Course 2",
        teacher: "Peter",
        price: "$25"
    },
    {
        src : img_7,
        topic:"Front End Web Development",
        teacher: "Susan",
        price: "$30"
    },{
        src : img_1,
        topic:"React Development Bootcamp 2021",
        teacher: "Collen",
        price: "$45"
    },
    {
        src : img_2,
        topic:"Full Stack Development",
        teacher: "Richard",
        price: "$45"
    }    

]

const Web = () => {
    return (
        <div>  
            <Header/>
            <Navbar/>

            <div className="online">
                {
                        webs.map((web) =>{
                            return(
                                <div className="cards">
                                    <Card className="card_img">
                                        <CardImg src={web.src} className="c_img" />
                                        <CardBody>
                                            <CardTitle tag="h2">{web.topic}</CardTitle>
                                            <CardSubtitle tag="h5" className="mb-2 text-muted">
                                                {web.teacher}
                                            </CardSubtitle>   
                                            <CardTitle tag="h3" className="mb-2 text-muted">
                                                {web.price}
                                            </CardTitle>                          
                                        </CardBody>
                                    </Card>
                                </div>
                            )
                        })
                }
            </div>

            <Footer />
        </div>
    )
}

export default Web;