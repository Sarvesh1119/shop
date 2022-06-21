import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import Line from "../Line/Line"
import {Link} from "react-router-dom"
const List = (props) => {
    return (
        <Container fluid className="p-0 text-light">
            <Line/>
            <Container fluid>
                <Link className="decoration text-light" to="/Home">
                    <div onClick={props.handleChange}>
                        HOME
                    </div>
               </Link>
            </Container>
            <Line/>
            <Container fluid>
                <Link className="decoration text-light" to="/Products">
                    <div onClick={props.handleChange}>
                        CATALOG
                    </div>                
                </Link>
            </Container>
            <Line/>
            <Container fluid>
                <Link className="decoration text-light" to="/Contact">
                    <div onClick={props.handleChange}>
                        CONTACT
                    </div>               
                </Link>            
            </Container>
            <Line/>
        </Container>
    )
}
export default List