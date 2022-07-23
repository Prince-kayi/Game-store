import React, { useState } from 'react';
import './App.css';
import Cart from './Cart';
import Document from './Document';
import Test from './Test';
import Games from './Games';
import Carts from './Carts';
import Data from './Components/back/Data/Data';
import { CartProvider } from './CartContext';
import {BrowserRouter, Link,Navigate,Route,Routes} from "react-router-dom"
import Header from './Components/front/Header';
import RouteRs from './Components/front/Routes';
const App=()=> {
  const {ProductItems}=Data;
  const [cartItem,setCartItem]=useState([])
  const handleProduct=(product)=>{
     const ProductExist= cartItem.find((item)=>item.id===product.id)
     if(ProductExist){
      setCartItem(cartItem.map((item)=>item.id===product.id ?
      {...ProductExist, quantity:ProductExist.quantity+1}:item));
     }
     else{
      setCartItem([...cartItem,{...product,quantity:1}])
     }
}
     const handleRemove=(product)=>{
      const ProductExist= cartItem.find((item)=>item.id===product.id)
      if(ProductExist.quantity===1){
        setCartItem(cartItem.filter((item)=>item.id!==product.id
        ))
      }

       else{
        setCartItem(
          cartItem.map((item)=>item.id===product.id ? {...ProductExist,quantity:ProductExist.quantity-1}:item)
        )
      
     }

   }
       const clearCard=()=>{
        setCartItem([])
       }

      
      
       
  
  return (
 //<CartProvider>
 //<Carts/>
//<Games/>
  //</CartProvider>


  <div>
<BrowserRouter>
<Header cartItem={cartItem}/>
<RouteRs ProductItems={ProductItems} 
cartItem={cartItem} 
 handleProduct={handleProduct}
 handleRemove={handleRemove}
 clearCard={clearCard}

 />
</BrowserRouter>
  </div>
  );
}

export default App;
