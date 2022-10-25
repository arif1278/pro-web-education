import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg-3>
                        <h3>Left Side</h3>
                    </Col>
                    <Col lg-9>
                        <h3>Right Side</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;