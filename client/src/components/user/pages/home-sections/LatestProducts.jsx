import React from "react";

function LatestProducts() {
  return (
    <div className='latest-sectio-wrapper'>
      <div className='container'>
        <div className='latest-wrapper'>
          <div className='section-heading text-center'>
            <h2 className='section-hd text-uppercase'>latest products</h2>
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
                <div className='col-md-6 mb-4'>
                  <div className='product l-featured'>
                    <div className='card'>
                      <div className='card-header text-center'>
                        <p className='latest-card-text text-uppercase'>
                          Collection Of 2020
                        </p>
                        <h4 className='latest-card-hd text-uppercase'>
                          special food under TK 200
                        </h4>
                      </div>
                      <div className='card-img'>
                        {/* <img src="image/seeFood/32.jpg" alt=""
                                                            className="card-img-top img-fluid"> */}
                      </div>
                      <div className='card-body text-center'>
                        <p className='price'>TK 170</p>
                        <a href='#' className='btn btn-success add-to-cart-new'>
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- left side product end --> */}

                <div className='col-md-6'>
                  <div className=''>
                    <div className='row'>
                      <div className='col-md-6 mb-3'>
                        <div className='product'>
                          <div className='card'>
                            <div className='card-img'>
                              {/* <img src="image/seeFood/4.jpg" alt=""
                                                                        className="card-img-top img-fluid"> */}
                            </div>

                            <div className='card-body'>
                              <a href='single.html' className='view-in-single'>
                                <h4 className='product-name text-uppercase'>
                                  this is food name
                                </h4>
                              </a>
                              <p className='price lead'>
                                TK <span>250</span>
                              </p>
                              <p className='remove-price'>
                                <del>
                                  TK<span>500</span>
                                </del>
                                <span className='decrease ml-4'>-50%</span>
                              </p>
                              <a
                                href='#'
                                className='add-to-cart btn btn-success btn-block text-uppercase'
                                data-id='1004'>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- singe product end --> */}

                      <div className='col-md-6 mb-3'>
                        <div className='product'>
                          <div className='card'>
                            <div className='card-img'>
                              {/* <img src="image/seeFood/5.jpg" alt=""
                                                                        className="card-img-top img-fluid"> */}
                            </div>

                            <div className='card-body'>
                              <a href='single.html' className='view-in-single'>
                                <h4 className='product-name text-uppercase'>
                                  this is food name
                                </h4>
                              </a>
                              <p className='price lead'>
                                TK <span>250</span>
                              </p>
                              <p className='remove-price'>
                                <del>
                                  TK<span>500</span>
                                </del>
                                <span className='decrease ml-4'>-50%</span>
                              </p>
                              <a
                                href='#'
                                className='add-to-cart btn btn-success btn-block text-uppercase'
                                data-id='1005'>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- singe product end --> */}
                      <div className='col-md-6 mb-3'>
                        <div className='product'>
                          <div className='card'>
                            <div className='card-img'>
                              {/* <img src="image/seeFood/6.jpg" alt=""
                                                                        className="card-img-top img-fluid"> */}
                            </div>

                            <div className='card-body'>
                              <a href='single.html' className='view-in-single'>
                                <h4 className='product-name text-uppercase'>
                                  this is food name
                                </h4>
                              </a>
                              <p className='price lead'>
                                TK <span>250</span>
                              </p>
                              <p className='remove-price'>
                                <del>
                                  TK<span>500</span>
                                </del>
                                <span className='decrease ml-4'>-50%</span>
                              </p>
                              <a
                                href='#'
                                className='add-to-cart btn btn-success btn-block text-uppercase'
                                data-id='1006'>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- singe product end --> */}
                      <div className='col-md-6 mb-3'>
                        <div className='product'>
                          <div className='card'>
                            <div className='card-img'>
                              {/* <img src="image/seeFood/7.jpg" alt=""
                                                                        className="card-img-top img-fluid"> */}
                            </div>

                            <div className='card-body'>
                              <a href='single.html' className='view-in-single'>
                                <h4 className='product-name text-uppercase'>
                                  this is food name
                                </h4>
                              </a>
                              <p className='price lead'>
                                TK <span>250</span>
                              </p>
                              <p className='remove-price'>
                                <del>
                                  TK<span>500</span>
                                </del>
                                <span className='decrease ml-4'>-50%</span>
                              </p>
                              <a
                                href='#'
                                className='add-to-cart btn btn-success btn-block text-uppercase'
                                data-id='1007'>
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
                {/* <!-- right side product end --> */}
              </div>
            </div>
          </div>
          {/* <!-- products end --> */}
        </div>
        {/* <!-- latest-wrapper --> */}
      </div>
    </div>
  );
}

export default LatestProducts;
