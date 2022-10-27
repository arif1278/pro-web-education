import React from 'react';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const CourseDetailsCard = ({ course, handleShowDetails }) => {
    const { category_id, image_url, title, details } = course;

    return (
        <div onClick={() => {
            handleShowDetails(course.id)
        }}>
            <Row className=" g-4">

                <Col className='lg-2 g-4' >
                    <Card>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                        <Button>Show more details</Button>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default CourseDetailsCard;