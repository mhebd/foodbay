import React from "react";

function FormWrapperLayout({ heading, children }) {
  return (
    <div className='row'>
      <div className='col-md-6 mx-auto'>
        <div className='card mb-4'>
          <div className='card-header'>
            <strong>{heading}</strong>
            {/* <span className='small ms-1'>Custom styles</span> */}
          </div>
          <div className='card-body'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default FormWrapperLayout;
