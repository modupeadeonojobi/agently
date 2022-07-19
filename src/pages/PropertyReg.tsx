import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import { PropertyCarousel } from '../components/PropertyCarousel';
import { PropertyType } from '../components/PropertyType';
import { PropertyDetails } from '../components/PropertyDetail';
import { PropertyDesc } from '../components/PropertyDesc';
import { PropertyImage } from '../components/PropertyImage';


const PropertyReg = () => { 
  const [step, setStep] = useState(1);

  return (
    <>
      <Row>
        <Col md={5}>
          <PropertyCarousel className='img-carousel d-block w-100' />
        </Col>
        <Col md={7}>
          <div className='d-flex justify-content-end mt-3 mx-5'>
            <span></span>
            <Link to="/" className='text-decoration-none'>X</Link>
          </div>
          {step === 1 && <PropertyType />}
          {step === 2 && <PropertyDetails />}
          {step === 3 && <PropertyDesc />}
          {step === 4 && <PropertyImage />}
          <div className='d-flex justify-content-between px-3'>
            <button className='btn text-decoration-underline' disabled={step === 1} onClick={() => setStep(step - 1)}>Back</button>

            <button className='btn btn-dark mx-4' hidden={step === 4} onClick={() => setStep(step + 1)}>Next</button>
            {step === 4 &&
              <Link to='/view-property'>
                <button className='btn btn-dark mx-4'>Finish</button>
              </Link>}
          </div>
        </Col>
      </Row>
    </>
  );
}

export default PropertyReg;
