import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

function CartItem() {
  const cartItem = useSelector((state) => state.cart);

  let content = null;
  if(cartItem.length === 0 ) {
    content = <p>No Item Selected</p>;
  }
  else{
    content = cartItem.map((item) => <Item item={item} key={item.id} />);
  }

  return <div className="space-y-6">{content}</div>;
}

export default CartItem;
