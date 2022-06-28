import React,{useState} from 'react'
import {Row,Col,Container} from "react-bootstrap"
import Shipping from "../Shipping/Shipping"
import Payment from "../Payment/Payment"
import "./Checkout.css"

const Checkout= () => {
 
    const [shipping,setShipping]= useState(true)
    console.log(shipping)

    const handleShipping= () => {
        setShipping(true)
    }
    const handlePayment= () => {
        setShipping(false)
    }
    return (
        <Container fluid className="mt-4">
            <Container className="">
             <Row className="width mx-auto">
                <Col xs={2} xl={1} className="pe-0 "><small>Cart</small></Col>
                <Col xs={1}  xl={1} className=" p-0  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                    </svg>
                </Col>
                <Col xs={2} xl={1} className="ps-0 "><small className={shipping && "fw-bold"} onClick={()=>setShipping(true)}>Shipping</small></Col>
                <Col xs={1}  xl={1} className=" ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                    </svg>
                </Col>
                <Col xs={2} xl={1} className="ps-1"><small className={!shipping && "fw-bold"}  onClick={()=>setShipping(false)}>Payment</small></Col>
            </Row>
            </Container>
            {shipping ?
                <Shipping handlePayment={handlePayment}/>
            :
                <Payment handleShipping={handleShipping} />
            }
        </Container>
    )
}
export default Checkout