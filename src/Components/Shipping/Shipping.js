import React from 'react'
import {Col,Row,Container,Form,FloatingLabel,Button} from "react-bootstrap" 

const Shipping= (props) => {
  
    const handleChange= (event) => {
        console.log(event.target.name,event.target.value)
    }
    return (
        <Container fluid className="mt-4 width">
            <Row className="mt-3">
                <Col xs={12} md={9}  className="h5 mx-auto">Contact information</Col>
                <Col xs={12} md={9} className="mx-auto">
                    <FloatingLabel controlId="floatingPassword" label="Email or mobile phone number">
                        <Form.Control size="lg" type="text" placeholder="example@gmail.com" name="email" onChange={handleChange}/>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={12} md={9} className="mx-auto h5">Shipping address</Col>
                <Col xs={12} md={9} className="mx-auto">
                    <FloatingLabel  className="mb-3" label="Country/region">
                        <Form.Control size="lg" type="text" placeholder="country" name="country" onChange={handleChange}/>
                    </FloatingLabel>
                    <FloatingLabel  className="mb-3" label="First name">
                        <Form.Control size="lg" type="text" placeholder="firstname" name="firstname" onChange={handleChange}/>
                    </FloatingLabel>
                    <FloatingLabel  className="mb-3" label="Last name">
                        <Form.Control size="lg" type="text" placeholder="lastname" name="lastname" onChange={handleChange}/>
                    </FloatingLabel>
                    <FloatingLabel  className="mb-3" label="Address">
                        <Form.Control size="lg" type="text" placeholder="address" name="address" onChange={handleChange}/>
                    </FloatingLabel>
                    <FloatingLabel  className="mb-3" label="City">
                        <Form.Control size="lg" type="text" placeholder="city" name="city" onChange={handleChange}/>
                    </FloatingLabel>
                    <FloatingLabel  className="mb-3" label="State">
                        <Form.Control size="lg" type="text" placeholder="state" name="state" onChange={handleChange}/>
                    </FloatingLabel>
                    <FloatingLabel  className="mb-3" label="PIN code">
                        <Form.Control size="lg" type="number" placeholder="pincode" name="pincode" onChange={handleChange}/>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={9} className="mx-auto">
                    <Button size="lg" variant="primary" ><small onClick={props.handlePayment}>Continue to payment</small></Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={9} className="mx-auto"><hr/></Col>
            </Row>
        </Container>
    )
}
export default Shipping