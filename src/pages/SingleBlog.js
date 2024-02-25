import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom'
import { IoArrowBackSharp } from "react-icons/io5";
import Container from '../components/Container';
import blog from '../pages/images/blog-1.jpg'

const SingleBlog = () => {
  return (
    <>
       <Meta title={"Dynamic Blogs Name"} />
      <BreadCrumb title="/ Dynamic Blogs Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="single-blog-card">
                        <Link to='/blogs' className='d-flex align-items-center gap-10'><IoArrowBackSharp className='fs-4'/>Go back to Blogs</Link>
                        <h3 className="title">
                            A beautiful Sunday Morning Renaissance
                        </h3>
                        <img src={blog} alt="blog" className='img-fluid w-100 my-4' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam neque voluptate eum odit laboriosam corrupti natus amet aliquam laudantium. Consequuntur inventore error qui tempora dolores, adipisci dignissimos architecto temporibus reprehenderit veniam minima eaque?</p>
                    </div>
                     </div>
            </div>
        </Container>
    </>
  );
}

export default SingleBlog;
