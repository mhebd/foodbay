import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Outlet } from "react-router-dom";
import "../../assets/css/style.css";

function BaseLayouts() {
  return (
    <div className='container-wrapper'>
      <div className='container-fluid'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default BaseLayouts;
