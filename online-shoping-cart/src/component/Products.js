import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

function Products() {
  const products = useSelector((state) => state.products);
  let content = null;
  if (products.length > 0) {
    content = products.map((product) => <Product product={product} key={product.id} />);
  } else {
    content = <div>No Product Found</div>;
  }
  return (
    <div className="productContainer" id="lws-productContainer">
      {content}
    </div>
  );
}

export default Products;
