import React from "react";

function TableRowForm() {
  return (
    <div className='d-flex justify-content-end mb-3'>
      <p className=''>Show document per page</p>
      <form action='' className='form ms-3'>
        <select name='rows' id=''>
          <option value='10'>10 Rows in a page</option>
          <option value='25'>25 Rows in a page</option>
          <option value='50'>50 Rows in a page</option>
          <option value='100'>100 Rows in a page</option>
        </select>
      </form>
    </div>
  );
}

export default TableRowForm;
