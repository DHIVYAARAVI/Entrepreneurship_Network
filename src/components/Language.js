import React from 'react'
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle
  } from 'reactstrap';
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import img_3 from '../images/37.jpg'
import img_4 from '../images/38.jpeg'
import img_8 from '../images/42.jpg'
import img_9 from '../images/43.jpg'

const lans = [
    {
        src : img_4,
        topic:"C Programming Language",
        teacher: "Bell Stroustrup",
        price: "$55"
    },
    {
        src : img_3,
        topic:"Python Development",
        teacher: "Robert",
        price: "$55"
    },
    {
        src : img_8,
        topic:"Machine Learning",
        teacher: "Oliver",
        price: "$40"
    },
    {
        src : img_9,
        topic:"Artificial Intelligence",
        teacher: "Felicity",
        price: "$40"
    }    

]

const Web = () => {
    return (
        <div>  
            <Header/>
            <Navbar/>

            <div className="online">
                {
                        lans.map((lan) =>{
                            return(
                                <div className="cards">
                                    <Card className="card_img">
                                        <CardImg src={lan.src} className="c_img" />
                                        <CardBody>
                                            <CardTitle tag="h2">{lan.topic}</CardTitle>
                                            <CardSubtitle tag="h5" className="mb-2 text-muted">
                                                {lan.teacher}
                                            </CardSubtitle>   
                                            <CardTitle tag="h3" className="mb-2 text-muted">
                                                {lan.price}
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