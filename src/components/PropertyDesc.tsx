import React from "react";
import Form from "react-bootstrap/Form";
import { Row, Col } from 'react-bootstrap';

import "./PropertyDesc.css";

export const PropertyDesc = () => {
  return (
    <>
      <div className="property-desc">
        <Form>
          <Form.Group controlId="propertyOwner" className="mb-4">
          <h4 className="text-label">Property Owner</h4>
          <Form.Control type="text"
            placeholder="IJT Realtor"
            autoFocus />
          </Form.Group>

          <hr />

          <Form.Group controlId="propertyDesc" className="mb-4 mt-3">
          <h3 className="text-label">Description</h3>
            <Form.Control
              as="textarea"
              className="description-input"
              placeholder="What do you have in mind?"
              style={{ height: "100px" }}
            />
          </Form.Group>

          <hr />

          <Form.Text className="text-label">Validation period</Form.Text>
          <Row className="first-row">
            <Col id='col'>
              <Form.Control type="text" placeholder="6/12/2022" />
              <Form.Label className="label">From</Form.Label>
            </Col>
            <Col id='col'>
              <Form.Control type="text" placeholder="23/1/2023" />
              <Form.Label className="label">To</Form.Label>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};
