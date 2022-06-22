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
import {useSelector} from "react-redux"

const Home = () => {
  const products= useSelector(state=> state.products)
  let smartphones=[]
  let laptops=[]
  let homeDecoration=[]
  let groceries=[]
  let skincare=[]
  console.log(products)
  if(products.length>0){
    smartphones=products.filter(key=> key.category==="smartphones")
    laptops=products.filter(key=> key.category==="laptops")
    homeDecoration=products.filter(key=> key.category==="home-decoration")
    groceries=products.filter(key=> key.category==="groceries")
    skincare=products.filter(key=> key.category==="skincare")
  }
  console.log(products)
  console.log(smartphones)
  console.log(laptops) 
  console.log(homeDecoration)
  return (
    <div className="App">
      <Container fluid Name="m-0 p-0">
             <Slide/>
              <Rule/>

              <FeaturedCollections/>
              <Rule/>
              <Collections collection={laptops}/>
              <Rule/>
              <Collections collection={smartphones}/>
              <Rule/>
              <Collections collection={skincare}/>
      </Container>
    </div>
  );
}

export default Home;
