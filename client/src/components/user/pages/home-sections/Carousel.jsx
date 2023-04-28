import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSliders } from "../../../../actions/sliderActions";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  pauseOnHover: true,
};

function Carousel() {
  const slides = useSelector((state) => state.slider.slides);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSliders());
  }, []);

  return (
    <div className='slider-wrapper'>
      <div className='slider'>
        <Slider {...settings}>
          {slides.length > 0 &&
            slides.map((slide) => (
              <div key={Math.random()}>
                <img
                  src={`http://localhost:5000/${slide.image}`}
                  alt=''
                  className='img-fluid'
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
