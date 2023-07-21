import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { productDecrement, productDelete, productIncrement } from "../redux/cart/actionCreator";

function Item({ item }) {
  const { id, name, category, img, quantity, price, stock } = item;
  const [totalPrice, setTotalPrice] = useState(price);
  const dispatch = useDispatch();

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        <img className="lws-cartImage" src={img} alt="product" />

        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory"> {category} </p>
          <p>
            BDT <span className="lws-cartPrice"> {price} </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div className="flex items-center space-x-4">
          <button className="lws-incrementQuantity" onClick={() => dispatch(productIncrement(id,stock))}>
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button className="lws-decrementQuantity" onClick={() => dispatch(productDecrement(id))}>
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>

        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{totalPrice * quantity}</span>
        </p>
      </div>

      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="lws-removeFromCart" onClick={() => dispatch(productDelete(id))}>
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Item;
