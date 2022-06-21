import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./Collections.css" 

const sampleCollections=[
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurfTMV5A4b7u97DPFo-PkwJ3hx7b8SKsPew&usqp=CAU",
        title:"Example Product Title",
        price:"$19.99"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurfTMV5A4b7u97DPFo-PkwJ3hx7b8SKsPew&usqp=CAU",
        title:"Example Product Title",
        price:"$19.99"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurfTMV5A4b7u97DPFo-PkwJ3hx7b8SKsPew&usqp=CAU",
        title:"Example Product Title",
        price:"$19.99"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurfTMV5A4b7u97DPFo-PkwJ3hx7b8SKsPew&usqp=CAU",
        title:"Example Product Title",
        price:"$19.99"
    }
]
const Collections = () => {
    return (
        <Col xl={8} className="mx-auto">
        <Container className="base">
            <Row>
                <Col className="h3 col-head">
                FEATURED COLLECTION
                </Col>
            </Row>
            <Row>
                <Col className="mt-3 text-primary col-link">
                    More
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#0d6efd" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                    </svg>    
                </Col>
            </Row>
            <Container fluid="sm">
            <Row className="col-flex-wrap mt-3">
                {sampleCollections.map(object=> 
                <Col xs={5} sm={2} lg={2} xl={2} className="p-0 col-img mb-5">
                        <img className="img-fluid col-image" src={object["image"]} alt=""/>
                        <div className="text-center text-primary">{object["title"]}</div>
                        <div className="text-center">{object["price"]}</div>
                </Col>)}
            </Row>
            </Container>
        </Container>
        </Col>
    )
}
export default Collections