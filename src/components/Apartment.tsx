import React from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import { IconLabel } from './IconLabel'
import { Picture } from './Picture';
import { Link } from 'react-router-dom';

type PropertyProps = {
    apartment: {
        id: number,
        location: string,
        type: string,
        distance: string,
        icon: number[],
        amount: string
    }
}
export const Apartment = ({ apartment: { id, location, type, distance, icon, amount } }: PropertyProps) => {
    return (
        <Link to='/property-view' style={{ textDecoration: 'none', color: 'black' }}>
            <Col className='my-2' style={{ cursor: 'pointer' }}>
                <Row>
                    <Picture id={id} />
                </Row>
                <Row className='pt-2'>
                    <Col className='d-flex justify-content-between'>
                        <div className='h6 mb-0'>{location}</div>
                        <div><Badge bg={type === 'NEW' ? 'success' : 'primary'} className='d-flex justify-content-end'>{type}</Badge></div>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-muted'>{distance} </Col>
                </Row>
                <Row>
                    <Col className='my-2'>
                        <IconLabel list={icon} />
                    </Col>
                </Row>
                <Row>
                    <Col className='h6 mb-2'>{amount}</Col>
                </Row>
            </Col>
        </Link>
    )
}