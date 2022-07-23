import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Products from './Products/Products'
import Sign from './SignUp/signUp'
import Carts from './CART/cart'

const RouteRs = ({ProductItems,cartItem,handleProduct,handleRemove,clearCard}) => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Products ProductItems={ProductItems} handleProduct={handleProduct}/>}/>
        <Route path='/sign' element={<Sign  />} />
        <Route path='/cart' element={<Carts cartItem={cartItem} 
        handleProduct={handleProduct} handleRemove={handleRemove} clearCard={clearCard} />}/>
        </Routes>
     
    </div>
  )
}

export default RouteRs;
