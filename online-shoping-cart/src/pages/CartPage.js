import CartItem from "../component/CartItem";
import Bill from "../component/Bill";
function CartPage() {
  return (
    <body>
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <CartItem />
            <Bill />
          </div>
        </div>
      </main>
    </body>
  );
}

export default CartPage;
