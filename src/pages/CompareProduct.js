import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import Container from '../components/Container';

const CompareProduct = () => {
    return (
        <>
            <Meta title={"Comapre Products"} />
            <BreadCrumb title="/ Comapre Products" />
            <Container class1="comapre-product-wrapper home-wrapper-2 py-5">
                {/* <div className="container-xxl"> */}
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative" >
                                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="product-card-image">
                                    <img src="images/room.jpg" alt="watch" className='compareImage' />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className='title'>Honor T1 7.01 GB RAM 8 GB ROM 7 Inch With Wi-FI+3G Tablet</h5>
                                    <h6 className="price mb-3 mt-3">$100.00</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color:</h5>
                                           <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="compare-product-card position-relative" >
                                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className='title'>Honor T1 7.01 GB RAM 8 GB ROM 7 Inch With Wi-FI+3G Tablet</h5>
                                    <h6 className="price mb-3 mt-3">$100.00</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color:</h5>
                                           <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="col-3">
                            <div className="compare-product-card position-relative" >
                                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="product-card-image">
                                    <img src="images/watch3.jpg" alt="watch" style={{width:'200px', marginTop:'36px', height:'230px',marginLeft:'24px'}} />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className='title'>Honor T1 7.01 GB RAM 8 GB ROM 7 Inch With Wi-FI+3G Tablet</h5>
                                    <h6 className="price mb-3 mt-3">$100.00</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color:</h5>
                                           <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="compare-product-card position-relative" >
                                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="product-card-image">
                                    <img src="images/blue.jpg" alt="watch" style={{width:'230px', marginTop:'90px', marginLeft:'24px'}}/>
                                </div>
                                <div className="compare-product-details">
                                    <h5 className='title'>Honor T1 7.01 GB RAM 8 GB ROM 7 Inch With Wi-FI+3G Tablet</h5>
                                    <h6 className="price mb-3 mt-3">$100.00</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color:</h5>
                                           <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>

                                        </div>
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

export default CompareProduct;
