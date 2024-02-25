import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout2 from './components/Layout2';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forget from './pages/Forget';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermCondition from './pages/TermCondition ';
import SinglePoduct from './pages/SinglePoduct';
import SingleBlue from './pages/SingleBlue';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Watch from './pages/Watch';
import BestSelling from './pages/BestSelling';
import { CartProvider } from './components/CartContext';
import BlueProduct from './components/BlueProduct';
import RoomFillProduct from './components/RoomFillProduct';
import SingleRoomFill from './components/SingleRoomFill';

function App() {
  return (
  <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout2 />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='product' element={<OurStore/>}/>
            <Route path='product/:id' element={<SinglePoduct/>}/>
            <Route path='blueProduct' element={<BlueProduct/>}/>
            <Route path='blueproduct/:id' element={<SingleBlue/>}/>
            <Route path='singleRoomproduct' element={<RoomFillProduct/>}/>
            <Route path='singleRoomproduct/:id' element={<SingleRoomFill/>}/>
            <Route path='blogs' element={<Blog/>}/>
            <Route path='blogs/:id' element={<SingleBlog/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path='compare-product' element={<CompareProduct/>}/>
            <Route path='wishlist' element={<Wishlist/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='forgot-password' element={<Forget/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='reset-password' element={<ResetPassword/>}/>
            <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='refund-policy' element={<RefundPolicy/>}/>
            <Route path='shipping-policy' element={<ShippingPolicy/>}/>
            <Route path='term-condition' element={<TermCondition/>}/>
            <Route path='search/:query' element={<Watch/>}/>
            <Route path='best-selling' element={<BestSelling/>}/>
            {/* <Route  element={<CartProvider/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
      
      </>
  );
}

export default App;
