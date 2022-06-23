import { useContext } from "react";
import mixClasses from "../styles/Mix.module.css";
import { cartContex } from "./pages/Cart";
import deleteimg from "../assets/images/delete.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function Items({
  id,
  title,
  price,
  description,
  image,
  quantity,
}) {
  const { removeItem, increment, decrement } = useContext(cartContex);
  price = price*quantity;
  price.toFixed(2);
  return (
    
    <div class="container">
  <div class="row">
    <div class="col-sm">
    <img src={image} alt="iamge" style={{width : "100px", height:"100px"}}/>
    </div>
    <div class="col-sm">
      {title}
    </div>
    <div class="col-sm">
    <button type="button" className="btn btn-primary btn-sm" onClick={()=>decrement(id)}>
      -
    </button>
    {/* <p className={mixClasses.pText}>{10}</p> */}
    <input type="text" placeholder={quantity} style={{width: "25px",height:"25px", textAlign:"center"}}/>
    <button type="button" className="btn btn-primary btn-sm" onClick={()=>increment(id)}>
      +
    </button>
    </div>
    <div class="col-sm">
       {price}
    </div>
    <div class="col-sm">
    <button type="button" className="btn btn-primary btn-sm" onClick={()=>removeItem(id)} style={{background:"white", border:"white"}}>
        <img src = {deleteimg} style={{background:"red", height:"25px" , width: "20px"}} />
      </button>
    </div>
    <div class="col-sm">
     
    </div>
  </div>
</div>
  );
}
