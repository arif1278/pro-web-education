import React, { useEffect } from 'react';
import { useState } from 'react';


const RightSide = () => {
    const [course, setCourse] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])

    return (
        <div>
            <h2>Course details home: {course.length}</h2>



        </div>
    );
};

export default RightSide;