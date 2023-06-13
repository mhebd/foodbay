import React from "react";

function UserSectionHeading({ title, caption }) {
  return (
    <div className='section-heading text-center'>
      <h2 className='section-hd text-uppercase'>{title}</h2>
      <p className='section-pg text-capitalize'>{caption}</p>
    </div>
  );
}

export default UserSectionHeading;
