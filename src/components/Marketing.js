import React from 'react'
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle
  } from 'reactstrap';
  import Header from './Header'
  import Navbar from './Navbar'
  import Footer from './Footer'
  import img_10 from '../images/44.jpg'
  import img_11 from '../images/45.jpg'
  import img_12 from '../images/46.jpg'

const marks = [
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


const Marketing = () => {
    return (
        <div>  
            <Header/>
            <Navbar/>

            <div className="online">
                {
                        marks.map((mark) =>{
                            return(
                                <div className="cards">
                                    <Card className="card_img">
                                        <CardImg src={mark.src} className="c_img" />
                                        <CardBody>
                                            <CardTitle tag="h2">{mark.topic}</CardTitle>
                                            <CardSubtitle tag="h5" className="mb-2 text-muted">
                                                {mark.teacher}
                                            </CardSubtitle>   
                                            <CardTitle tag="h3" className="mb-2 text-muted">
                                                {mark.price}
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

export default Marketing;
