import React from 'react';
import "./Header.css";
import { NavLink } from "react-router-dom";


export const Header = () => {

  const navLinkStyles= ({isActive}) => {
    return {
      backgroundColor:isActive?'green':'',
      position:isActive?'absolute':'',
      width:isActive?'19rem':'',
      marginLeft:isActive?'-9.5rem':'',
      padding:isActive?'0rem':'',
      height:isActive?'3rem':'',
      marginTop:isActive?'-0.5rem':'',
      borderRadius:isActive?'7px':'',
      
      
    }
  }
  return <>
<div className='header-head'>
  <h2>B Mart Supermarket </h2>
  <p>Ontario, London</p>
</div>


<div className="header-navbar">
<ul className='header-menu-list'>
  <li className='header-menu-item'><NavLink style={navLinkStyles} className='header-menu-links' to={`/`}><strong>Home</strong></NavLink></li>
  <li className='header-menu-item'><NavLink style={navLinkStyles} className='header-menu-links' to={`/transaction`}>Transaction</NavLink></li>
  <li className='header-menu-item'><NavLink style={navLinkStyles} className='header-menu-links' to={`/cashier`}>Cashier</NavLink></li>
  <li className='header-menu-item'><NavLink style={navLinkStyles} className='header-menu-links' to={`/settings`}>Settings</NavLink></li>
  
</ul>
</div>

  </>;
};

export default Header;
