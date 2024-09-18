import styles from "./Product.module.css";

import { useState } from "react";
import Card from "./Card";
import ViewList from "./ViewList";

function Product() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState("Banana");
  const [price, setPrice] = useState(2.99);
  const [list, setList] = useState([]);
  const [rating, setRating] = useState(0);

  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };

  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      return count;
    });
  };

  const handlerChangeName = (value) => {
    setName(value);
  };

  const handlerChangePrice = (value) => {
    setPrice(value);
  };

  const handlerAddProduct = () => {
    const newItem = {
      name: name,
      price: price,
      rating: rating,
      count: count,
      discount: discount,
      totalDistPrice: calculateDistPrice(),
      totalOrgPrice: calculateOrgPrice(),
    };
    setList((prevList) => {
      return [...prevList, newItem];
    });
    console.log("handlerAddProduct");
  };

  const handlerRating = (value) => {
    setRating(value);
  };

  // calculate cost of 1 line item with discount
  const calculateDistPrice = () => {
    return discount === 0
      ? (price * count).toFixed(2)
      : ((price * 1 - discount / 100) * count).toFixed(2);
  };

  // calculate cost of all items before discount
  const calculateOrgPrice = () => {
    return (price * count).toFixed(2);
  };

  // calculate cost of all items after discount
  const calculateAllDiscountedPrice = (list) => {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
      total += Number(list[i].totalDistPrice); // Convert string to number
    }

    return total.toFixed(2); // Return as string formatted to 2 decimal places
  };

  const overallDiscountedPrice = calculateAllDiscountedPrice(list);

  // calculate cost of all items before discount
  const calculateAllPrice = (list) => {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
      total += Number(list[i].totalOrgPrice); // Convert string to number
    }
    return total.toFixed(2); // Return as string formatted to 2 decimal places
  };

  const overallPrice = calculateAllPrice(list);

  // calculate total savings
  const savings = (
    Number(overallPrice) - Number(overallDiscountedPrice)
  ).toFixed(2);

  return (
    <div className={styles.container}>
      <Card
        name={name}
        count={count}
        discount={discount}
        price={price}
        rating={rating}
        handlerPlus={handlerPlus}
        handlerMinus={handlerMinus}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
        handlerRating={handlerRating}
      />
      <ViewList
        list={list}
        overallDiscountedPrice={overallDiscountedPrice}
        overallPrice={overallPrice}
        savings={savings}
      />
    </div>
  );
}
export default Product;
