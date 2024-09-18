import Button from "./Button";
import Input from "./Input";
import styles from "./Card.module.css";
import Rating from "./Rating";

const Card = ({
  name,
  handlerChangeName,
  handlerMinus,
  count,
  discount,
  handlerPlus,
  price,
  handlerChangePrice,
  handlerAddProduct,
  rating,
  handlerRating,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.counter}>
        <Button label="➖" onClick={handlerMinus} />
        <span className={styles.count}>{count}</span>
        <Button label="➕" onClick={handlerPlus} />
      </div>
      <div className={styles.price}>{`$ ${price}`} each</div>
      <div className={styles.discount}>{`Discount: ${discount}%`}</div>
      <div className={styles.form}>
        <Input value={name} label="Product Name" onChange={handlerChangeName} />
        <Input value={price} label="Price" onChange={handlerChangePrice} />
        <Input
          value={rating}
          label="Rating"
          type="number"
          onChange={handlerRating}
        />
        <Rating rating={rating} />
      </div>
      <Button label="Add Product" onClick={handlerAddProduct} />
    </div>
  );
};

export default Card;
