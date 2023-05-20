import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedProducts } from "../../../../actions/productActions";
import Product from "../../../reusable/Product";
import UserSectionHeading from "../../../reusable/UserSectionHeading";
import SectionPageLink from "../../../reusable/SectionPageLink";

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
          <UserSectionHeading
            title={"featured products"}
            caption={"See our best food collection"}
          />

          <SectionPageLink link={"/"} />

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
