import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchFeaturedCards } from '../../../../utility/queries';

function FeaturedCards() {
	const { data, isLoading } = useQuery('featuredCards', fetchFeaturedCards);

	if (isLoading) return 'Loading...';
	if (data?.length == 0) return 'No data found';

	return (
		<div className='quate-wrapper'>
			<div className='container'>
				<div className='quates'>
					<div className='row'>
						{!isLoading &&
							data?.length > 0 &&
							data?.map((card) => (
								<div className='col-lg-3 col-md-6 mb-4' key={Math.random()}>
									<div className='card quate'>
										<div className='card-body text-center'>
											<p className='quate-icon'>
												<i className={`fas fa-${card.icon}`}></i>
											</p>
											<h5 className='quate-hd text-uppercase'>{card.title}</h5>
											<p className='quate-text text-capitalize'>
												{card.caption}
											</p>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
				{/* <!-- quates end --> */}
			</div>
		</div>
	);
}

export default FeaturedCards;
