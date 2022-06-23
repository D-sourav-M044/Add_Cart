import { createContext, useEffect, useReducer } from "react";
import classes from "../../styles/Layout.module.css";
import ContextCart from "../context/ContextCart";
import datas from "../data";
import Nav from "../Nav";
import { Reducer } from "../reducer/Reducer";

export const cartContex = createContext();

export const initalState = {
  item: datas,
  totalAmmount: 0,
  totalItem: 0,
  cart: 0
};

export default function Cart() {
  const [state, dispatch] = useReducer(Reducer, initalState);

  const addItem = (id) => {
    return dispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  };

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };


  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  // increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };
  const buttonClick = (cart) => {
    return dispatch({
        type: "BUTTON",
        payload: cart,
        
      });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    
    
  }, [state.item]);
  return (
    <>
      <main className={classes.main}>
        <div className={classes.container}>
          <cartContex.Provider
            value={{ ...state,addItem, removeItem, clearCart, increment, decrement, buttonClick }}
          >
            <Nav />
            <ContextCart />
          </cartContex.Provider>
        </div>
      </main>
    </>
  );
}
