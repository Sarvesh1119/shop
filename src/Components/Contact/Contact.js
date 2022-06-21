import React from 'react'
import "./Contact.css"
import {Container, Row, Col, Button, Form} from "react-bootstrap"

const Contact = () => {
    return (
        <Container fluid className="mx-auto products mt-2 text-small">
            <Row>
                <div className="d-flex">
                    <div className="bar-space"><small>Home</small></div>
                    <div className="bar-space">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                        </svg>
                    </div>
                    <div className="bar-space"><small>Contact</small></div>
                </div>
            </Row>
            <Row>
                <Col xl={12}><hr/></Col>
            </Row>
            <Col xl={9} md={9} lg={9} className="mx-auto">
                <Row className="mt-4">
                    <Col className="fw-bold">CONTACT</Col>
                </Row>
                <Form>
                    <Form.Group className="mb-3 mt-2"  controlId="formBasicEmail">
                        <Form.Control type="text" className="rounded-0 mt-4 contact" size="sm" placeholder="Name" />
                        <Form.Control type="email" className="rounded-0 mt-3 contact" size="sm" placeholder="Email" />
                        <Form.Control type="number" className="rounded-0 mt-3 contact" size="sm" placeholder="Phone Number" />
                        <Form.Control as="textarea" className="rounded-0 mt-3 ps-2 contact" rows={7} placeholder="Message"/>
                    </Form.Group>
                    <Col className="d-flex justify-content-end">
                        <Button variant="primary" className="rounded-0" type="submit"> 
                            SEND
                        </Button>
                    </Col>
                </Form>
            </Col>
          
        </Container>
    )
}
export default Contact