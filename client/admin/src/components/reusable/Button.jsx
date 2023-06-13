import React from "react";

function Button({ className, type, children, onClick }) {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
