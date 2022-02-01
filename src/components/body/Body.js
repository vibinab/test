import React from 'react';
import "./Body.css";
import data from './Data';
import  Product from './Product';

export const Body = () => {

  const {productItems}= data;
  return <>
  
  <div className=" productsearch">
    <input type="text" placeholder='Search with product name or code' className='productinput'></input>
    <span className='productsearchbutton'><i class="fa fa-search" style={{fontSize:"1.5rem"}}></i> </span>
  </div>

  <div className='displayproduct'>
  <Product productItems={productItems} />

  </div>

  </>
};

export default Body;