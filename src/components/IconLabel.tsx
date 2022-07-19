import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './IconLable.css'
import Bed from '../assets/icon/bed.png'
import Bathtub from '../assets/icon/bathtub.png'
import Toilet from '../assets/icon/toilet.png'


type IconProps = {
    list: number[]
}
export const IconLabel = (props: IconProps) => {
    return (
        <Row>
            <Col className='d-flex justify-content-left'>
                <div className='bg-gray'>
                    <img src={Bed} alt="bedroom-icon" />&nbsp;{props.list[0]}
                </div>
                <div className='bg-gray'>
                    <img src={Bathtub} alt="bedroom-icon" />&nbsp;{props.list[1]}
                </div>
                <div className='bg-gray'>
                    <img src={Toilet} alt="bedroom-icon" />&nbsp;{props.list[2]}
                </div>
            </Col>
        </Row>
    )
}