import React from "react";

function Header() {
  return (
    <header>
      <div className='upper-nav-wrapper'>
        <div className='container'>
          <div className='upper-nav'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='extra-info'>
                  <ul className='nav justify-content-center justify-content-md-start'>
                    <li className='nav-item'>
                      <a href='tel:+8801521508253' className='nav-link'>
                        +8801521508253
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        href='mailto:mhemonhossain@gmail.com'
                        className='nav-link'>
                        support@mail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- upper nav left side end --> */}

              <div className='col-md-6'>
                <div className='extra-menu'>
                  <ul className='nav justify-content-md-end justify-content-center'>
                    <li className='nav-item'>
                      <a href='#' className='nav-link'>
                        Gift Card
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a href='#' className='nav-link'>
                        Track Order
                      </a>
                    </li>
                    <li className='nav-item dropdown'>
                      <a
                        href='#'
                        className='nav-link dropdown-toggle'
                        data-toggle='dropdown'>
                        Language
                      </a>
                      <div className='dropdown-menu'>
                        <a href='#' className='dropdown-item'>
                          English
                        </a>
                        <a href='#' className='dropdown-item'>
                          Bangla
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- upper nav right side end --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- upper nav end --> */}

      <div className='sm-brand-logo d-block d-sm-none'>
        <div className='container'>
          <div className='brand-logo mx-auto text-center'>
            <a href='#' className='brand-logo-link'>
              {/* <img
                src='image/ns-logo.jpg'
                alt='See Food Logo'
                className='img-fluid'
                style='max-height: 50px;'
              /> */}
            </a>
          </div>
        </div>
      </div>
      {/* <!-- small device navbar brand sectio end --> */}

      <div className='main-navbar-wrapper' id='main-navbar'>
        <div className=''>
          <div className='container'>
            <div className='row'>
              <div className='col-md-9 col-sm-8 col-4'>
                <div className='navbar navbar-expand-lg bg-white'>
                  <div className='navbar-brand d-none d-sm-block'>
                    <a href='#' className='brand-link'>
                      {/* <img
                        src='image/ns-logo.jpg'
                        alt=''
                        className='img-fluid'
                        style='max-height: 50px;'
                      /> */}
                    </a>
                  </div>
                  {/* <!-- navbar brand end --> */}

                  <button
                    className='navbar-toggler'
                    data-toggle='collapse'
                    data-target='#main-menu'>
                    <i className='fas fa-bars'></i>
                  </button>
                  {/* <!-- navbar toggler button end --> */}

                  <div className='navbar-collapse collapse' id='main-menu'>
                    <ul className='navbar-nav mx-auto'>
                      <li className='nav-item'>
                        <a href='index.html' className='nav-link '>
                          Home
                        </a>
                      </li>
                      <li className='nav-item dropdown'>
                        <a
                          href='#'
                          className='nav-link active dropdown-toggle'
                          data-toggle='dropdown'>
                          shop
                        </a>
                        <div className='dropdown-menu'>
                          <a
                            href='bangla.html'
                            className='dropdown-item active'>
                            Bengali
                          </a>
                          <a href='indian.html' className='dropdown-item'>
                            Indian
                          </a>
                          <a href='thai.html' className='dropdown-item'>
                            Thai
                          </a>
                          <a href='chinese.html' className='dropdown-item'>
                            Chinese
                          </a>
                        </div>
                      </li>
                      <li className='nav-item'>
                        <a href='blog.html' className='nav-link'>
                          blog
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='contact.html' className='nav-link'>
                          contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- main menu end --> */}
              </div>

              <div className='col-md-3 col-sm-4 col-8'>
                <div className='user-menu-wrapper'>
                  <div className='user-menu'>
                    <ul className='nav justify-content-end'>
                      <li className='nav-item dropdown'>
                        <a href='#' className='nav-link' data-toggle='dropdown'>
                          <i className='fas fa-search'></i>
                        </a>
                        <div className='dropdown-menu search'>
                          <div className='search-form'>
                            <form action='#'>
                              <div className='input-group'>
                                <input
                                  type='text'
                                  className='form-control search-box'
                                  placeholder='Search Key & Press Enter'
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                      <li className='nav-item dropdown'>
                        <a
                          href='#'
                          className='nav-link cart-icon'
                          data-toggle='dropdown'>
                          <i className='fas fa-shopping-cart'></i>
                          <span className='cart-badge' id='cart-badge'></span>
                        </a>
                        <div className='dropdown-menu cart'>
                          <div className='cart-list'>
                            <table className='table cart-table'>
                              <thead>
                                <tr>
                                  <td>Image</td>
                                  <td>Name</td>
                                  <td>Price</td>
                                </tr>
                              </thead>

                              <tbody id='carts'></tbody>
                            </table>

                            <div className='mb-1 cart-btn'>
                              <a
                                href='checkout.html'
                                className='btn btn-success btn-block checkout-btn'>
                                Check Out
                              </a>
                              <button className='btn btn-success clear-all btn-block'>
                                Clear Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className='nav-item dropdown'>
                        <a href='#' className='nav-link' data-toggle='dropdown'>
                          <i className='fas fa-user'></i>
                        </a>
                        <div className='dropdown-menu user'>
                          <a href='#' className='dropdown-item'>
                            Sign Up
                          </a>
                          <a href='#' className='dropdown-item'>
                            Check Out
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- user menu end --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- navbar sectio end --> */}
      </div>

      {/* <!-- main navbar sectio end --> */}
    </header>
  );
}

export default Header;
