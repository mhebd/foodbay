import React, { useEffect } from 'react';
import BreadCrumb from '../../reusable/BreadCrumb';
import PageHeading from '../../reusable/PageHeading';
import Product from '../../reusable/Product';
import { Link, useParams } from 'react-router-dom';
import PaginationSection from '../../reusable/Pagination';
import { fetchCategory } from '../../../utility/queries';
import { useQuery } from 'react-query';

function CategoryProducts() {
	const { catId } = useParams();

	const { data, isLoading } = useQuery(
		['categoryProducts', catId],
		() => fetchCategory(catId),
		{ enabled: !!catId }
	);

	if (isLoading) return 'Loading...';

	return (
		<>
			<BreadCrumb>
				<Link className='breadcrumb-item'>Shop</Link>
				<Link className='breadcrumb-item active'>{data?.name}</Link>
			</BreadCrumb>

			<PageHeading heading={`${data?.name} Food Collection`} />

			<div className='food-collection-section-wrapper'>
				<div className='container'>
					<div className='foods-wrapper'>
						{/* <!-- filter section wrapper end --> */}
						<div className='products-wrapper'>
							<div className='products'>
								<div className='row'>
									{data?.products.length > 0 && (
										<Product
											products={data?.products}
											rootClass={'col-lg-3 col-md-4 mb-4'}
										/>
									)}
								</div>
							</div>
						</div>
						{/* <!-- products end --> */}
					</div>
				</div>
			</div>

			<PaginationSection />
		</>
	);
}

export default CategoryProducts;
