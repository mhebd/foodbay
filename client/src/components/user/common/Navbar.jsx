import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { fetchCategories } from "../../../actions/categoryActions";

function Navbar() {
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className='navbar-collapse collapse' id='main-menu'>
      <ul className='navbar-nav mx-auto'>
        <li className='nav-item'>
          <NavLink activeclass='active' to='/' className='nav-link '>
            Home
          </NavLink>
        </li>
        <li className='nav-item dropdown'>
          <Link className='nav-link dropdown-toggle'>Shop</Link>
          <div className='dropdown-menu'>
            {categories.length > 0 &&
              categories.map((cat) => (
                <NavLink
                  key={Math.random()}
                  activeclass='active'
                  to={`/category/${cat.id}`}
                  className='dropdown-item'>
                  {cat.name}
                </NavLink>
              ))}
          </div>
        </li>
        <li className='nav-item'>
          <NavLink activeclass='active' to='/contact' className='nav-link '>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
