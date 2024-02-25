import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';

const TermCondition  = () => {
  return (
    <>
      <Meta title={"Term & Conditions"} />
    <BreadCrumb title="/ Term & Conditions" />
    <Container class1="policy-wrapper py-5 home-wrapper-2">
      {/* <div className="container-xxl"> */}
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      {/* </div> */}
    </Container>
    </>
  );
}

export default TermCondition ;
