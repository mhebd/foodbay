import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, fetchProducts } from "../../../actions/productActions";
import TableWrapperLayout from "./layouts/TableWrapperLayout";
import Button from "../../reusable/Button";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <TableWrapperLayout
      name='All Products'
      link='product/create-product'
      btnText='Create Product'>
      <table className='table table-bordered table-striped table-hover'>
        <thead className='table-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>price</th>
            <th scope='col' colSpan='2'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((product) => (
              <tr key={Math.random()}>
                <th scope='row'>{product.id}</th>
                <th scope='row'>{product.name}</th>
                <th scope='row'>{product.price}</th>
                <td>
                  <Link
                    className='btn-success btn'
                    to='/dashboard/category/create-category'>
                    Edit
                  </Link>
                </td>
                <td>
                  <Button
                    type='button'
                    className='btn-danger'
                    onClick={() => dispatch(deleteProduct(product.id))}>
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableWrapperLayout>
  );
}

export default Products;
