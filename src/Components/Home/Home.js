import React, {useState,useEffect} from 'react'
import "./Home.css"
import Header from "../Header/Header"
import Slide from "../Slide/Slide"
import Rule from "../Rule/Rule"
import FeaturedCollections from "../FeaturedCollections/FeaturedCollections"
import Collections from "../Collections/Collections"
import MainHeader from "../MainHeader/MainHeader"
import SearchBar from "../SearchBar/SearchBar"
import List from "../List/List"
import Header1 from "../Header1/Header1"
import {Container} from "react-bootstrap"

const Home = () => {
  return (
    <div className="App">
      <Container fluid Name="m-0 p-0">
             <Slide/>
              <Rule/>
              <FeaturedCollections/>
              <Rule/>
              <Collections/>
              <Rule/>
              <Collections/>
              <Rule/>
              <Collections/>
              <Rule/>
      </Container>
    </div>
  );
}

export default Home;
