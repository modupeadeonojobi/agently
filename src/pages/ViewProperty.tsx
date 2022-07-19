import React from "react";
import { Row, Col, Button, Container, Badge } from "react-bootstrap";
import { Header } from "../components/Header";
import { PropertyCarousel } from "../components/PropertyCarousel";
import { PropertyDescription } from "../components/PropertyDescription";

export const ViewProperty = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row className="mt-3">
          <Col md={5} className="mt-2">
            <h4>3 Bedroom Apartment at Ikoyi</h4>
            <Button variant="link" className="mb-2 text-dark">
              Lagos, NG
            </Button>
            <Badge bg="success">New</Badge>
            <PropertyCarousel className="d-block w-100 rounded" />
          </Col>
          <Col md={7}>
            <PropertyDescription />
          </Col>
        </Row>
      </Container>
    </>
  );
};
