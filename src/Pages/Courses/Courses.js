import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../Shared/LeftSideNav';
import RightSide from '../Shared/RightSide';


const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg-3>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg-9>
                        <RightSide></RightSide>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;