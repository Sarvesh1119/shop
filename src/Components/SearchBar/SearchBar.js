import React from 'react'
import {Container,Row,Col,Form, InputGroup} from "react-bootstrap"
import "./SearchBar.css"

const SearchBar = () => {
    return (
        <Container fluid className="bg-color sticky mt-4">
            <Form>
                <Form.Group className="pt-4">
                    <InputGroup>
                        <Form.Control
                        className="text-white border-light border-end-0 search-input bg-color"
                        placeholder="Search all products..."
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2" className="bg-color border-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </Form> 
        </Container>
    )
}
export default SearchBar