import React from 'react';
import { Tab, Tabs, Row, Col, Button } from 'react-bootstrap';
import './PropertyType.css'
import './PropertyDescription.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import Bed from '../assets/icon/bed.png'
import Bathroom from '../assets/icon/bathtub.png'
import Sofa from '../assets/icon/seater-sofa.png'
import Kitchen from '../assets/icon/kitchen.png'
import Toilet from '../assets/icon/toilet.png'
import Share from '../assets/icon/share.png'


export const PropertyDescription = () => {
  return (
    <>
      <div className='property-type'>
        <Tabs
          defaultActiveKey="description"
          id="fill-tab-example"
          className="mb-4"
        >
          <Tab eventKey="description" title="Description">
            <Tab.Content>
              <h4 className='border-bottom pb-4'>Owned by: <a href="#" className='text-dark mx-2' >IJT Realtor</a></h4>
              <Tab.Container>
                <Row className='mt-4 mb-4'>
                  <Col>
                    <img src={Bed} alt="bedroom-icon" />
                    <span className='mx-2'>Bedroom (3)</span>
                  </Col>
                  <Col>
                    <img src={Bathroom} alt="bathroom-icon" />
                    <span className='mx-2'>Bathroom (3)</span>
                  </Col>
                  <Col>
                    <img src={Sofa} alt="bathroom-icon" />
                    <span className='mx-2'>Seating room (1)</span>
                  </Col>
                </Row>
                <Row className='border-bottom pb-4'>
                  <Col>
                    <img src={Kitchen} alt="kitchen-icon" />
                    <span className='mx-2'>kitchen (1)</span>
                  </Col>
                  <Col>
                    <img src={Toilet} alt="toilet-icon" />
                    <span className='mx-2'>Toilet (3)</span>
                  </Col>
                  <Col></Col>
                </Row>
              </Tab.Container>
              <Tab.Container>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                  nihil iste! Ullam, assumenda tenetur saepe ut deleniti voluptate libero,
                  corrupti veritatis provident accusamus inventore neque perferendis iure
                  reprehenderit expedita impedit.
                  <p className='text-truncate'>...</p>
                  <a href="#" className='d-inline-block text-dark'>Show more</a> {' '}
                  <FontAwesomeIcon icon={faChevronRight} />
                </p>
                <div className=' d-flex justify-content-center'>
                  <Button variant="dark">
                    Buy now: ₦30,000,000
                  </Button>
                  <Button variant="outline-dark" className='mx-2' >
                    <FontAwesomeIcon icon={faStar} />
                  </Button>
                  <Button variant="outline-dark">
                    <img src={Share} alt="kitchen-icon" />
                  </Button>
                </div>
              </Tab.Container>
            </Tab.Content>
          </Tab>
          <Tab eventKey="map-view" title="Map View">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9601701370448!2d7.441871814149827!3d9.067393190884621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b298feacf6b%3A0xb1af47d9ec9fd445!2sGreen%20Minds%20Hotel!5e0!3m2!1sen!2sng!4v1658300736109!5m2!1sen!2sng" width="600" height="450" style={{border:0}} loading="lazy" ></iframe>
          </Tab>
        </Tabs>
      </div>
    </>
  )
}