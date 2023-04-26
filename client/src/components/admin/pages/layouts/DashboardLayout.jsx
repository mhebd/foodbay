import React, { useEffect } from "react";
import Sidebar from "../../common/Sidebar";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import "../../assets/css/style.css";
import "../../assets/css/vendors/simplebar.css";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "/src/components/admin/assets/vendors/@coreui/coreui/js/coreui.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src =
      "/src/components/admin/assets/vendors/simplebar/js/simplebar.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Sidebar />
      <div className='wrapper d-flex flex-column min-vh-100 bg-light'>
        <Header />
        <div className='body flex-grow-1 px-3'>
          <div className='container-lg'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DashboardLayout;
