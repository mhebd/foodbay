import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className='bg-light min-vh-100 d-flex flex-row align-items-center auth-section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='card-group d-block d-md-flex row'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
