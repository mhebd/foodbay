import React from "react";
import { Link, NavLink } from "react-router-dom";
import SidebarNavLink from "../../reusable/SidebarNavLink";

function Sidebar() {
  return (
    <div className='sidebar sidebar-dark sidebar-fixed' id='sidebar'>
      <div className='sidebar-brand d-none d-md-flex'>Food Bay</div>
      <ul className='sidebar-nav' data-coreui='navigation' data-simplebar=''>
        <SidebarNavLink to='/dashboard' icon='user' title='Dashboard' />

        <li className='nav-title'>Pages</li>
        <SidebarNavLink to='/dashboard/users' icon='user' title='Users' />
        <SidebarNavLink to='/dashboard/products' icon='user' title='Products' />
        <SidebarNavLink
          to='/dashboard/categories'
          icon='rectangle-list'
          title='Categories'
        />
        <SidebarNavLink
          to='/dashboard/sliders'
          icon='rectangle-list'
          title='Sliders'
        />
        <SidebarNavLink
          to='/dashboard/reviews'
          icon='rectangle-list'
          title='Reviews'
        />
        <SidebarNavLink
          to='/dashboard/featured-cards'
          icon='rectangle-list'
          title='Featured Cards'
        />
      </ul>
      <button
        className='sidebar-toggler'
        type='button'
        data-coreui-toggle='unfoldable'></button>
    </div>
  );
}

export default Sidebar;
