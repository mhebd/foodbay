import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../../../actions/reviewActions";
import Slider from "react-slick";
import SectionHeading from "../../../reusable/SectionHeading";

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

function Review() {
  const reviews = useSelector((state) => state.review.reviews);
  console.log(reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, []);

  return (
    <div className='review-section-wrapper d-none d-sm-block'>
      <div className='review-slider'>
        <div className='container'>
          <SectionHeading
            title={"customer review"}
            caption={"What people say about us"}
          />
          {/* <!-- section heading end --> */}

          <div className='carousel slide' data-ride='carousel' id='review'>
            <Slider {...settings}>
              {reviews.length > 0 &&
                reviews.map((review) => (
                  <div className='carousel-inner' key={Math.random()}>
                    <div className='carousel-item active'>
                      <div className='carousel-caption'>
                        <div className='customer-img'>
                          <img
                            src={`http://localhost:5000/${review.image}`}
                            alt=''
                            className='img-fluid'
                          />
                        </div>

                        <div className='customer-text'>
                          <h3 className='customer-name'>{review.name}</h3>
                          <p className='lead customer-review'>
                            {review.opinion}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
