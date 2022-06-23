import { Link } from "react-router-dom";
import cartimg from "../assets/images/cart.png";
import logo from "../assets/images/logo.jpg";
import classes from "../styles/Nav.module.css";
import mixClasses from "../styles/Mix.module.css";
import { cartContex } from "./pages/Cart";
import { useContext } from "react";

// import Account from "./Account";

export default function Nav() {
  const { item, clearCart, totalItem, cart, totalAmount, buttonClick } = useContext(cartContex);

  //console.log(cart);
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Manush Technologies" />
            <h3>Add to Cart {"&"} Place Order</h3>
          </Link>
        </li>
      </ul>
  
    <div className={mixClasses.cartIcon}>
    <button type="button" className="btn btn-primary btn-sm" onClick={()=>buttonClick(cart)} style={{border:"white",backgroundColor:"white"}}>
    <img src={cartimg} alt="cart" />
        <p style={{font:"bold", fontColor:"red"}}> {totalItem} </p>;
    </button>
    </div>
      
      {/* <Account /> */}
    </nav>
  );
}
