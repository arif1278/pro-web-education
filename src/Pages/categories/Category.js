import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { id, name } = category;
  return (
    <Link to={`/category/${id}`}>
      <div className="my-4 bg-gray-700 text-white rounded py-2 px-3"> {name} </div>
    </Link>
  );
};

export default Category;
