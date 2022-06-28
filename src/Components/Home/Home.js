import React, {useState} from 'react'
import "./Home.css"
import Slide from "../Slide/Slide"
import Rule from "../Rule/Rule"
import FeaturedCollections from "../FeaturedCollections/FeaturedCollections"
import Collections from "../Collections/Collections"
import {Container} from "react-bootstrap"
import {useSelector} from "react-redux"
import ProductView from "../ProductView/ProductView"

const Home = () => {
  const [showProduct,setShowProduct]= useState(false)
  const [object,setObject]=useState({}) 
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
  const handleProductView= (object1) => {
    setObject(object1)
    setShowProduct(true)
  }
  const hideProductView= () => {
    setObject({})
    setShowProduct(false)
  }
  return (
  
    <div className="App">
      <Container fluid Name="m-0 p-0">
      {!showProduct ? 
      <div>
             <Slide/>
              <Rule/>
              <FeaturedCollections/>
              <Rule/>
              <Collections collection={laptops} handleProductView={handleProductView}/>
              <Rule/>
              <Collections collection={smartphones} handleProductView={handleProductView}/>
              <Rule/>
              <Collections collection={skincare} handleProductView={handleProductView}/>
      </div>
      :
      <div className="width mx-auto">
          <ProductView object={object} hideProductView={hideProductView} title="Home"/>
      </div>
      }
      </Container>
    </div>
  );
}

export default Home;
