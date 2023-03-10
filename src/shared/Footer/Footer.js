import React from "react";
import { Link } from "react-router-dom";

const Footer = () =>
{
  return (
    <footer className="bg-black text-gray-50 grid  justify-center">


      <div className=" text-center mb-4 pt-4">
        <h1 className="font-extrabold">growhand bd</h1><h3>founder:  Arif Hossain </h3>
        <h4>Email: <span className="underline text-blue-600 hover:text-red-400">ArifHossain199257@gmail.com</span></h4>
      <h5>Arif @Copyright || 2022</h5></div>
      <div className="flex justify-center space-x-4">



        <Link
          rel="noopener noreferrer"
          to="/home"
          title="Facebook"
          className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 32 32"
            className="w-4 h-4"
          >
            <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
          </svg>
        </Link>
        <Link
          rel="noopener noreferrer"
          to="/home"
          title="Twitter"
          className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 32 32"
            className="w-4 h-4"
          >
            <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
          </svg>
        </Link>

      </div>


    </footer>
  );
};

export default Footer;