import React from "react";
import './style.css';
import Products from './Components/Products';
import Layout from "./Components/Layout";
import Cart from './Components/Cart';
import Home from "./Components/Home";
import { Route, Routes  } from "react-router-dom";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
      </Route>
     </Routes>
    </>
  );
}

export default App;
