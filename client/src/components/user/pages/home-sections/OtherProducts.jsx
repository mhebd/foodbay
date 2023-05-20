import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../actions/productActions";
import Product from "../../../reusable/Product";
import UserSectionHeading from "../../../reusable/UserSectionHeading";
import SectionPageLink from "../../../reusable/SectionPageLink";

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
          <UserSectionHeading
            title={"others products"}
            caption={"See our best food collection"}
          />

          <SectionPageLink link={"/"} />

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
