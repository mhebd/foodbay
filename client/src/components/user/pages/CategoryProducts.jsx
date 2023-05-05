import React, { useEffect } from "react";
import BreadCrumb from "../../reusable/BreadCrumb";
import PageHeading from "../../reusable/PageHeading";
import Product from "../../reusable/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryWithProduct } from "../../../actions/categoryActions";
import { Link, useParams } from "react-router-dom";
import PaginationSection from "../../reusable/Pagination";

function CategoryProducts() {
  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const { catId } = useParams();

  useEffect(() => {
    dispatch(fetchCategoryWithProduct(catId));
  }, [catId]);

  return (
    <>
      <BreadCrumb>
        <Link className='breadcrumb-item'>Shop</Link>
        <Link className='breadcrumb-item active'>{category?.name}</Link>
      </BreadCrumb>

      <PageHeading heading={`${category?.name} Food Collection`} />

      <div className='food-collection-section-wrapper'>
        <div className='container'>
          <div className='foods-wrapper'>
            {/* <!-- filter sectin wrapper end --> */}
            <div className='products-wrapper'>
              <div className='products'>
                <div className='row'>
                  {category?.products.length > 0 && (
                    <Product
                      products={category?.products}
                      rootClass={"col-lg-3 col-md-4 mb-4"}
                    />
                  )}
                </div>
              </div>
            </div>
            {/* <!-- products end --> */}
          </div>
        </div>
      </div>

      <PaginationSection />
    </>
  );
}

export default CategoryProducts;
