import React from "react";

function InputWrapper({ label, children }) {
  return (
    <div className='mb-3'>
      <label className='form-label' htmlFor=''>
        {label}
      </label>
      {children}
    </div>
  );
}

export default InputWrapper;
