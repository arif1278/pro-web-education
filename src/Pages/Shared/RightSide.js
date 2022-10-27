import React, { useEffect } from 'react';
import { useState } from 'react';

import CourseDetailsCard from '../../component/CourseDetailsCard/CourseDetailsCard';


const RightSide = () => {

    const [course, setCourse] = useState([]);


    useEffect(() => {
        fetch('https://growhand-server.vercel.app/course')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])

    return (
        <div>
            <h2>Course details home: {course.length}</h2>


            {
                course.map(course => <CourseDetailsCard

                    key={course.category_id}
                    course={course}
                >


                </CourseDetailsCard>)
            }
        </div>
    );
};

export default RightSide;