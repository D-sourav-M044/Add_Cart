import { useContext } from "react";
import { Link } from "react-router-dom";
import Items from "../Items";
import { cartContex } from "../pages/Cart";
import Products from "../Products";
//import { cartContex } from "../RootComponent";

export default function ContextCart() {
  const { item, clearCart, cart, totalItem, totalAmount } =
    useContext(cartContex);

  if (cart) {
    return (
      <div>
        <h1>shopping cart</h1>
        <p>You have total {totalItem} iteams</p>
        {item.map((data) => {
          if (data.quantity > 0) return <Items key={data.id} {...data} />;
        })}

        <h3> total ammoun is {totalAmount}Tk.</h3>
        <Link to="/checkout">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => clearCart()}
          >
            Check Out
          </button>
        </Link>
        <br />
        <br />
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => clearCart()}
        >
          Clear Cart
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <Products />{" "}
      </div>
    );
  }
}
