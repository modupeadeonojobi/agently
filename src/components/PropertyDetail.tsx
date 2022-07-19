import React from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./PropertyDetail.css";

export const PropertyDetails = () => {
  return (
    <>
      <div className="property-details">
        <Form>
          <Form.Group controlId="propertyAddress">
            <h3>Property Address</h3>
            <Form.Control type="text" autoFocus placeholder="Enter an address here" className="address-input" />
            <FontAwesomeIcon icon={faLocationPin} className="icon-label" />
          </Form.Group>

          <Form.Group>
            <Form.Text className="second-title">Rooms</Form.Text>
            <Row>
              <Col>
                <Form.Select>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </Form.Select>
                <Form.Label className="bathroom-label">Bathroom</Form.Label>
              </Col>
              <Col>
                <Form.Select>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </Form.Select>
                <Form.Label className="bedroom-label">Bedroom</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </Form.Select>
                <Form.Label className="seating-label">Seating room</Form.Label>
              </Col>
              <Col>
                <Form.Select>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </Form.Select>
                <Form.Label className="kitchen-label">Kitchen</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </Form.Select>
                <Form.Label className="toilet-label">Toilet</Form.Label>
              </Col>
              <Col></Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}; 
