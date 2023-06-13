import React, { useEffect } from 'react';
import Product from '../../../reusable/Product';
import UserSectionHeading from '../../../reusable/UserSectionHeading';
import SectionPageLink from '../../../reusable/SectionPageLink';
import { fetchFeaturedProducts } from '../../../../utility/queries';
import { useQuery } from 'react-query';

function FeaturedProducts() {
	const { data, isLoading } = useQuery(
		'featuredProducts',
		fetchFeaturedProducts
	);

	if (isLoading) return 'Loading...';
	if (data?.length == 0) return 'No data found';

	return (
		<div className='featured-section-wrapper'>
			<div className='container'>
				<div className='featured-wrapper'>
					<UserSectionHeading
						title={'featured products'}
						caption={'See our best food collection'}
					/>

					<SectionPageLink link={'/'} />

					<div className='products-wrapper'>
						<div className='products'>
							<div className='row'>
								<Product products={data} rootClass='col-lg-3 col-md-4' />
							</div>
						</div>
					</div>
					{/* <!-- products end --> */}
				</div>
			</div>
		</div>
	);
}

export default FeaturedProducts;
