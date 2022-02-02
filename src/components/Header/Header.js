import React, { useEffect, useRef } from 'react';
import "./Header.css";
import { NavLink } from "react-router-dom";
// import Aos from "aos";
// import "aos/dist/aos.css";

// import {TweenMax, Power3} from 'gsap'


export const Header = () => {

  // let textItem= useRef(null);

  // useEffect(() => { 
  //   Aos.init({duration:2000});
  // }, []);


  // useEffect( () => {
  //   TweenMax.to(
  //     textItem,
  //     .8,
  //     {
  //       y:-20,
  //       ease:Power3.easeOut,
  //       delay:.2

  //     }

  //   )
  // },[])



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
  <h2 >B Mart Supermarket </h2>
   {/* <h2 ref={ el =>{textItem=el}}>B Mart Supermarket </h2> */}
  <p>Ontario, London</p>
</div>


<div className="header-navbar">
<ul className='header-menu-list'>
  <li className='header-menu-item'><NavLink style={navLinkStyles} className='header-menu-links' to={`/`}><b>Home</b></NavLink></li>
  <li className='header-menu-item'><NavLink style={navLinkStyles} className='header-menu-links' to={`/transaction`}><b>Transaction</b></NavLink></li>
  <li className='header-menu-item'><NavLink style={navLinkStyles} className='header-menu-links' to={`/cashier`}><b>Cashier</b></NavLink></li>
  <li className='header-menu-item'><NavLink style={navLinkStyles} className='header-menu-links' to={`/settings`}><b>Settings</b></NavLink></li>
  
</ul>
</div>

  </>;
};

export default Header;
