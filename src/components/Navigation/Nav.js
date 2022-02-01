import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Transaction from '../Transaction/Transaction';
import  Cashier  from '../Cashier/Cashier';
import  Settings  from '../settings/Settings';
import Body from '../body/Body';

export const Nav = () => {
  return <>
      <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Body />} />
      <Route path='/transaction' element={<Transaction />} />
      <Route path='/cashier' element={<Cashier />} />
      <Route path='/settings' element={<Settings />} />


      </Routes>
      
      


      </Router>
  </>;
};

export default Nav;

