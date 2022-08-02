import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Products from '../Components/front/Products/Products'
import Sign from '../Components/front/Pages/signUp'
import Carts from '../Components/front/CART/cart'
import Orders from '../Components/front/Pages/Orders'
const RouteRs = ({ProductItems,cartItem,handleProduct,handleRemove,clearCard}) => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Products ProductItems={ProductItems} handleProduct={handleProduct}/>}/>
        <Route path='/sign' element={<Sign  />} />
        <Route path='/cart' element={<Carts cartItem={cartItem} 
        handleProduct={handleProduct} handleRemove={handleRemove} clearCard={clearCard} />}/>
        <Route path='/order' element={<Orders />}/>
        </Routes>
    </div>
  )
}
export default RouteRs;
