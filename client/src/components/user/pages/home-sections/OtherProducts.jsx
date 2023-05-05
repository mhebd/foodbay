import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../actions/productActions";
import Product from "../../../reusable/Product";

function OtherProducts() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className='others-section-wrapper'>
      <div className='container'>
        <div className='others-wrapper'>
          <div className='section-heading text-center'>
            <h2 className='section-hd text-uppercase'>others products</h2>
            <p className='section-pg text-capitalize'>
              See our best food collection
            </p>
          </div>
          {/* <!-- section heading end --> */}

          <div className='section-page-link text-right'>
            <a href='allproduct.html' className='page-link'>
              See All Products <i className='fas fa-angle-double-right'></i>
            </a>
          </div>
          {/* <!-- product page link end --> */}

          <div className='products-wrapper'>
            <div className='products'>
              <div className='row'>
                <Product products={products} rootClass='col-md-6 col-lg-3' />
              </div>
            </div>
          </div>
          {/* <!-- products end --> */}
        </div>
      </div>
    </div>
  );
}

export default OtherProducts;
