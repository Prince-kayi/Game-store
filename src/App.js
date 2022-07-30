import React, { useState } from 'react';
import './App.css';
import Footer from './footer/Footer';
import './Nav-bar/Cart.css'
import Data from './Components/front/Products/Data';
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom"
import Header from './Nav-bar/Header';
import RouteRs from './Nav-bar/Routes';
const App = () => {
  const { ProductItems } = Data;
  const [cartItem, setCartItem] = useState([])
  const handleProduct = (product) => {
    const ProductExist = cartItem.find((item) => item.id === product.id)
    if (ProductExist) {
      setCartItem(cartItem.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item));
    }
    else {
      setCartItem([...cartItem, { ...product, quantity: 1 }])
    }
  }
  const handleRemove = (product) => {
    const ProductExist = cartItem.find((item) => item.id === product.id)
    if (ProductExist.quantity === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id
      ))
    }
    else {
      setCartItem(
        cartItem.map((item) => item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item)
      )
    }
  }
  const clearCard = () => {
    setCartItem([])
  }

  return (
    <div>
      <BrowserRouter>
        <Header cartItem={cartItem} />
        <RouteRs ProductItems={ProductItems}
          cartItem={cartItem}
          handleProduct={handleProduct}
          handleRemove={handleRemove}
          clearCard={clearCard}
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
