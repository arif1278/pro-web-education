import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsCard from '../CourseDetailsCard/CourseDetailsCard';

const CourseDetails = () => {

    const [course, setCourse] = useState({})
    const courses = useLoaderData();
    const handleShowDetails = (id) => {
        const course = courses.find(cour => id === cour.id);
        setCourse(course);
    }

    return (
        <div>
            <h4>This is course details page. </h4>




        </div>
    );
};

export default CourseDetails;