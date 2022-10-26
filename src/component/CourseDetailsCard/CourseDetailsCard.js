import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseDetailsCard = ({ course }) => {
    const { category_id, image_url, title, details } = course;

    return (
        <Card className="text-center mb-5">
            <Card.Header>Featured</Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Link to='/home'><Button variant="primary">Details</Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default CourseDetailsCard;