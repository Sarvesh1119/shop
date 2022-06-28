import React from 'react' 
import {Col,Row,Container,Form,Button,FloatingLabel,Footer} from "react-bootstrap"
import {useSelector} from "react-redux"
import "./Payment.css"

const Payment =() => {
    const buy= useSelector(state=> state.buy)
    const cart= useSelector(state=> state.cart)
    const total = cart.reduce(
        (prevValue, currentValue) => prevValue + Number(currentValue.price*currentValue.quantity),
        0
      );
    let buyTotal=0
    console.log(buy[0],"buy length")
    if(buy.length>0){
        if(Object.keys(buy[0]).length>0){
            buyTotal = buy.reduce(
                (prevValue, currentValue) => prevValue + Number(currentValue.price*currentValue.quantity),
                0
            );
        }
      
        console.log(buyTotal,"e")
    }
  
    console.log(total,"toatl")
    console.log(buyTotal,"buy total")
    return (
        <Container fluid className="mt-4 width">
            <Col xs={12} md={9} className="mx-auto h5">Card details</Col>
            <Col  xs={12} md={9} className="mx-auto">
                <FloatingLabel  className="mb-3" label="Card number">
                    <Form.Control size="lg" type="number" placeholder="card number" />
                </FloatingLabel>
                <FloatingLabel  className="mb-3" label="Name on card">
                    <Form.Control size="lg" type="text" placeholder="name on card" />
                </FloatingLabel>
            </Col>
          
            <Row>
                <Col xs={7}  md={9} className="mx-auto">
                    <FloatingLabel  className="mb-3" label="Valid Thru">
                        <Form.Control size="lg" type="number" placeholder="valid thru" />
                    </FloatingLabel>
                </Col>
                <Col  xs={5} md={9} className="mx-auto">
                    <FloatingLabel  className="mb-3" label="CVV">
                        <Form.Control size="lg" type="number" placeholder="cvv" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col xs={12}  md={9} className="mx-auto"><hr/></Col>
            </Row>
            <Row className="d-flex justify-content-between">
                <Col  xs={6} md={3} className="mx-auto">
                    Total MRP
                </Col>
                <Col  xs={6} md={3} className="mx-auto text-end">
                    ${buyTotal===0 ? total : buyTotal}
                </Col>
            </Row>
            <Row className="d-flex justify-content-between mt-2">
                <Col xs={6} md={3} className="mx-auto">
                    Shipping charges
                </Col>
                <Col xs={6} md={3} className="mx-auto text-end text-success">
                    {buyTotal===0 ? Number(total)>1000 ?
                    "Free" 
                    :
                    "$40"
                    : 
                    Number(buyTotal)>1000 ? "Free": "$40"}
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={9} className="mx-auto"><hr/></Col>
            </Row>
            <Row className="d-flex justify-content-between mt-2">
                <Col xs={6} md={3} className="mx-auto fw-bold" >
                    Total Amount
                </Col>
                <Col  xs={6} md={3} className="mx-auto text-end fw-bold">
                    ${buyTotal===0 ? total>1000 ? total : total+40 : buyTotal>1000 ? buyTotal : buyTotal+40}
                </Col>
            </Row>
            <Row className="d-flex justify-content-between mt-2">
                <Col xs={12} md={9} className="mx-auto d-grid">
                    <Button variant="primary" className="fw-bold" size="lg">
                        PAY NOW
                    </Button>   
                 </Col>
            </Row>
        </Container>
    )
}
export default Payment