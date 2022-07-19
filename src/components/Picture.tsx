import React from 'react'
import { Col, Image } from 'react-bootstrap'
import House from './../assets/img/house.jpg'
import Apartment from './../assets/img/apartment.jpg'
import Flat from './../assets/img/mini-flat.jpg'
import Office from './../assets/img/office.jpg'
import WareHouse from './../assets/img/warehouse.jpg'

type PicsProp = {
  id: number
}

export const Picture = ({ id }: PicsProp) => {
  let photo = '';
  switch (id) {
    case 1:
      photo = House;
      break;
    case 2:
      photo = Apartment;
      break;
    case 3:
      photo = House;
      break;
    case 4:
      photo = Flat;
      break;
    case 5:
      photo = Office;
      break;
    case 6:
      photo = WareHouse;
      break;
    case 7:
      photo = Office;
      break;
    case 8:
      photo = Flat;
      break;
    case 9:
      photo = Apartment;
      break;
    case 10:
      photo = Office;
      break;
    default:
      photo = House;
  }
  return (
    <Col>
      <div className="image">
        <Image src={photo} style={{ width: '100%', height: '230px', borderRadius: '0.8rem' }} />
      </div>
    </Col>
  )
}