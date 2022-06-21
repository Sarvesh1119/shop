import React from 'react'
import "./FeaturedCollections.css"
import {Container,Row,Col} from "react-bootstrap"

const FeaturedCollections = () => {
    return (
        <Col xl={8} className="mx-auto">
        <Container className="base">
            <Row>
                <Col className="h3 fea-head">
                    SHOP FOR
                </Col>
            </Row>
            <Row>
                <Col className="mt-3 text-primary fea-link">
                    More categories
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#0d6efd" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                    </svg>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-between mt-3">
                <div className="fea-categories">
                    <img className="fea-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfcwR1YxIL2SIefHwc2w4vNvMETx1wN_evw&usqp=CAU" alt=""/>
                    <div className="text-center text-secondary mt-2">Fetaured collection</div>
                </div>
                <div className="fea-categories">
                    <img className="fea-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfcwR1YxIL2SIefHwc2w4vNvMETx1wN_evw&usqp=CAU" alt=""/>
                    <div className="text-center text-secondary mt-2">Fetaured collection</div>
                </div>
                </Col>
            </Row>
        </Container>
        </Col>
    )
}
export default FeaturedCollections