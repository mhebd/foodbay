import React from "react";

function Footer() {
  return (
    <footer>
      <div className='footer-wrapper text-light'>
        <div className='container'>
          <div className='footer-upper-wrapper'>
            <div className='row'>
              <div className='col-md-4 mb-3'>
                <div className='featur-menu'>
                  <div className='footer-heading'>
                    <h3 className='heading text-uppercase'>features</h3>
                  </div>

                  <div className='bottom-nav'>
                    <ul className='nav flex-column'>
                      <li className='nav-item'>
                        <a
                          href='about.html'
                          className='nav-link text-capitalize'>
                          About us
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='#' className='nav-link text-capitalize'>
                          job
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          href='contact.html'
                          className='nav-link text-capitalize'>
                          contact
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='#' className='nav-link text-capitalize'>
                          privecy & policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- footer up single section --> */}

              <div className='col-md-4 mb-3'>
                <div className='contact-wrap'>
                  <div className='footer-heading'>
                    <h3 className='heading text-uppercase'>contact info</h3>
                  </div>

                  <div className='contact-info'>
                    <div className='phone clearfix'>
                      <p className='float-left icon pe-3'>
                        <i className='fas fa-phone'></i>
                      </p>
                      <p className='text'>+8801521508253</p>
                    </div>

                    <div className='email clearfix'>
                      <p className='float-left icon pe-3'>
                        <i className='fas fa-envelope'></i>
                      </p>
                      <p className='text'>support@mail.com</p>
                    </div>

                    <div className='address clearfix'>
                      <p className='float-left icon pe-3'>
                        <i className='fas fa-home'></i>
                      </p>
                      <p className='text'>
                        123/NS Road, Kushtia, Khulna, Bangladesh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- footer up single section --> */}

              <div className='col-md-4 mb-4'>
                <div className='news-letter'>
                  <div className='footer-heading'>
                    <h3 className='heading text-uppercase'>newsletter</h3>
                  </div>

                  <div className='subscribe-from-wrap'>
                    <p className=''>Trust us! We will only send you promo!</p>
                    <form action='#' className='subs-form'>
                      <div className='input-group'>
                        <input
                          type='email'
                          name='email'
                          id='email'
                          className='email-ip-box form-control'
                        />
                        <button
                          className='btn btn-success subs-btn input-group-append text-center'
                          type='submit'>
                          <i className='fas fa-paper-plane mx-auto'></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- footer up single section --> */}
            </div>
          </div>
          {/* <!-- footer upper sectio end --> */}

          <div className='footer-down-wrapper'>
            <div className='row'>
              <div className='col-md-6 order-2 order-md-1'>
                <div className='copyright-section'>
                  <p className='copyright'>
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear())
                    </script>{" "}
                    All rights reserved | This template is made By{" "}
                    <a href='#' className='admin'>
                      <i className='fas fa-heart'></i>MHE
                    </a>
                  </p>
                </div>
              </div>
              {/* <!-- copyright sectio end --> */}

              <div className='col-md-6 order-md-2 mb-4'>
                <div className='social-wrapper'>
                  <ul className='nav justify-content-center justify-content-md-end'>
                    <li className='nav-item'>
                      <a href='#' className='nav-link'>
                        <i className='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a href='#' className='nav-link'>
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a href='#' className='nav-link'>
                        <i className='fab fa-instagram'></i>
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a href='#' className='nav-link'>
                        <i className='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a href='#' className='nav-link'>
                        <i className='fab fa-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- social media sectio end --> */}
            </div>
          </div>
          {/* <!-- footer down sectio end --> */}
        </div>
      </div>
      {/* <!-- footer wrapper end --> */}
    </footer>
  );
}

export default Footer;
