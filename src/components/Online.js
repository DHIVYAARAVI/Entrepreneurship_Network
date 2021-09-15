import React from 'react'
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle
  } from 'reactstrap';
import './online.css'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import img_1 from '../images/24.jpg'
import img_2 from '../images/25.jpeg'
import img_3 from '../images/37.jpg'
import img_4 from '../images/38.jpeg'
import img_5 from '../images/39.jpeg'
import img_6 from '../images/40.jpg'
import img_7 from '../images/41.jpeg'
import img_8 from '../images/42.jpg'
import img_9 from '../images/43.jpg'
import img_10 from '../images/44.jpg'
import img_11 from '../images/45.jpg'
import img_12 from '../images/46.jpg'

const datas = [
    {
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
    },
    {
        src : img_3,
        topic:"Python Development",
        teacher: "Robert",
        price: "$55"
    },
    {
        src : img_4,
        topic:"C Programming Language",
        teacher: "Bell Stroustrup",
        price: "$55"
    },
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
    },
    {
        src : img_10,
        topic:"Digital Marketing",
        teacher: "Thara",
        price: "$50"
    },
    {
        src : img_11,
        topic:"Human Resource",
        teacher: "Julie",
        price: "$50"
    },
    {
        src : img_12,
        topic:"Freelancing Course",
        teacher: "Harry",
        price: "$50"
    }          

]

const Online = () => {
    return (
        <div>          
            <Header/>
            <Navbar/>

            <div className="online">
                {
                    datas.map((data) =>{
                        return(
                            <div className="cards">
                                <Card className="card_img">
                                    <CardImg src={data.src} className="c_img" />
                                    <CardBody>
                                        <CardTitle tag="h2">{data.topic}</CardTitle>
                                        <CardSubtitle tag="h5" className="mb-2 text-muted">
                                            {data.teacher}
                                        </CardSubtitle>   
                                        <CardTitle tag="h3" className="mb-2 text-muted">
                                            {data.price}
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

export default Online;
