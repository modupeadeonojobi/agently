import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col } from 'react-bootstrap'

export const Footer = () => {
    return (
        <Col>
            <div className="d-flex justify-content-between m-4">
                <div>
                    &copy; 2022 Agently, Inc . Privacy . Terms . Sitemap . Destinations
                </div>
                <div className="d-flex align-items-baseline">
                    <div>
                        <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <div className='mx-2'>English(US)</div>
                </div>
            </div>
        </Col>
    )
}