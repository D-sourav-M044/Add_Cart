import classes from "../styles/Product.module.css";

export default function Product({ id, image, title, price, addItem }) {
  return (
    <div className={classes.product}>
      <img src={image} alt={title} />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>price : {price}</p>
        <button type="button" onClick={() => addItem(id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
