import React from "react";

function Footer() {
  const d = new Date();
  return (
    <footer className='footer'>
      <div>
        <a href='https://foodbay.onrender.com'>FoodBay</a> © {d.getFullYear()}{" "}
        All rights reserved.
      </div>
      <div className='ms-auto'>
        Developed by&nbsp;
        <a href='https://mehedi.onrender.com' target='_blank'>
          M. Hassan
        </a>
      </div>
    </footer>
  );
}

export default Footer;
