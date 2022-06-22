import React from 'react'
import "./FeaturedCollections.css"
import {Container,Row,Col} from "react-bootstrap"

const FeaturedCollections = () => {
    const gotoLaptops = () => {
        const section= document.getElementById("laptops")
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };
    const gotoSmartphones = () => {
        const section= document.getElementById("smartphones")
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };
    return (
        <Col xl={8} className="mx-auto">
        <Container className="base">
            <Row>
                <Col className="h3 fea-head">
                    SHOP FOR
                </Col>
            </Row>
            <Row>
                <Col className="mt-3 text-secondary fea-link">
                    categories
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-between mt-3">
                <div className="fea-categories" onClick={gotoLaptops}>
                    <img className="fea-image" src="https://dummyjson.com/image/i/products/6/thumbnail.png" alt=""/>
                    <div className="text-center text-secondary mt-2">Laptops</div>
                </div>
                <div className="fea-categories" onClick={gotoSmartphones}>
                    <img className="fea-image" src="https://dummyjson.com/image/i/products/2/thumbnail.jpg" alt=""/>
                    <div className="text-center text-secondary mt-2">Smartphones</div>
                </div>
                </Col>
            </Row>
        </Container>
        </Col>
    )
}
export default FeaturedCollections