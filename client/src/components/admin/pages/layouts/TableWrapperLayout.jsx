import React from "react";
import { Link } from "react-router-dom";
import TableRowForm from "../../../reusable/TableRowForm";

function TableWrapperLayout({ name, link, btnText, children }) {
  return (
    <div className='card mb-4'>
      <div className='card-header d-flex justify-content-between'>
        <div className=''>
          <strong>Tables</strong>
          <span className='small ms-1'>{name}</span>
        </div>
        {link && (
          <Link to={`/dashboard/${link}`} className='btn btn-dark'>
            {btnText}
          </Link>
        )}
      </div>
      <div className='card-body'>
        <TableRowForm />
        {children}
      </div>
    </div>
  );
}

export default TableWrapperLayout;
