import React from 'react';
import "./Transaction.css";
import database from "../../assets/images/database.png";

export const Transaction = () => {
  return <>
      <div className='database'>
        <img src={database} alt='database'></img>
       
      </div>
      <div className='data'>
      <p>No data Found</p>
      </div>
      
  </>;
};

export default Transaction;