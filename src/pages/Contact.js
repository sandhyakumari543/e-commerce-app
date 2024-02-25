import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { IoHomeOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="/ Contact Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
        {/* <div className="container-xxl"> */}
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7562.309543859916!2d73.71606215!3d18.612107099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ba4cfa232cd7%3A0x76075b351558223f!2sMarunji%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703838838663!5m2!1sen!2sin" width="600"
                height="450"
                className='border-0 w-100'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder='Name' />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control" placeholder='Email' />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control" placeholder='Mobile Number' />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className='w-100 form-control'
                        cols="30"
                        rows="4"
                        placeholder='Comments'
                      >
                      </textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get inn touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <IoHomeOutline className='fs=5' />
                        <address className='mb-0'>Hno-203 , Near Sher Shah Tomb , Rohtas, Bihar</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <LuPhoneCall className='fs=5' />
                        <a href="tel:+91 8798666790">+91 8798666790</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <IoMailOutline className='fs=5' />
                        <a href="mailto: sandhyakushwaha543@gmail.com">sandhyakum609@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <IoIosInformationCircleOutline className='fs=5' />
                        <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      {/* </div> */}
    </>
  );
}

export default Contact;
