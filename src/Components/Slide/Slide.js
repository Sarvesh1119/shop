import React from 'react'
import "./Slide.css"
import {Container,Row,Col,Carousel}  from "react-bootstrap"

const Slide = () => {
    return (
       <Container fluid className="my-3">
            <Row>
                <Col lg={12} xl={8} className="mx-auto base">
                    <Carousel>
                        <Carousel.Item>
                            <img 
                            className="d-block w-100 slide-image"
                            src="https://c4.wallpaperflare.com/wallpaper/286/114/401/light-background-wallpaper-preview.jpg"
                            alt="Image 1"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            className="d-block w-100 slide-image"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_U9sr95QX-CiXf_3sasd-ZTZAjCeNZfmug&usqp=CAU"
                            alt="Image 2"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            className="d-block w-100 slide-image"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqKgLEhXHM5UJ4CdGmylNQtltaAlEr_-GeA&usqp=CAU"
                            alt="Image 3"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
       </Container>
    )
}
export default Slide