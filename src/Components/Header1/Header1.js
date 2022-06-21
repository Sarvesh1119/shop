import React from 'react'
import {Container,Row,Col,InputGroup,FormControl} from "react-bootstrap"
import "./Header1.css"
import {Link} from "react-router-dom"

const Header1 = () => {
    return (
    <Container fluid className="pb-3 bg-color">
        <Row className="d-flex  justify-content-between mx-auto row-1 pt-2">
            <Col xl={5} className="text-light  pt-4 head ">
                SHOPPING APP
            </Col>
            <Col className="d-flex justify-content-between  pe-0"> 
                <Col  xl={7} className="text-light pt-4 search-bar search-area text-end head">
                    <InputGroup>
                        <FormControl placeholder="Search all products..." className="border-0 form-color text-light py-2 rounded-0"/>
                        <InputGroup.Text className="form-color border-0 text-light rounded-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col xl={2} className="text-light mt-4 form-color form-cart ps-2 py-2 d-flex cart-area"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <div className="ps-2">CART</div>
                </Col>
            </Col>
           
        </Row>   
        <Row className="row-1 mx-auto text-light mt-5">
        <Col>
                <Link to="Home" className="decoration text-light">
                    <span className="pe-5">HOME</span>
                </Link>
                <Link to="Products" className="decoration text-light">
                    <span className="pe-5">CATALOG</span>
                </Link>
                <Link to="Contact" className="decoration text-light">
                    <span className="pe-5">CONTACT</span>
                </Link>
            </Col>
        </Row>  
     
    </Container>
    
    
    )
}
export default Header1