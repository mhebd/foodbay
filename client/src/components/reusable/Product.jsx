import React from "react";

function Product({ products, rootClass }) {
  return products.map((p) => (
    <div className={`${rootClass} mb-3`} key={Math.random()}>
      <div className='product'>
        <div className='card'>
          <div className='card-img'>
            <img
              src={`http://localhost:5000/${p.image}`}
              alt=''
              className='card-img-top img-fluid'
            />
          </div>

          <div className='card-body'>
            {/* <a href='single.html' className='view-in-single'>
              <h4 className='product-name text-uppercase'>{p.name}</h4>
            </a> */}
            <h6 className='product-name mt-4 text-uppercase view-in-single'>
              {p.name}
            </h6>
            <p className='price lead'>
              TK <span>{+p.price - p.price * (p.discount / 100)}</span>
            </p>
            <p className='remove-price'>
              <del>
                TK<span>{p.price}</span>
              </del>{" "}
              <span className='decrease m3-4'>-{p.discount}%</span>
            </p>
            <a
              href='#'
              className='add-to-cart btn btn-success btn-block text-uppercase'
              data-id='1001'>
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default Product;
