import React, { useState } from 'react';
import { Form, Modal, Button, Row, Col } from 'react-bootstrap';
import './FilterModal.css'
import Filter from '../assets/icon/filter-filled-tool-symbol.png'

export const FilterModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='d-flex px-2 align-items-baseline' variant='outline-dark' onClick={handleShow}>
                <img src={Filter} alt='bedroom-icon' />
                <div>Filters</div>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='border-bottom'>
                    <Modal.Title className='h6'>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                            <Form.Text>Price Range</Form.Text>
                            <Row className='first-row'>
                                <Col>
                                    <Form.Control
                                        type='text'
                                        placeholder='₦0'
                                        autoFocus
                                    />
                                    <Form.Label>min price</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control
                                        type='text'
                                        placeholder='₦0'
                                    />
                                    <Form.Label id='right-label'>max price</Form.Label>
                                </Col>
                            </Row>

                        </Form.Group>
                        <Form.Group>
                            <Form.Text className='second-title'>Rooms</Form.Text>
                            <Row>
                                <Col>
                                    <Form.Select>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </Form.Select>
                                    <Form.Label id='bathroom-label'>Bathroom</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Select>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </Form.Select>
                                    <Form.Label id='bedroom-label'>Bedroom</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Select>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </Form.Select>
                                    <Form.Label id='seating-label'>Seating room</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Select>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </Form.Select>
                                    <Form.Label id='kitchen-label'>Kitchen</Form.Label>
                                </Col>
                            </Row>
                            <Row className='first-row'>
                                <Col>
                                    <Form.Select>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </Form.Select>
                                    <Form.Label id='toilet-label'>Toilet</Form.Label>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className='second-title mt-3'>Condition</Form.Text>
                            <Row>
                                <Col md={10} >
                                    <Form.Text className='cond-title'>New</Form.Text>
                                    <Form.Text className='cond-desc'>Just built, in mint condition</Form.Text>
                                    <Form.Text className='cond-link'>Learn more</Form.Text>
                                </Col>
                                <Col md={2}>
                                    <Form.Check
                                        type='switch'
                                        id='custom-switch'
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col md={10}>
                                    <Form.Text className='cond-title'>Serviced</Form.Text>
                                    <Form.Text className='cond-desc'>Used, its in a perfect condition</Form.Text>
                                    <Form.Text className='cond-link'>Learn more</Form.Text>
                                </Col>
                                <Col md={2}>
                                    <Form.Check
                                        type='switch'
                                        id='custom-switch'
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Clear all
                    </Button>
                    <Button variant='dark' onClick={handleClose}>
                        Show result
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}