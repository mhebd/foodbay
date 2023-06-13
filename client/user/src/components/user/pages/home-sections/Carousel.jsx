import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useQuery } from 'react-query';
import { fetchSliders } from '../../../../utility/queries';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	cssEase: 'linear',
	pauseOnHover: true,
};

function Carousel() {
	const { data, isLoading } = useQuery('sliders', fetchSliders);

	if (isLoading) return 'Loading...';
	if (data?.length == 0) return 'No slide found';

	return (
		<div className='slider-wrapper'>
			<div className='slider'>
				<Slider {...settings}>
					{!isLoading &&
						data?.length > 0 &&
						data?.map((slide) => (
							<div key={Math.random()}>
								<img
									src={`http://localhost:5000/${slide.image}`}
									alt=''
									className='img-fluid slider-img'
								/>
							</div>
						))}
				</Slider>
			</div>
		</div>
	);
}

export default Carousel;
