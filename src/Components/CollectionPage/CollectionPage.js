import React from 'react'
import {Container,Row,Col,Form} from "react-bootstrap"

const CollectionPage= (props) => {
    return (
        <Container fluid className="mx-auto products mt-2 text-small">
        <Row>
            jjj
            <div className="d-flex">
                <div className="bar-space"><small>Home</small></div>
                <div className="bar-space">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                    </svg>
                </div>
                <div className="bar-space"><small>Products</small></div>
            </div>
        </Row>
        <Row>
            <Col xl={12}><hr/></Col>
        </Row>
        <Row className="mt-4 d-flex">
            <Col xs="12"  md="6" xl="6" className="h4">PRODUCTS</Col>
        </Row>
        {props.list.length > 0 &&
        <Row className="mt-3 d-flex flex-wrap">
            {props.list.map(key=> key.id!=29 && key.id!=24 &&
            <Col xs={6} sm={3} md={3} lg={3} xl={3} className="template">
                <img className="img-height mb-2 img-thumbnail" src={key.thumbnail}/>
                <small><div className="text-secondary mb-2">{key.title}</div></small>
                <div className="h6">${key.price}</div>
            </Col>)}
        </Row>}
        {props.list.length> 0 &&
        props.list.map(key=> key.id!=29 && key.id!=24 &&
            <Row className="d-flex mt-5">
                <Col className="">                   
                    <img className="img-height mb-2 img-thumbnail" src={key.thumbnail}/>
                </Col>
                <Col className="text-center">
                    <Col className="fw-bold">
                        {key.title}
                    </Col>
                    <Col className="text-secondary mt-2">
                        <small>{key.id!==1 ? key.description : "The Apple iPhone 9 packs a stunning OLED display with the standard Apple notch at the top."}</small>
                    </Col>
                </Col>
                <Col className="h6 text-center pt-2">
                    ${key.price}
                </Col>
            </Row>
            )
        }
    </Container>
    )
}

export default CollectionPage