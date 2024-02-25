// Cart.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import Container from '../components/Container';

const Cart = () => {
  const { cart } = useCart();
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0);
  };
  

  return (
    <>
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className='cart-col-1'>Product</h4>
              <h4 className='cart-col-2'>Price</h4>
              <h4 className='cart-col-3'>Quantity</h4>
              <h4 className='cart-col-4'>Total</h4>
            </div>

            {/* Loop through cart items and render them */}
            {cart.map((item, index) => (
              <div key={index} className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className='cart-col-1'>
                  {/* Render the product information */}
                  <img src={item.image} alt={item.name} className='img-fluid' />
                  <p>{item.name}</p>
                </div>
                <div className='cart-col-2'>
                  <h5 className="price">${item.price}</h5>
                </div>
                <div className='cart-col-3' >
                  {/* Add input for quantity if needed */}
                  <input type="number" className='cartinput' value={item.quantity} disabled style={{textAlign:"center"}}/>
                </div>
                <div className='cart-col-4'>
                  {/* Add total price calculation based on quantity and item price */}
                  <h5 className="price">${item.price * item.quantity}</h5>
                </div>
              </div>
            ))}

            {/* ... (your existing code) */}
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className='button'>
                  Continue To Shopping
                </Link>
                <div className='d-flex flex-column align-items-end'>
                  <h4>SubTotal: ${calculateSubtotal()}</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link to='/checkout' className='button'>Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Cart;
