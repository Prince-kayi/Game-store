import React, { useEffect, useState } from 'react'
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

const Pictures = [
  "https://www.menstuff.co.za/wp-content/uploads/2017/12/xmas-banner.jpg",

  "https://mybroadband.co.za/news/wp-content/uploads/2017/11/Black-Friday-Xbox.jpg",

  " https://www.xp-pen.com/Uploads/forum/images/2021/11/12/1636683778592324.jpg",

  "https://www.gematsu.com/wp-content/uploads/2022/03/Forspoken_2022_03-09-22_016.jpg",

  "https://www.smartprix.com/bytes/wp-content/uploads/2022/07/maxresdefault-1.jpg",

  "https://assets-prd.ignimgs.com/2020/08/26/image-1598464390916.png",

  " https://winetimeonline.co.za/wp-content/uploads/2022/07/SEXY-WINES.png",

  "https://www.hirschs.co.za/media/wysiwyg/Hirsch_mobile_686_x_500_px.png"
];
let count = 0;
const Products = ({ ProductItems, handleProduct }) => {
  const [curent, setCurent] = useState(0)
  const HandleRightClick = () => {
    count = (count + 1) % Pictures.length;
    setCurent(count);
  }
  const HandleLeftClick = () => {
    const PricsLenght = Pictures.length;
    count = (curent + PricsLenght - 1) % Pictures.length
    setCurent(count);
  }
  useEffect(() => {
    BeginSlider();
  }, []);
  const BeginSlider = () => {
    setInterval(() => {
      HandleRightClick();
    }, 3100);
  };
  return (
    <>
      <div className='auto-slide'>
        <img src={Pictures[curent]} alt="specials" className='sLides' />
        <div>
          <FaChevronCircleLeft className='lefti' onClick={HandleLeftClick} />
          <FaChevronCircleRight className='righti' onClick={HandleRightClick} />
        </div>
      </div>
      <div className='products'>
        {ProductItems.map(items => (
          <div key={items.id} className='art'>
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
              <button className='add-button' onClick={() => handleProduct(items)}>Add to cart <i class="fas fa-shopping-cart" /></button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Products
