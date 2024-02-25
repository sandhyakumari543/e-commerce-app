import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"
import { useCart } from './CartContext';

const Header = () => {
  const { cart } = useCart();

  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchInput}`);
  };

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>HotLine: <a className='text-white' href="tel:+91 8709869296">+91 75673998473</a></p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row  align-items-center">
            <div className="col-2 upper">
              <h2>
                <Link className='text-white'>TechTrove</Link>
              </h2>
            </div>
            <div className="col-5 upper2">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control py-2"
                    placeholder="Search Product Here..."
                    aria-label="Search Product Here..."
                    aria-describedby="basic-addon2"
                    value={searchInput}
                    onChange={handleInputChange}
                  />
                  <button type="submit" className="input-group-text p-3" id="basic-addon2">
                    <BsSearch className='fs-6' />
                  </button>
                </div>
              </form>
            </div>
            <div className="col-5 upper2">
              <div className="header-upper-link d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compare-product" className='d-flex align-items-center gap-10 text-white'><img src='/images/compare.svg' alt='compare' className='img1' />
                    <p className='mb-0'>Compare <br />Products</p>
                  </Link>
                </div>

                <div>
                  <Link to="/wishlist" className='d-flex align-items-center gap-10 text-white'><img src='/images/wishlist.svg' alt='wishlist' className='img1' />
                    <p className='mb-0'> Favourite <br /> Wishlist</p>
                  </Link>
                </div>

                <div>
                  <Link to="/login" className='d-flex align-items-center gap-10 text-white'><img src='/images/user.svg' alt='user' className='img1' />
                    <p className='mb-0'>Log in <br />My Account</p>
                  </Link>
                </div>

                <div>
                  {/* <Link to="/cart" className='d-flex align-items-center gap-10 text-white'><img src='/images/cart.svg' alt='cart' className='img1'/>
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link> */}
 <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
      <img src='/images/cart.svg' alt='cart' className='img1' />
      <div className="d-flex flex-column gap-10">
        <span className="badge bg-white text-dark">{cart.length}</span>
        <p className='mb-0'>$ 500</p>
      </div>
    </Link>
               
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">

                <div>
                  <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="/images/menu.svg" alt="menu" />
                      <span className='m2-5 d-inline-block'>Shop Categories</span>
                    </a>

                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                    </ul>
                  </div>

                </div>

                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
