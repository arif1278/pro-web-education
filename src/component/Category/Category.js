import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsCard from '../CourseDetails/CourseDetails';

const Category = () => {
    const categoryCourse = useLoaderData();
    return (
        <div>
            <h3>This is category: </h3>


            {
                categoryCourse.map(course => <CourseDetailsCard
                    key={course.category_id}
                    course={course}
                >

                </CourseDetailsCard>)
            }


        </div>
    );
};

export default Category;