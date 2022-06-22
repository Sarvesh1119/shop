import React,{useState} from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./Collections.css" 
import {Link} from "react-router-dom"
import CollectionPage from '../CollectionPage/CollectionPage'

const sampleCollections=[
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurfTMV5A4b7u97DPFo-PkwJ3hx7b8SKsPew&usqp=CAU",
        title:"Example Product Title",
        price:"$19.99"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurfTMV5A4b7u97DPFo-PkwJ3hx7b8SKsPew&usqp=CAU",
        title:"Example Product Title",
        price:"$19.99"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurfTMV5A4b7u97DPFo-PkwJ3hx7b8SKsPew&usqp=CAU",
        title:"Example Product Title",
        price:"$19.99"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurfTMV5A4b7u97DPFo-PkwJ3hx7b8SKsPew&usqp=CAU",
        title:"Example Product Title",
        price:"$19.99"
    }
]
const Collections = (props) => {
    const [coll,setColl]= useState(false)
    return (
        <Col xl={8} className="mx-auto" id={props.collection[0].category==="laptops" ? "laptops" : "smartphones"}>
        <Container className="base">
            <Row>
                <Col className="h3 col-head">
                {props.collection.length>0 ? props.collection[0].category.toUpperCase() : "FEATURED COLLECTION"} 
                </Col>
            </Row>
            <Row>
                {!coll ?
                    <Col className="mt-3 text-primary col-link" onClick={()=>setColl(true)}>
                        More
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#0d6efd" class="bi bi-caret-right" viewBox="0 0 16 16">
                            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                        </svg>    
                    </Col>
                :
                    <Col className="mt-3 text-primary col-link" onClick={()=>setColl(false)}>
                    Less
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                    </svg>   
            </Col>
                }
            </Row>
            <Container fluid="sm">
            <Row className="col-flex-wrap mt-3">
                {props.collection.length>0 ? !coll? props.collection.slice(0,4).map(object=>
                <Col xs={5} sm={2} lg={2} xl={2} className="p-0 pb-4">
                        <img className=" img-thumbnail col-image" src={object["thumbnail"]} alt=""/>
                        <div className="text-center text-primary">{object["title"]}</div>
                        <div className="text-center">${object["price"]}</div>
                </Col>) 
                :
                props.collection.map(object=>
                    <Col xs={6} sm={3} lg={3} xl={3} className="p-0 pb-4 pe-4">
                            <img className="img-thumbnail col-image" src={object["thumbnail"]} alt=""/>
                            <div className="text-center text-primary">{object["title"]}</div>
                            <div className="text-center">${object["price"]}</div>
                    </Col>) 
                :
                sampleCollections.map(object=>
                    <Col xs={5} sm={2} lg={2} xl={2} className="p-0 col-img mb-5 ">
                            <img className="img-fluid col-image img-fluid" src={object["image"]} alt=""/>
                            <div className="text-center text-primary">{object["title"]}</div>
                            <div className="text-center">{object["price"]}</div>
                    </Col>)}
            </Row>
            </Container>
        </Container>
        </Col>
    )
}
export default Collections