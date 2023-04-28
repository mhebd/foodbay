import React from "react";

function Banner() {
  return (
    <div className='banner-wrapper'>
      <div className='banner'>
        {/* <img src="image/slider-7.jpg" alt="" className="img-fluid banner-img"> */}

        <div className='overlay'></div>

        <div className='banner-text '>
          <div className='container'>
            <div className='row'>
              <div className='col-9 mx-auto text-center'>
                <h2 className='text-capitalize text-white'>
                  Trust us! See our best product, buy & enjoy.
                </h2>
                <p className='lead d-md-block d-none'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur veritatis inventore facilis molestiae libero.
                  Culpa nihil voluptas autem eveniet nulla beatae maxime qui.
                  Quis sit at accusamus dicta, natus tenetur!
                </p>

                <a href='#' className='btn btn-success mx-auto banner-btn mb-4'>
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
