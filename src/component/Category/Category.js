import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const course = useLoaderData();
    return (
        <div>
            <h3>This is category: {course.length}</h3>
        </div>
    );
};

export default Category;