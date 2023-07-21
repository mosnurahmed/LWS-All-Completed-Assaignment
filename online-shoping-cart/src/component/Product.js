import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/actionCreator";

function Product({ product }) {
  const { id, name, category, img, price, stock } = product;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [updatedStock, setUpdatedStock] = useState(stock);

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id,
        name,
        category,
        img,
        price,
        updatedStock,
        stock,
        quantity,
      })
    );
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={img} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name} </h4>
        <p className="lws-productCategory">{category} </p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{updatedStock} </span>
          </p>
        </div>
        <button
          disabled={updatedStock <= 0}
          className="lws-btnAddToCart"
          onClick={() => {
            setUpdatedStock((prev) => {
              if (prev >= -1) {
                return prev - 1;
              }
            });
            setQuantity((prev) => {
              return prev + 1;
            });

            addToCartHandler();
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
