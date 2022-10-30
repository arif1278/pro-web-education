import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { SlBadge } from "react-icons/sl";
import { createRef } from "react";
import ReactToPdf from "react-to-pdf";

const ref = createRef();

const Course = () =>
{
  const singleCourse = useLoaderData();
  const { author, details, image_url, price, rating, title, total_view, _id } =
    singleCourse;
  return (
    <>
     
      <div
        ref={ ref }
        className="flex flex-col w-full p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-orange text-gray-100"
      >
        <div className="flex space-x-4  justify-center">
          <img
            alt=""
            src={ author?.img }
            className="object-cover w-12 h-12 rounded-full shadow bg-gray-700"
          />
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-semibold">{ author?.name }</p>
            <span className="text-xs text-gray-400">
              { author?.published_date }
            </span>
          </div>
        </div>
        <div className="">
          <img
            src={ `https://www.pngitem.com/pimgs/m/616-6164272_all-programming-languages-logo-hd-png-download.png`}
            alt="Course Logo"
            className="object-cover w-full mb-4 h-full rounded-xl bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{ title }</h2>
          <p className="text-sm text-gray-400">{ details }</p>
        </div>
        <div className="flex flex-wrap justify-between">
          
          <div className="flex space-x-2 text-sm text-gray-400">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <SlBadge className="text-yellow-400" />
              <span className="font-semibold">{ rating?.badge }</span>
            </button>
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold">{ rating?.number }</span>
            </button>
          </div>
          <div className="flex space-x-2 text-sm text-gray-400">
            <button type="button" className="flex items-center p-1 space-x-1.5">

              <span className="font-semibold">{ price }</span>
            </button>
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <FaRegHeart />
              <span className="font-semibold">{ total_view }</span>
            </button>
          </div>
        </div>
        <Link to="/pay-now">
          <button className="w-full py-3 rounded bg-yellow-700 text-black hover:text-white  font-bold hover:bg-red-800 ">
            Pay Now
          </button>
        </Link>
      </div>
      <ReactToPdf targetRef={ ref } filename={ `${ _id }.pdf` }>
        { ( { toPdf } ) => (
          <button
            className="w-full my-6 py-3 rounded text-black  bg-blue-400 hover:text-white hover:bg-red-800"
            onClick={ toPdf }
          >
           PDF Download
          </button>
        ) }
      </ReactToPdf>
    </>
  );
};

export default Course;