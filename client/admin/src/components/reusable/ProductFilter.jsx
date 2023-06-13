import React from "react";

function ProductFilter() {
  return (
    <div class='filter-wrapper mb-4 mt-4'>
      <div class='row'>
        <div class='col-md-6 mb-3'>
          <div class='box-filter'>
            <div class='filter-heading'>
              <h5 class='text-capitalize text-muted mb-2'>short</h5>
            </div>
            <form action='#' class='filter-form'>
              <div class='form-group'>
                <select class='form-control'>
                  <option value='newToOld'>Short By Time: New To Old</option>
                  <option value='oldToNew'>Short By Time: Old To New</option>
                  <option value='aToZ'>Short By Name: A To Z</option>
                  <option value='zToA'>Short By Name: Z To A</option>
                  <option value='highToLow'>Short By Price: High To Low</option>
                  <option value='lowToHigh'>Short By Price: Low To HIgh</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- short end --> */}

        <div class='col-md-6 mb-3'>
          <div class='price-range'>
            <div class='filter-heading mb-2'>
              <h5 class='text-capitalize text-muted'>Price range</h5>
            </div>

            <div class='price-range-block'>
              <div
                id='slider-range'
                class='price-filter-range'
                name='rangeInput'></div>

              <div class='input-value clearfix'>
                <input
                  type='text'
                  min='0'
                  max='990'
                  oninput="validity.valid||(value='0');"
                  id='min_price'
                  class='price-range-field float-left'
                />

                <input
                  type='text'
                  min='0'
                  max='1000'
                  oninput="validity.valid||(value='1000');"
                  id='max_price'
                  class='price-range-field float-right text-right'
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- price range end --> */}
      </div>
    </div>
  );
}

export default ProductFilter;
