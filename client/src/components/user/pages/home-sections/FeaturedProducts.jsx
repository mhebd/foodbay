import React from "react";

function FeaturedProducts() {
  return (
    <div className='featured-section-wrapper'>
      <div className='container'>
        <div className='featured-wrapper'>
          <div className='section-heading text-center'>
            <h2 className='section-hd text-uppercase'>featured products</h2>
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
                <div className='col-md-4 mb-3'>
                  <div className='product'>
                    <div className='card'>
                      <div className='card-img'>
                        {/* <img src="image/seeFood/1.jpg" alt=""
                                                            className="card-img-top img-fluid"> */}
                      </div>

                      <div className='card-body'>
                        <a href='single.html' className='view-in-single'>
                          <h4 className='product-name text-uppercase'>
                            This is food name
                          </h4>
                        </a>
                        <p className='price lead'>
                          TK <span>250</span>
                        </p>
                        <p className='remove-price'>
                          <del>
                            TK<span>500</span>
                          </del>{" "}
                          <span className='decrease m3-4'>-50%</span>
                        </p>
                        <a
                          href='#'
                          className='add-to-cart btn btn-success btn-block text-uppercase'
                          data-id='1001'>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- singe product end --> */}

                <div className='col-md-4 mb-3'>
                  <div className='product'>
                    <div className='card'>
                      <div className='card-img'>
                        {/* <img src="image/seeFood/2.jpg" alt=""
                                                            className="card-img-top img-fluid"> */}
                      </div>

                      <div className='card-body'>
                        <a href='single.html' className='view-in-single'>
                          <h4 className='product-name text-uppercase'>
                            This is food name
                          </h4>
                        </a>
                        <p className='price lead'>
                          TK <span>250</span>
                        </p>
                        <p className='remove-price'>
                          <del>
                            TK<span>500</span>
                          </del>{" "}
                          <span className='decrease m3-4'>-50%</span>
                        </p>
                        <a
                          href='#'
                          className='add-to-cart btn btn-success btn-block text-uppercase'
                          data-id='1002'>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- singe product end --> */}
                <div className='col-md-4 mb-3'>
                  <div className='product'>
                    <div className='card'>
                      <div className='card-img'>
                        {/* <img src="image/seeFood/3.jpg" alt=""
                                                            className="card-img-top img-fluid"> */}
                      </div>

                      <div className='card-body'>
                        <a href='single.html' className='view-in-single'>
                          <h4 className='product-name text-uppercase'>
                            This is food name
                          </h4>
                        </a>
                        <p className='price lead'>
                          TK <span>250</span>
                        </p>
                        <p className='remove-price'>
                          <del>
                            TK<span>500</span>
                          </del>{" "}
                          <span className='decrease m3-4'>-50%</span>
                        </p>
                        <a
                          href='#'
                          className='add-to-cart btn btn-success btn-block text-uppercase'
                          data-id='1003'>
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

export default FeaturedProducts;
