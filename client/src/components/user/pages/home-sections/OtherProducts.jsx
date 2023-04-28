import React from "react";

function OtherProducts() {
  return (
    <div className='others-section-wrapper'>
      <div className='container'>
        <div className='others-wrapper'>
          <div className='section-heading text-center'>
            <h2 className='section-hd text-uppercase'>others products</h2>
            <p className='section-pg text-capitalize'>
              See our best food collection
            </p>
          </div>
          {/* <!-- section heading end --> */}

          <div className='section-page-link text-right'>
            <a href='allproduct.html' className='page-link'>
              See All Products <i className='fas fa-angle-double-right'></i>
            </a>
          </div>
          {/* <!-- product page link end --> */}

          <div className='products-wrapper'>
            <div className='products'>
              <div className='row'>
                <div className='col-md-6 col-lg-3 mb-4'>
                  <div className='product'>
                    <div className='card'>
                      <div className='card-img'>
                        {/* <img src="image/seeFood/8.jpg" alt=""
                                                            className="card-img-top img-fluid"> */}
                      </div>

                      <div className='card-body'>
                        <a href='single.html' className='view-in-single'>
                          <h4 className='product-name text-uppercase'>
                            see food name
                          </h4>
                        </a>
                        <p className='price lead'>
                          TK <span>250</span>
                        </p>
                        <p className='remove-price'>
                          <del>
                            TK<span>500</span>
                          </del>{" "}
                          <span className='decrease ml-4'>-50%</span>
                        </p>
                        <a
                          href='#'
                          className='add-to-cart btn btn-success btn-block text-uppercase'
                          data-id='1008'>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- singe product end --> */}

                <div className='col-md-6 col-lg-3 mb-4'>
                  <div className='product'>
                    <div className='card'>
                      <div className='card-img'>
                        {/* <img src="image/seeFood/9.jpg" alt=""
                                                            className="card-img-top img-fluid"> */}
                      </div>

                      <div className='card-body'>
                        <a href='single.html' className='view-in-single'>
                          <h4 className='product-name text-uppercase'>
                            see food name
                          </h4>
                        </a>
                        <p className='price lead'>
                          TK <span>250</span>
                        </p>
                        <p className='remove-price'>
                          <del>
                            TK<span>500</span>
                          </del>{" "}
                          <span className='decrease ml-4'>-50%</span>
                        </p>
                        <a
                          href='#'
                          className='add-to-cart btn btn-success btn-block text-uppercase'
                          data-id='1009'>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- singe product end --> */}
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
