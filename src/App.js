import React,{useState,useEffect} from 'react'
import "./App.css"
import {Routes,Route,Navigate} from "react-router-dom"
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header"
import MainHeader from "./Components/MainHeader/MainHeader"
import SearchBar from "./Components/SearchBar/SearchBar"
import List from "./Components/List/List"
import Products from "./Components/Products/Products"
import Header1 from "./Components/Header1/Header1"
import Contact from "./Components/Contact/Contact"
import CollectionPage from "./Components/CollectionPage/CollectionPage"
import Checkout from "./Components/Checkout/Checkout"
import {useDispatch} from "react-redux"

function App() {
  const dispatch= useDispatch()
  useEffect(()=> {
    dispatch({type:"GET_PRODUCTS"})

},[])
  const [menu,setMenu]= useState(false)
  const handleChange = () => {
    setMenu(!menu)
  }
  const [width,setWidth]=useState(window.innerWidth)
  useEffect(()=>{
    window.addEventListener("resize",()=>setWidth(window.innerWidth))
  },[])
  return (
    <div>
      <div className="App">
      {menu ? 
      <div className="bg-color position-fixed w-100 menu-bar">
          <MainHeader handleChange={handleChange}/>
          <SearchBar/>
          <List handleChange={handleChange}/>
      </div>
      :
      <div>
          {width>1200 ?
          <div>
              <Header1/>
          </div>
          :
          <div>
              <MainHeader handleChange={handleChange}/>
              <Header/>
          </div>}
      </div>}
      {!menu &&
      <Routes>
        <Route path="Home" element={<Home/>}/>
        <Route path="/" element={<Navigate to="/Home"/>}/>
        <Route path="Products" element={<Products/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="CollectionPage" element={<CollectionPage/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Routes>}
    </div>
    </div>

  );
}

export default App;
