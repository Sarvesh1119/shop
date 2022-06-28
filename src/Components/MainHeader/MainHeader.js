import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Modal,Button} from "react-bootstrap"
import "./MainHeader.css"
import {useSelector,useDispatch} from "react-redux" 
import {Link} from "react-router-dom" 

const MainHeader = (props) => {
    const dispatch= useDispatch()
    const [quantity,setQuantity]=useState(false)
    const cart=useSelector(state=> state.cart)
    const total = cart.reduce(
        (prevValue, currentValue) => prevValue + Number(currentValue.price*currentValue.quantity),
        0
      );
    const [lgShow, setLgShow] = useState(false);
    useEffect(()=>{
        cart.map(object=> object.quantity===0 && dispatch({type:"REMOVE_ITEM",payload:object.id}))
    },[cart])
    const handleCheckout = () => {
        setLgShow(false)
        dispatch({type:"BUY",payload:{}})
    }
    return (
        <Container fluid className="fixed-top">
            <Row className="py-2 d-flex justify-content-between bg-color">
                <Col className="d-flex">
                        <div onClick={props.handleChange} className="list-icon">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </div>
                       <div className="px-1 text-light">Menu</div>
                </Col>
                <Col className="d-flex justify-content-end element" onClick={()=>setLgShow(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        <div className="px-1 text-light">Cart</div>
                        {cart.length>0 &&
                        <small className="round-element">{cart.length>0 && cart.length}</small>}
                </Col>
            
            </Row>

        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        className="modal-margin"
        dialogClassName="border-radius-0"
        scrollable={true}
        >

            <Modal.Header closeButton>
                <Modal.Title className="h5">
                {cart.length===0 ?"YOUR CART IS CURRENTLY EMPTY.": "SHOPPING CART"}
                </Modal.Title>
            </Modal.Header>
            {cart.length===0 ?
            <Modal.Body className="d-flex">
                <small>
                    Continue browsing
                </small> 
                <small className="text-primary ps-1" onClick={()=>setLgShow(false)}>
                    here.
                </small>
            </Modal.Body>
            :
            <Modal.Body className="overflow-scroll">
                {cart.map(object=>
                <Row className="d-flex  justify-content-between">
                    <Col xl={8} md={8} xs={12} className="d-flex mb-3">
                        <Col xl={2} xs={3} className="">
                            <img src={object.thumbnail} alt="" className="img-fluid cart-img"/>
                        </Col>
                        <Col xl={2} xs={2} className="ms-5">{object.title}</Col>
                    </Col>
             
                    <Col xs={5} className=""
                    >
                        <div className="d-flex">
                            <div className="border h-25 text-secondary px-2" onClick={()=>dispatch({type:"SUB_QUANTITY",payload:object.id})}>-</div>
                            <div className="border-top border-bottom  h-25 px-2">{object.quantity}x</div>
                            <div className="border  h-25 text-secondary px-2" onClick={()=>dispatch({type:"ADD_QUANTITY",payload:object.id})}>+</div>
                        </div>
              
                    </Col>
                    <Col className="d-flex justify-content-between">
                        <Col className="">${object.price*object.quantity}</Col>
                        <Col className="ms-5" onClick={()=>dispatch({type:"REMOVE_ITEM",payload:object.id})}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </Col>
                    </Col>
                    <Row>
                        <Col xl={12}><hr/></Col>
                    </Row>
                </Row>
                )}
                <Col xl={6} className="d-flex flex-column">
                    <Col xl={6} className="">
                        <small>Subtotal</small>
                        <Col className="fw-bold ">${total}</Col>
                    </Col>
                    <Col xl={4} >
                        <Button variant="primary" className="mt-3 d-flex rounded-0" size="sm">
                            <Col className="me-2 mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                </svg>
                            </Col>
                            <Link to="checkout" className="decoration">
                                <Col onClick={handleCheckout}>CHECKOUT</Col>
                            </Link>
                    </Button>
                    </Col>
                </Col>
            </Modal.Body>}
        </Modal>
    </Container>
    )
}

export default MainHeader