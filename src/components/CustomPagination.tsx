import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import './CustomPagination.css'

export const CustomPagination = () => {
    return (
        <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item >{9}</Pagination.Item>
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Next />
        </Pagination>
    )
}