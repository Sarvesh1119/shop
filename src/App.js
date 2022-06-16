import "./App.css"
import Header from "./Components/Header/Header"
import Slide from "./Components/Slide/Slide"
import Rule from "./Components/Rule/Rule"
import FeaturedCollections from "./Components/FeaturedCollections/FeaturedCollections"
import Collections from "./Components/Collections/Collections"
import MainHeader from "./Components/MainHeader/MainHeader"


function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  return (
    <div className="App">
      <MainHeader/>
      <Header/>
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
    </div>
  );
}

export default App;
