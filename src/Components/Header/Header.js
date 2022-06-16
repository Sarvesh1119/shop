import React from 'react'
import {Container} from "react-bootstrap"
import {Row,Col} from "react-bootstrap"
import "./Header.css" 

const Header = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="bg-primary text-light  text-center">
                    <div className="app-name">
                        SHOPPING APP
                    </div>
                </Col>
            </Row>
          
        </Container>
    )
}

export default Header