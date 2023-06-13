import React, { useEffect } from 'react';
import Product from '../../../reusable/Product';
import UserSectionHeading from '../../../reusable/UserSectionHeading';
import SectionPageLink from '../../../reusable/SectionPageLink';
import { fetchProducts } from '../../../../utility/queries';
import { useQuery } from 'react-query';

function OtherProducts() {
	const { data, isLoading } = useQuery('products', fetchProducts);

	if (isLoading) return 'Loading...';
	if (data?.length == 0) return 'No data found';

	return (
		<div className='others-section-wrapper'>
			<div className='container'>
				<div className='others-wrapper'>
					<UserSectionHeading
						title={'others products'}
						caption={'See our best food collection'}
					/>

					<SectionPageLink link={'/'} />

					<div className='products-wrapper'>
						<div className='products'>
							<div className='row'>
								<Product products={data} rootClass='col-md-6 col-lg-3' />
							</div>
						</div>
					</div>
					{/* <!-- products end --> */}
				</div>
			</div>
		</div>
	);
}

export default OtherProducts;
