import React from "react";
import { Link } from "react-router-dom";

function SectionPageLink({ link }) {
  return (
    <div className='section-page-link text-end'>
      <Link to={link} className='page-link'>
        See All Products <i className='fas fa-angle-double-right'></i>
      </Link>
    </div>
  );
}

export default SectionPageLink;
