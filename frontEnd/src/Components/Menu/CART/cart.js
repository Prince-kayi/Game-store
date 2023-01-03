import React from 'react'

const Carts = ({cartItem,handleProduct,handleRemove,clearCard}) => {
  const totalPrice=cartItem.reduce((price,item)=>price + item.quantity *item.price,0)
  return (
    <div className='card-item'>
    <h4 className='card-item-header'>Card items</h4>
     <div className='clear-cart'>
      {cartItem.length >= 1 &&(<button className='clear-cart-button' onClick={clearCard}>Clear Cart</button>)}
     </div>
    
    {cartItem.length === 0 && (<div className='card-empty'> No card items</div>)}
    <div>
      {cartItem.map((item)=>(
        <div key={item.id} className="card-list">
     <img 
     className='card-images'
     src={item.image}
     alt={item.name}
     />
     <div className='cart-list-name'>{item.name}</div>
     <div className='cart-item-fuction'>
   <button className='cart-add-item' onClick={()=>handleProduct(item)}>+</button>
   <button className='cart-remove-item' onClick={()=>handleRemove(item)}>-</button>
     </div>
     <div className='cart-item-price'>
      {item.quantity}*${item.price}
     </div>
     </div>
      ))}
      <div className='card-item-totals-name'>
        Total Price
        <div className='card-item-total-price'>
        ${totalPrice}
        </div>

      </div>
    </div>
    </div>
  )
}

export default Carts
