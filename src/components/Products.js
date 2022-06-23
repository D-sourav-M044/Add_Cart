import classes from "../styles/Products.module.css";
import datas from "./data";
import Product from "./Product";
import { cartContex } from "./pages/Cart";
import { useContext } from "react";


export default function Producuts() {
  const { item, clearCart, cart, addItem, totalItem, totalAmount } =
    useContext(cartContex);

  return (
     <div className={classes.products}>
   
      {datas.map((data) => {
        return (
         
              <Product
                title={data.title}
                image={data.image}
                price={data.price}
                addItem={addItem}
                id={data.id}
                key={data.id}
              />
           
        );
      })}
    </div>
  );
}
