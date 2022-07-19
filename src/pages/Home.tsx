import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Nav } from "react-bootstrap";
import { Apartment } from "../components/Apartment";
import { FilterModal } from "../components/FilterModal";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import { CustomPagination } from "../components/CustomPagination";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Home = () => {
  let apartments = [
    {
      id: 1,
      location: "Lagos, NG",
      type: "NEW",
      distance: "450 kilometer away",
      icon: [3, 3, 4],
      amount: "₦30,000,000",
    },
    {
      id: 2,
      location: "Abuja, NG",
      type: "SERVICED",
      distance: "40 kilometer away",
      icon: [3, 1, 1],
      amount: "₦4,000,000",
    },
    {
      id: 3,
      location: "Benin, NG",
      type: "SERVICED",
      distance: "50.4 kilometer away",
      icon: [2, 2, 4],
      amount: "₦3,200,000",
    },
    {
      id: 4,
      location: "Delta, NG",
      type: "NEW",
      distance: "32 kilometer away",
      icon: [1, 1, 1],
      amount: "₦9,100,000",
    },
    {
      id: 5,
      location: "Begger, NG",
      type: "NEW",
      distance: "7 kilometer away",
      icon: [1, 1, 2],
      amount: "₦7,450,000",
    },
    {
      id: 6,
      location: "Lagos, NG",
      type: "SERVICED",
      distance: "54 kilometer away",
      icon: [2, 3, 1],
      amount: "₦9,500,000",
    },
    {
      id: 7,
      location: "Asaba, NG",
      type: "NEW",
      distance: "8.4 kilometer away",
      icon: [3, 1, 4],
      amount: "₦21,800,000",
    },
    {
      id: 8,
      location: "Lagos, NG",
      type: "NEW",
      distance: "450 kilometer away",
      icon: [3, 3, 4],
      amount: "₦30,000,000",
    },
    {
      id: 9,
      location: "Abuja, NG",
      type: "SERVICED",
      distance: "40 kilometer away",
      icon: [3, 1, 1],
      amount: "₦4,000,000",
    },
    {
      id: 10,
      location: "Benin, NG",
      type: "SERVICED",
      distance: "50.4 kilometer away",
      icon: [2, 2, 4],
      amount: "₦3,200,000",
    },
  ];

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col md={10} className="table-responsive colnav">
            <Nav className="nav" activeKey="/">
              <Nav.Item>
                <Nav.Link href="/" className="home">
                  House
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-muted">Office space</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Flats and Apartments</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Lands</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Semi Detached Bungalow</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Semi Detached Duplex</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Warehouse</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Mini Flat</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Shop in a Mall</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col
            md={2}
            className="d-flex justify-content-around align-items-baseline"
          >
            <div className="px-4 chevron">
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </div>
            <FilterModal />
          </Col>
        </Row>

        <Row>
          {apartments.map((item) => {
            return (
              <Col md={3}>
                {" "}
                <Apartment key={item.id} apartment={item} />
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <CustomPagination />
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
};
