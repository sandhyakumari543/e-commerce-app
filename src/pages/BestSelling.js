import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link,useLocation } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import watch from '../pages/images/watch.jpg'
import watch2 from '../pages/images/watch3.jpg'
import imageView from '../pages/images/view.svg'
import addCart from '../pages/images/add-cart.svg'
import productComp from '../pages/images/prodcompare.svg'
import wish from '../pages/images/wish.svg'
import blue2 from '../pages/images/blue2.jpg'
import blue from '../pages/images/blue.jpg'
import famous from '../pages/images/famous-4.png'
import room from '../pages/images/room.jpg'

const BestSelling = (props) => {
    const { grid } = props;
    let location = useLocation();
  
    return (
      <>
        <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
  
          <Link to=
           {`${location.pathname == "/"
           ? "product/:id"
           : location.pathname == "product/:id"
             ? "product/id"
             : ":id"
           }`}
          className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <button className='border-0 bg-transparent'><img src={wish} alt="wishlist" /></button>
            </div>
            <div className="product-image">
              <img src={blue2} className='img-fluid' alt="product image" />
              <img src={blue} style={{width:'404px'}} className='img-fluid' alt="product image" />
            </div>
            <div className="product-details">
              <h6 className='brand'>Havels</h6>
              <h5 className="product-title">
                Kids headphones bulk 10 pack multi colred for students
              </h5>
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolres et quas molestias excepturi sint occaecati cupidtate non provident, similique sunt...</p>
              <p className="price">$100.00</p>
            </div>
  
            <div className="action-bar position-absolute " >
              <div className="d-flex flex-column gap-15">
                <button className='border-0 bg-transparent'><img src={productComp } alt="prodcompare" /></button>
                <button className='border-0 bg-transparent'><img src={imageView} alt="view" /></button>
                <button className='border-0 bg-transparent'><img src={addCart} alt="add-cart" /></button>
  
              </div>
            </div>
          </Link>
        </div>

        <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
  
  <Link to=
   {`${location.pathname == "/"
   ? "product/:id"
   : location.pathname == "product/:id"
     ? "product/id"
     : ":id"
   }`}
  className="product-card position-relative">
    <div className="wishlist-icon position-absolute">
      <button className='border-0 bg-transparent'><img src={wish} alt="wishlist" /></button>
    </div>
    <div className="product-image">
      <img src={watch} style={{marginLeft:'66px'}} className='img-fluid' alt="product image" />
      <img src={watch2} style={{width:'350px'}} className='img-fluid' alt="product image" />
    </div>
    <div className="product-details">
      <h6 className='brand'>Havels</h6>
      <h5 className="product-title">
        Kids headphones bulk 10 pack multi colred for students
      </h5>
      <ReactStars
        count={5}
        size={24}
        value={3}
        edit={false}
        activeColor="#ffd700"
      />
      <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolres et quas molestias excepturi sint occaecati cupidtate non provident, similique sunt...</p>
      <p className="price">$100.00</p>
    </div>

    <div className="action-bar position-absolute " >
      <div className="d-flex flex-column gap-15">
        <button className='border-0 bg-transparent'><img src={productComp } alt="prodcompare" /></button>
        <button className='border-0 bg-transparent'><img src={imageView} alt="view" /></button>
        <button className='border-0 bg-transparent'><img src={addCart} alt="add-cart" /></button>

      </div>
    </div>
  </Link>
</div>

<div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
  
  <Link to=
   {`${location.pathname == "/"
   ? "product/:id"
   : location.pathname == "product/:id"
     ? "product/id"
     : ":id"
   }`}
  className="product-card position-relative">
    <div className="wishlist-icon position-absolute">
      <button className='border-0 bg-transparent'><img src={wish} alt="wishlist" /></button>
    </div>
    <div className="product-image">
      <img src={famous} style={{width:'150px', marginLeft:'98px', marginTop:'66px'}} className='img-fluid' alt="product image" />
      <img src={room} style={{width:'250px',marginLeft:'98px', marginTop:'66px'}} className='img-fluid' alt="product image" />
    </div>
    <div className="product-details">
      <h6 className='brand'>Havels</h6>
      <h5 className="product-title">
        Kids headphones bulk 10 pack multi colred for students
      </h5>
      <ReactStars
        count={5}
        size={24}
        value={3}
        edit={false}
        activeColor="#ffd700"
      />
      <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolres et quas molestias excepturi sint occaecati cupidtate non provident, similique sunt...</p>
      <p className="price">$100.00</p>
    </div>

    <div className="action-bar position-absolute " >
      <div className="d-flex flex-column gap-15">
        <button className='border-0 bg-transparent'><img src={productComp } alt="prodcompare" /></button>
        <button className='border-0 bg-transparent'><img src={imageView} alt="view" /></button>
        <button className='border-0 bg-transparent'><img src={addCart} alt="add-cart" /></button>

      </div>
    </div>
  </Link>
</div>
  

    </>
  );
}

export default BestSelling;
