import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courses = useLoaderData();
    console.log(courses);

    return (
        <div>
            <h4>{courses.title}</h4>




        </div>
    );
};

export default CourseDetails;