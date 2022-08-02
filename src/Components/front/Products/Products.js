import React from 'react'
const Products = ({ProductItems,handleProduct}) => {
  return (
    <div className='products'>
      {ProductItems.map(items=>(
        <div key={items.id}  className='art'  >
         <div>
            <img 
             className='prod-image'
            src={items.image}
            alt={items.name}
            />
         </div>
<div>
  <h3 className='product-name'>{items.name}</h3>
</div>
<div className='product-price'>${items.price}</div>
<div>
  <button className='add-button' onClick={()=>handleProduct(items)}>Add to cart <i class="fas fa-shopping-cart"/></button>
</div>
        </div>
      ))}
    </div>
  )
}
export default Products
