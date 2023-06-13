import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link, NavLink } from 'react-router-dom';
import { fetchCategories } from '../../../utility/queries';

function Navbar() {
	const { data, isLoading } = useQuery('categories', fetchCategories);

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
						{!isLoading &&
							data?.length > 0 &&
							data?.map((cat) => (
								<NavLink
									key={Math.random()}
									activeclass='active'
									to={`/category/${cat.id}`}
									className='dropdown-item'
								>
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
