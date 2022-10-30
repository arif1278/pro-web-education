import React from "react";
import { Link } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const About = () => {
  return (
    <>
      <Header />
      <section className="bg-orange-300 text-gray-900">
        <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
          
          <div className="grid border border-slate-800 w-full grid-cols-2 lg:grid-cols-3">
            <div className="">
              <Link
                to="/support"
                className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                Building
              </Link>
              <Link
                to="/support"
                className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                Support
              </Link>
              <Link
                to="/support"
                className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                Account
              </Link>
            </div>
            <div className="">
              <Link
                to="/support"
                className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                Features
              </Link>
              <Link
                to="/support"
                className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                Profile
              </Link>
              <Link
                to="/support"
                className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                My Course
              </Link>
            </div>
            <div className="">
              <Link
                to="/support"
                className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
               trade
              </Link>
              <Link
                to="/support"
                className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                developers
              </Link>
              <Link
                to="/support"
                className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;