import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpecialProducts } from "../../../../actions/productActions";
import Product from "../../../reusable/Product";
import UserSectionHeading from "../../../reusable/UserSectionHeading";
import SectionPageLink from "../../../reusable/SectionPageLink";

function LatestProducts() {
  const { specialProducts } = useSelector((state) => state.product);
  console.log(specialProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpecialProducts());
  }, []);
  return (
    <div className='latest-sectio-wrapper'>
      <div className='container'>
        <div className='latest-wrapper'>
          <UserSectionHeading
            title={"latest products"}
            caption={"See our best food collection"}
          />

          <SectionPageLink link={"/"} />

          <div className='products-wrapper'>
            <div className='products'>
              <div className='row'>
                <div className='col-md-6 mb-4'>
                  <div className='product l-featured'>
                    <div className='card'>
                      <div className='card-header text-center'>
                        <p className='latest-card-text text-uppercase'>
                          Collection Of 2020
                        </p>
                        <h4 className='latest-card-hd text-uppercase'>
                          special food under TK 200
                        </h4>
                      </div>
                      <div className='card-img'>
                        {/* <img src="image/seeFood/32.jpg" alt=""
                                                            className="card-img-top img-fluid"> */}
                      </div>
                      <div className='card-body text-center'>
                        <p className='price'>TK 170</p>
                        <a href='#' className='btn btn-success add-to-cart-new'>
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- left side product end --> */}

                <div className='col-md-6'>
                  <div className='row'>
                    <Product products={specialProducts} rootClass='col-md-6' />
                  </div>
                </div>
                {/* <!-- right side product end --> */}
              </div>
            </div>
          </div>
          {/* <!-- products end --> */}
        </div>
        {/* <!-- latest-wrapper --> */}
      </div>
    </div>
  );
}

export default LatestProducts;
