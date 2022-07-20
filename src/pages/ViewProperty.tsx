import React from "react";
import { Row, Col, Button, Container, Badge } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PropertyCarousel } from "../components/PropertyCarousel";
import { PropertyDescription } from "../components/PropertyDescription";
import House from './../assets/img/house.jpg'
import Flat from './../assets/img/mini-flat.jpg'
import Office from './../assets/img/office.jpg'

export const ViewProperty = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row className="mt-3 vh-50 prop-row">
          <Col md={5} className="mt-2">
            <h4>3 Bedroom Apartment at Ikoyi</h4>
            <Button variant="link" className="mb-2 text-dark">
              Lagos, NG
            </Button>
            <Badge bg="success">New</Badge>
            <PropertyCarousel showPrevIcon={true} className="d-block w-100 rounded" firstSlide={House} secondSlide={Office} thirdSlide={Flat} />
          </Col>
          <Col md={7}>
            <PropertyDescription />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};
