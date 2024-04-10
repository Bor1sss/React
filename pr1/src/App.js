import React , { useState } from "react";
import './App.css'
import Form from "./Form/Form";

import About from "./About/about";
import Footer from "./footer/footer";
import City from "./City/City";
import CityComp from "./CityComp/CityComp";
import FavBook from "./FavBook/FavBook";
import FavBookComp from "./FavBookComp/FavBookComp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./Nav/Nav";
function App() {
  const [showCity, setShowCity] = useState(true);
  const toggleComponent = () => {
    setShowCity(prevShowCity => !prevShowCity); 
  };
  return(
  <>
  <Router>
  <div className="container">
          <Navigation> </Navigation>
  </div>
  <Routes>
              <Route path='/Form' Component={Form}/>
              <Route path='/city-func' Component={City} />
              <Route path='/city-class' Component={CityComp} />
              <Route path='/book-func' Component={FavBook} />
              <Route path='/book-class' Component={FavBookComp} />
      </Routes>
  </Router>
  </>
  
  )
}

export default App