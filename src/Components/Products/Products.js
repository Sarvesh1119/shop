import React, {useEffect, useState} from 'react'
import "./Products.css"
import {Container,Row,Col,Form} from "react-bootstrap"
import {useSelector, useDispatch} from "react-redux"

const Products = () => {
    const [grid,setGrid]= useState(true)
    const [row,setRow]= useState(false)
    const dispatch= useDispatch()
    const [width,setWidth]= useState(window.innerWidth)
    const products= useSelector(state=> state.products)
    useEffect(() => {
        window.addEventListener("resize",()=>setWidth(window.innerWidth))
    },[])
    const changeGrid = () => {
        setGrid(true)
        setRow(false)
    }
    const changeGrid1 = () => {
        setRow(true)
        setGrid(false)
    }
    const handleSort = (event) => {
            if(event.target.value==="original"){
                console.log(event.target.value)
                dispatch({type:"GET_PRODUCTS"})
            }
            if(event.target.value==="a-z"){
                dispatch({type:"POST_PRODUCTS",payload:[...products.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1)]})
            }
            else if(event.target.value==="z-a"){
                dispatch({type:"POST_PRODUCTS",payload:[...products.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? -1 : 1)]})
            }
            else if(event.target.value==="low-high"){
                dispatch({type:"POST_PRODUCTS",payload:[...products.sort((a, b) => (a.price > b.price) ? 1 : -1)]})
            }
            else if(event.target.value==="high-low"){
                dispatch({type:"POST_PRODUCTS",payload:[...products.sort((a, b) => (a.price > b.price) ? -1 : 1)]})
            }
            else if(event.target.value==="rating-asc"){
                dispatch({type:"POST_PRODUCTS",payload:[...products.sort((a, b) => (a.rating > b.rating) ? 1 : -1)]})
            }
            else if(event.target.value==="rating-desc"){
                dispatch({type:"POST_PRODUCTS",payload:[...products.sort((a, b) => (a.rating > b.rating) ? -1 : 1)]})
            } 
    }
    console.log(products)

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
                    <div className="bar-space"><small>Products</small></div>
                </div>
            </Row>
            <Row>
                <Col xl={12}><hr/></Col>
            </Row>
            <Row className="mt-4 d-flex">
                <Col xs="12"  md="6" xl="6" className="h4">PRODUCTS</Col>
                {width>=768 &&
                <Col md={1} xl={1} lg={1} className="d-flex justify-content-end pt-1 ms-5 pe-0 me-3"><small className="">Sort by</small></Col>}
                <Col xs="6" sm="3" md="3" xl="3" className="">
                    <Form.Select size="sm" onChange={handleSort}>
                        <option value="original">Options</option>
                        <option value="a-z">Alphabetically, A-Z</option>
                        <option value="z-a">Alphabetically, Z-A</option>
                        <option value="low-high">Price, low to high</option>
                        <option value="high-low">Price, high to low</option>
                        <option value="rating-asc">Rating, low to high</option>
                        <option value="rating-desc">Rating, high to low</option>
                    </Form.Select>
                </Col>
                {width>=768 &&
                <Col md={1} className="d-flex">
                    <div onClick={changeGrid}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={grid? "black" : "gray"} class="bi bi-grid-fill" viewBox="0 0 16 16">
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
                        </svg>
                    </div>
                    <div onClick={changeGrid1} className="ms-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill={row ? "black" : "gray"} class="bi bi-grid-3x2-gap-fill" viewBox="0 0 16 16">
                            <path d="M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9z"/>
                        </svg>
                    </div>
                </Col>
                }
            </Row>
            {products.length > 0 && grid && !row &&
            <Row className="mt-3 d-flex flex-wrap">
                {products.map(key=> key.id!=29 && key.id!=24 &&
                <Col xs={6} sm={3} md={3} lg={3} xl={3} className="template">
                    <img className="img-height mb-2 img-thumbnail" src={key.thumbnail}/>
                    <small><div className="text-secondary mb-2">{key.title}</div></small>
                    <div className="h6">${key.price}</div>
                </Col>)}
            </Row>}
            {products.length > 0 && row && !grid &&
            products.map(key=> key.id!=29 && key.id!=24 &&
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
export default Products