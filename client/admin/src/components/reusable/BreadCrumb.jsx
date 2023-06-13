import React from "react";
import { Link, NavLink } from "react-router-dom";

function BreadCrumb({ children }) {
  return (
    <div className='breadcrumb-wrapper'>
      <div className='container'>
        <div className='breadcrumb-menu'>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to={"/"}>Home</Link>
              </li>
              {children}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
