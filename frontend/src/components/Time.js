import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Time = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 60 * 1000)
        return () => {
            clearInterval(timer)
        }
    })

    const day = date.toLocaleDateString('en', { weekday: 'long' })
    const time = date.toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric'})

    return (
        <Container className='footer-text'>
            <Row>
                <Col className='text-right'>
                    <h3 className='py-0'>{day}</h3>
                </Col>
            </Row>
            <Row>
                <Col className='text-right'>
                    <h4 className='py-0'>{time}</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default Time
