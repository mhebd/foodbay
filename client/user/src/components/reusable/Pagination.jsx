import React from "react";

function PaginationSection() {
  return (
    <div className='pagination-wrapper'>
      <div className='container'>
        <div className='pagination-menu'>
          <ul className='pagination justify-content-center'>
            <li className='page-item'>
              <a href='#' className='page-link'>
                <i className='fas fa-angle-double-left'></i>
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link'>
                01
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link'>
                02
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link'>
                03
              </a>
            </li>
            <li className='page-item active'>
              <a href='#' className='page-link'>
                04
              </a>
            </li>
            <li className='page-item d-none d-sm-block'>
              <a href='#' className='page-link'>
                05
              </a>
            </li>
            <li className='page-item d-none d-sm-block'>
              <a href='#' className='page-link'>
                06
              </a>
            </li>
            <li className='page-item d-none d-sm-block'>
              <a href='#' className='page-link'>
                07
              </a>
            </li>
            <li className='page-item d-none d-sm-block'>
              <a href='#' className='page-link'>
                08
              </a>
            </li>
            <li className='page-item d-none d-sm-block'>
              <a href='#' className='page-link'>
                09
              </a>
            </li>
            <li className='page-item d-none d-sm-block'>
              <a href='#' className='page-link'>
                10
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link'>
                ...
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link'>
                20
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link'>
                <i className='fas fa-angle-double-right'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PaginationSection;
