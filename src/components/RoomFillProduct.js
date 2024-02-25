import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import watch from '../pages/images/watch.jpg'
import watch2 from '../pages/images/watch3.jpg'
import wish from '../pages/images/wish.svg'
import productComp from '../pages/images/prodcompare.svg'
import imageView from '../pages/images/view.svg'
import addCart from '../pages/images/add-cart.svg'
import blue from '../pages/images/blue.jpg'
import blue2 from '../pages/images/blue2.jpg'
import famous from '../pages/images/famous-4.png'
import room from '../pages/images/room.jpg'

const RoomFillProduct = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>

                <Link to=
                    {`${location.pathname == "/"
                        ? "singleRoomproduct/:id"
                        : location.pathname == "singleRoomproduct/:id"
                            ? "singleRoomproduct/id"
                            : ":id"
                        }`}
                    className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'><img src={wish} alt="wishlist" /></button>
                    </div>
                    <div className="product-image">
                        <img src={famous}  className='famous-image img-fluid' alt="product image" />
                        <img src={room}  className='famous-image1 img-fluid' alt="product image" />
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
                            <button className='border-0 bg-transparent'><img src={productComp} alt="prodcompare" /></button>
                            <button className='border-0 bg-transparent'><img src={imageView} alt="view" /></button>
                            <button className='border-0 bg-transparent'><img src={addCart} alt="add-cart" /></button>

                        </div>
                    </div>
                </Link>
            </div>

            <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>

                <Link
                    to={`${location.pathname == "/"
                        ? "product/:id"
                        : location.pathname == "product/:id"
                            ? "product/id"
                            : ":id"
                        }`}

                    className="product-card position-relative"
                >
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'><img src={wish} alt="wishlist" /></button>
                    </div>
                    <div className="product-image">
                        <img src={famous}  className='famous-image img-fluid' alt="product image" />
                        <img src={room}  className='famous-image1 img-fluid' alt="product image" />
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
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolres et quas molestias excepturi sint occaecati cupidtate non provident, similique sunt...</p>
                        <p className="price">$100.00</p>
                    </div>

                    <div className="action-bar position-absolute " >
                        <div className="d-flex flex-column gap-15">
                            <button className='border-0 bg-transparent'><img src={productComp} alt="prodcompare" /></button>
                            <button className='border-0 bg-transparent'><img src={imageView} alt="view" /></button>
                            <button className='border-0 bg-transparent'><img src={addCart} alt="add-cart" /></button>

                        </div>
                    </div>
                </Link>
            </div >

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
                    <div className="product-image famousImage">
                        <img src={famous}  className='famous-image img-fluid' alt="product image" />
                        <img src={room}  className=' img-fluid' alt="product image" />
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
                            <button className='border-0 bg-transparent'><img src={productComp} alt="prodcompare" /></button>
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
                        <img src={famous}  className='famous-image img-fluid' alt="product image" />
                        <img src={room}  className='famous-image1 img-fluid' alt="product image" />
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
                            <button className='border-0 bg-transparent'><img src={productComp} alt="prodcompare" /></button>
                            <button className='border-0 bg-transparent'><img src={imageView} alt="view" /></button>
                            <button className='border-0 bg-transparent'><img src={addCart} alt="add-cart" /></button>

                        </div>
                    </div>
                </Link>
            </div>
        </>

    );
}

export default RoomFillProduct;
