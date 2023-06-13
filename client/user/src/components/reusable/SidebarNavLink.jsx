import React from "react";
import { NavLink } from "react-router-dom";

function SidebarNavLink({ to, icon, title }) {
  return (
    <li className='nav-item'>
      <NavLink activeclass='active' to={to} className='nav-link'>
        <svg className='nav-icon'>
          <i className={`far fa-${icon}`}></i>
        </svg>{" "}
        {title}
      </NavLink>
    </li>
  );
}

export default SidebarNavLink;
