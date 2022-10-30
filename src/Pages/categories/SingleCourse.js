import React from "react";
import { Link } from "react-router-dom";
import {  FaRegHeart } from "react-icons/fa";

const SingleCourse = ({ course }) => {
  const { _id, title, price, total_view, image_url } = course;
  return (
    <>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-black text-gray-100">
        <div>
          <img
            src={image_url}
            alt="Course Logo"
            className="object-cover w-full mb-4 h-60 sm:h-96 bg-black"
          />
          <h2 className="mb-1 text-xl font-semibold">{title}</h2>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            
           
          </div>
          <div className="flex space-x-2 text-sm text-gray-400">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              
              <span className="font-semibold">{price}</span>
            </button>
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <FaRegHeart />
              <span className="font-semibold">{total_view}</span>
            </button>
          </div>
        </div>
        <Link to={`/course/${_id}`}>
          <button className="w-full  text-center py-3 bg-yellow-700 text-black hover:text-white  font-bold hover:bg-red-800 rounded">
            Get Premium Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default SingleCourse;