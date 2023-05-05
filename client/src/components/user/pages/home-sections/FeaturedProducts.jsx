import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedProducts } from "../../../../actions/productActions";
import Product from "../../../reusable/Product";

function FeaturedProducts() {
  const { featuredProducts } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, []);

  return (
    <div className='featured-section-wrapper'>
      <div className='container'>
        <div className='featured-wrapper'>
          <div className='section-heading text-center'>
            <h2 className='section-hd text-uppercase'>featured products</h2>
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
                <Product
                  products={featuredProducts}
                  rootClass='col-lg-3 col-md-4'
                />
              </div>
            </div>
          </div>
          {/* <!-- products end --> */}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
