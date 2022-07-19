import React from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from 'react-bootstrap'

import House from './../assets/img/house.jpg';
import Apartment from './../assets/img/apartment.jpg';
import Land from './../assets/img/land.jpg';
import WareHouse from './../assets/img/warehouse.jpg';
import MiniFlat from './../assets/img/mini-flat.jpg';
import Office from './../assets/img/office.jpg';

import './PropertyType.css'

export const PropertyType = () => { 
  return (
    <>
      <div className='property-type'>
        <Form>
        <Row>
          <Form.Group controlId="propertyType">
              <h3>What type of Property?</h3>
              <Col md={4}>
                
              </Col>
              <Col md={4}>
                
              </Col>
              <Col md={4}>
                
              </Col>
              <ListGroup horizontal>
              <Col md={4}>
              <ListGroup.Item className='me-4 first-item'>
                <span className='text-name'>House</span>
                <Form.Check
                inline
                name="propertyType"
                  type="radio"
                  hidden
                id="this" />
                <img src={House}  className='list-img' alt='House'/>
                  </ListGroup.Item>
                </Col>
                <Col md={4}>
              <ListGroup.Item className='me-4'>
                <span className='text-name'>Apartment</span>
                <Form.Check
                inline
                name="propertyType"
                  type="radio"
                  hidden
                id="this" />
                <img src={Apartment}  className='list-img' alt='Apartment'/>
                  </ListGroup.Item>
                </Col>
                <Col md={4}>
              <ListGroup.Item className='me-4'>
                <span className='text-name'>Land</span>
                <Form.Check
                inline
                name="propertyType"
                  type="radio"
                  hidden
                id="this" />
                <img src={Land}  className='list-img' alt='Land'/>
                  </ListGroup.Item>
                  </Col>
            </ListGroup>
    
             <br />

              <ListGroup horizontal>
              <Col md={4}>
              <ListGroup.Item className='me-4'>
                <span className='text-name'>WareHouse</span>
                <Form.Check
                inline
                name="propertyType"
                  type="radio"
                  hidden
                id="this" />
                <img src={WareHouse}  className='list-img' alt='Warehouse'/>
                  </ListGroup.Item>
                </Col>
                <Col md={4}>
              <ListGroup.Item className='me-4'>
                <span className='text-name'>Mini Flat</span>
                <Form.Check
                inline
                name="propertyType"
                  type="radio"
                  hidden
                id="this" />
                <img src={MiniFlat}  className='list-img' alt='Mini-Flat'/>
                  </ListGroup.Item>
                </Col>
                <Col md={4}>
              <ListGroup.Item className='me-2'>
                <span className='text-name'>Office Space</span>
                <Form.Check
                  inline
                  name="propertyType"
                  type="radio"
                  hidden
                  id="this" />
                <img src={Office}  className='list-img' alt='Office space'/>
                  </ListGroup.Item>
                </Col>
            </ListGroup>
            </Form.Group>
          </Row>
          <hr />
              <br />
          <Form.Group controlId="propertyList">
            <h3>List Property as?</h3>
          </Form.Group>
        </Form> 
        <ListGroup horizontal>
        <Col md={4}>
          <ListGroup.Item className='me-2 first-item'>
            <h5>Rental</h5>
            <span>A rented place within a multi-unit
              residential building or complex</span>

            <Form.Check
              inline
              name="propertyType"
              type="checkbox"
              hidden
              id="this" />
            </ListGroup.Item>
          </Col>
          <Col md={4}>
          <ListGroup.Item className='me-2'>
            <h5>Purchase</h5>
            <span>A rented place within a multi-unit
              residential building or complex</span>
            <Form.Check
              inline
              name="propertyType"
              type="checkbox"
              hidden
              id="this" />
            </ListGroup.Item>
          </Col>
          <Col md={4}>
          <ListGroup.Item>
            <h5>Lease</h5>
            <span>A rented place within a multi-unit
              residential building or complex</span>
            <Form.Check
              inline
              name="propertyType"
              type="checkbox"
              hidden
            id="this" />
            </ListGroup.Item>
            </Col>
        </ListGroup>
      </div>
    </>
  )
}