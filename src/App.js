import React from 'react'
import { navbar } from "./components/navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { shop } from "./pages/shop/shop";
import { cart } from "./pages/cart/cart";

function App() {
  return (
    <div className="App">
      <Router>
        <navbar/>
        <Routes>
          <Route path="/" element={<shop/>}/>
          <Route path="/cart" element={<cart/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App;
