import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Time from './Time'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Time />
                <Row>
                    <Col className='text-center py-3 footer-text'>
                        <p>Copyright &copy; LearnZilla</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer