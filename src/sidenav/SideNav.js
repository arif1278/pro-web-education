import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Category from "../pages/categories/Category";
import Categories from '../pages/categories/Categories';

const SideNav = () =>
{
  const [ categories, setCategories ] = useState( [] );
  useEffect( () =>
  {
    fetch( " https://growhand-server-6i6az7mog-arif1278.vercel.app/course-category" )
      .then( ( res ) => res.json() )
      .then( ( data ) => setCategories( data ) );
  }, [] );

  return (
    <div>
      <h1 className="my-6 text-4xl text-center ">All Courses Categories...</h1>
      <div className="bg-orange-300 p-4">
        { categories.map( ( category ) => (
          <Category
          key={ category?.id } category={ category }
          >

          </Category>
        ) ) }
      </div>
    </div>
  );
};

export default SideNav;