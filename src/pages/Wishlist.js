import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';

const Wishlist = () => {
  return (
   <>
    <Meta title={"Wishlist"} />
      <BreadCrumb title="/ Wishlist" />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />

                    <div className="wishlist-card-image">
                        <img src="images/blue.jpg" style={{height:'305px' }} alt="watch" className='img-fluid w-100' />
                        
                    </div>
                    <div className=' py-3 px-3'>
                    <h5 className="title">Honor T1 7.01 GB RAM 8 GB ROM 7 Inch With Wi-FI+3G Tablet</h5>
                    <h6 className="price">$ 100.00</h6>
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />

                    <div className="wishlist-card-image">
                        <img src="images/watch3.jpg" style={{height:'305px' }} alt="watch" className='img-fluid w-100' />
                        
                    </div>
                    <div className=' py-3 px-3'>
                    <h5 className="title">Honor T1 7.01 GB RAM 8 GB ROM 7 Inch With Wi-FI+3G Tablet</h5>
                    <h6 className="price">$ 100.00</h6>
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />

                    <div className="wishlist-card-image">
                        <img src="images/room.jpg"  style={{marginTop:'12px'}} alt="room" className='img-fluid w-100'/>
                        
                    </div>
                    <div className=' py-3 px-3'>
                    <h5 className="title">Honor T1 7.01 GB RAM 8 GB ROM 7 Inch With Wi-FI+3G Tablet</h5>
                    <h6 className="price">$ 100.00</h6>
                    </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />

                    <div className="wishlist-card-image">
                        <img src="images/blue2.jpg" style={{height:'305px' }}  alt="watch" className='img-fluid w-100' />
                        
                    </div>
                    <div className=' py-3 px-3'>
                    <h5 className="title">Honor T1 7.01 GB RAM 8 GB ROM 7 Inch With Wi-FI+3G Tablet</h5>
                    <h6 className="price">$ 100.00</h6>
                    </div>
                    </div>
                </div>
            </div>
        </Container>
      {/* </div> */}
   </>
  );
}

export default Wishlist;
