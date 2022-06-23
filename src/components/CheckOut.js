import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import classes from "../styles/Nav.module.css";
import Lclasses from "../styles/Layout.module.css";
import Carty from "./pages/Carty";
export default function CheckOut() {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/" className={classes.brand}>
              <img src={logo} alt="Manush Technologies" />
              <h3>Add to Cart {"&"} Place Order</h3>
            </Link>
          </li>
        </ul>
      </nav>

        <main className={Lclasses.main}>
        <div className={Lclasses.container}>
            Your order has been placed . Thank You.
            
            </div>
      </main>
    </>
  );
}
