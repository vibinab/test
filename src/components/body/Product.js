import React from 'react';
import "./Product.css";


export const Product = ({productItems}) => {
  return (
  <>
      <div className='main-products'>
          {productItems.map((productItems) => (
              <>
              <div className='product-details'>
              <div className='product-image'>
              <img src={productItems.image} alt='name'></img>
              </div>
              <div className='product-name'>
              {productItems.name}
              </div>
              <div className='product-code'>
              Product Code:{productItems.productCode}
              </div>
              <div className='product-price'>
              {productItems.price}$
              </div>
              <div className='add-to-cart'>
                <button className='add-to-cart-btn'>Add to cart</button>
              </div>
            
              </div>
              </>
            


          ))}
      </div>
  </>

  )
 };
export default Product;
