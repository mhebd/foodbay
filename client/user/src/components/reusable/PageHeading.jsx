import React from "react";

function PageHeading({ heading }) {
  return (
    <div className='page-heading-wrapper'>
      <div className='container'>
        <div className='page-heading'>
          <h4 className='text-capitalize'>{heading}</h4>
        </div>
      </div>
    </div>
  );
}

export default PageHeading;
