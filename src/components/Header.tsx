import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faStar, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.css'

export const Header = () => {
    return (
        <Container fluid className='my-2 header'>
            <Row>
                <Col>
                    <div className="left d-flex align-items-baseline">
                        <FontAwesomeIcon icon={faStar} />
                        <div className="px-2">
                            <Link to="/" className='agently' >AGENTLY </Link>
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className='d-flex align-items-baseline mx-2 rent justify-content-between'>
                        <div className="d-flex align-items-baseline mx-2 px-2">
                            <div className="text mx-2">Rent</div>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <div className="line"></div>
                        <div className="mx-2 d-flex align-items-baseline">
                            <div className='px-2'>Where do you want to live?</div>
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="right">
                        <Link to='/property-reg' style={{ textDecoration: "none", color: 'black', marginRight: "2rem" }}>Own a property?</Link>
                        <FontAwesomeIcon icon={faUserCircle} size={'2x'} />
                        <FontAwesomeIcon className='px-2' icon={faChevronDown} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
} 