import React from 'react'
import {Link} from "react-router-dom"
import { BsLinkedin,BsGithub,BsYoutube,BsInstagram } from 'react-icons/bs'
import newsletter from "../pages/images/newsletter.png"

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="footer-top-date d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="input-group ">
                <input 
                  type="text"
                  className="form-control py-1" 
                  placeholder="Your Email Address " 
                  aria-label="Your Email Address "
                  aria-describedby="basic-addon2" 
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>Hno : 277 Near Vill chopal, <br /> Sonipat, Bihar <br />PinCode: 821115</address>
                <a href="tel:+91 75673998473" className='ml-3 d-block mb-1 text-white'>+91 75673998473</a>
                <a href="mailto:" className='ml-3 d-block mb-3 text-white'>sandhyakum609@gmail.com</a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className='text-white' href="www.linkedin.com/in/sandhya-kumari-17639b224">
                    <BsLinkedin className='fs-4'/>
                  </a>
                  <a className='text-white' href="#">
                    <BsInstagram className='fs-4'/>
                  </a>
                  <a className='text-white' href="https://github.com/sandhyakumari543">
                    <BsGithub className='fs-4'/>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to='/privacy-policy' className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link to='/refund-policy' className="text-white py-2 mb-1">Refund Policy</Link>
                <Link to='/shipping-policy' className="text-white py-2 mb-1">Shiping Policy</Link>
                <Link to='/term-condition' className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1" to='/blogs'>Blogs</Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className="text-white py-2 mb-1" to='/about'>About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1" to='/contact'>Contact Us</Link>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1" to='search/:query'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()}; Powered by Developers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
