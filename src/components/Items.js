import { useContext } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import deleteimg from "../assets/images/delete.png";
import { cartContex } from "./pages/Cart";
export default function Items({
  id,
  title,
  price,
  description,
  image,
  quantity,
}) {
  const { removeItem, increment, decrement } = useContext(cartContex);
  price = price * quantity;
  price.toFixed(2);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <img
            src={image}
            alt="iamge"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="col-sm">{title}</div>
        <div className="col-sm">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => decrement(id)}
          >
            -
          </button>
          {/* <p className=ame={mixClasses.pText}>{10}</p> */}
          <input
            type="text"
            placeholder={quantity}
            style={{ width: "25px", height: "25px", textAlign: "center" }}
          />
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => increment(id)}
          >
            +
          </button>
        </div>
        <div className="col-sm">{price}</div>
        <div className="col-sm">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => removeItem(id)}
            style={{ background: "white", border: "white" }}
          >
            <img
              src={deleteimg}
              style={{ background: "red", height: "25px", width: "20px" }}
              alg="delete"
            />
          </button>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );
}
