import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const Layout2 = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default Layout2;
