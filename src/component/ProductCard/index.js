import styles from "./styles.module.css";

export const ProductCard = ({ item }) => (
  <div className={styles.card}>
    <h1 className="text-3xl font-bold underline">{item.name}</h1>
    <p>Price {item.price.toFixed(2)}</p>
    <p>Amount Inventory {item.stock} unit</p>
  </div>
);
