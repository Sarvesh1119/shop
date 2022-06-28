import React, {useState} from 'react'
import {Container,Row,Col,Button} from "react-bootstrap" 
import "./ProductView.css"
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router-dom" 

const ProductView = (props) => {
    const dispatch= useDispatch()
    const cart= useSelector(state => state.cart) 
    const buy= useSelector(state=> state.buy) 
    console.log(buy)
    const ids=cart.map(key=>key.id)
    console.log(cart)
    const [width,setWidth]=useState(window.innerWidth)
    window.addEventListener("resize",()=>setWidth(window.innerWidth))
    const handleCart= () => {
        props.object["quantity"]=1
        if(!ids.includes(props.object.id)){
            dispatch({type:"ADD_TO_CART",payload:props.object})
        }
    }
    const handleBuy= () => {
        props.object["quantity"]=1 
        if(!ids.includes(props.object.id)){
            dispatch({type:"BUY",payload:props.object})
        }
    }
    return (
        <Container fluid className="mx-auto ps-0 mt-2 text-small">
            <Row>
                <div className="d-flex">
                    <div className="bar-space" onClick={props.hideProductView}><small>{props.title}</small></div>
                    <div className="bar-space">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                        </svg>
                    </div>
                    
                    <div className="bar-space"><small>{props.object.title}</small></div>
                </div>
            </Row>
            <Row>
                <Col xl={12}><hr/></Col>
            </Row>
            <Row className="mt-5">
                <Col xs={12} md={12} lg={5} xl={5} className="me-3">
                    <img className=" thumbnail-height mx-auto d-flex justify-content-between img-thumbnail" src={props.object.thumbnail} alt=""/>
                    {width>=992 &&
                    <div>
                        <Row className="h5 mt-3 d-flex" >
                            <Col xs={3} className="font">Rating</Col>
                            <Col xs={1} className="">-</Col>
                            <Col  className="ps-0">{props.object.rating.toFixed(1)}</Col>
                        </Row>
                        <Row className="h5 mt-3 d-flex" >
                            <Col xs={3} className="font">Brand</Col>
                            <Col xs={1} className="">-</Col>
                            <Col  className="ps-0">{props.object.brand}</Col>
                        </Row>
                    </div>
                    }
                </Col>
                <Col className="mt-5">
                    <Col className="fw-bold h5">{props.object.title}</Col>
                    <Col className="h3 mt-3">${props.object.price}</Col>
                    {width<900 &&
                    <div>
                        <Row className="h5 mt-3 d-flex" >
                            <Col xs={3} className="font">Rating</Col>
                            <Col xs={1} className="">-</Col>
                            <Col  className="ps-0">{props.object.rating.toFixed(1)}</Col>
                        </Row>
                        <Row className="h5 mt-3 d-flex" >
                            <Col xs={3} className="font">Brand</Col>
                            <Col xs={1} className="">-</Col>
                            <Col  className="ps-0">{props.object.brand}</Col>
                        </Row>
                    </div>
                    }
                    <Col className="mt-3 fw-bold">Description</Col>
                    <Col className="text-justify ">{props.object.description}</Col>
                    <div>
                        <Button variant="outline-primary mt-4 ps-0 rounded-0 btn-width" onClick={handleCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <small className="ps-2">ADD TO CART</small>
                        </Button>
                    </div>
                    <div>
                        <Link to="/checkout">
                            <Button variant="primary mt-2 ps-0 rounded-0 btn-width" onClick={handleBuy}>
                                <small className="ps-2">BUY IT NOW</small>
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default ProductView