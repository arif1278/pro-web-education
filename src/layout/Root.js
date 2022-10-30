import React from "react";
import "./Root.css";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import SideNav from "../sidenav/SideNav";
import Footer from "../shared/Footer/Footer";

const Root = () => {
  return (
    <body className="bg-gray-700">
     <Header></Header>
      <main className="main-container">
        <div className="main-element">
          <Outlet></Outlet>
        </div>
        <div className="sidenav lg:block hidden">
          <SideNav></SideNav>
        </div>
      </main>
      <Footer></Footer>
    </body>
  );
};

export default Root;