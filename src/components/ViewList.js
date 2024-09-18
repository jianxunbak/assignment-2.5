import Rating from "./Rating";
import styles from "./ViewList.module.css";

const ViewList = ({
  list = [],
  overallDiscountedPrice,
  overallPrice,
  savings,
}) => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <Rating rating={item.rating} />
              </td>
              <td>${item.price}</td>
              <td>{item.discount}%</td>
              <td>{item.count} nos.</td>
              <td>${item.totalDistPrice}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="5">
              <strong>Total price before discount:</strong>
            </td>
            <td>
              <strong>${overallPrice}</strong>
            </td>
          </tr>
          <tr>
            <td colSpan="5">
              <strong>Total price after discount:</strong>
            </td>
            <td>
              <strong>${overallDiscountedPrice}</strong>
            </td>
          </tr>
          <tr>
            <td colSpan="5">
              <strong>Total Savings:</strong>
            </td>
            <td>
              <strong>${savings}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewList;
