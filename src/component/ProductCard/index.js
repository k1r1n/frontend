import styles from "./styles.module.css";
import { currency } from "../../util/money";

export const ProductCard = ({ item, onCount, count, onAddToCart }) => (
  <div className={item.stock > 0 ? styles.list : styles.disabled}>
    <div>
      <h1 className="text-3xl font-bold underline">{item.name}</h1>
      <p>Price: {currency().format(item.price)}</p>
      {Number(item.stock) === 0 ? (
        <p className={styles.soldout}>Sold out</p>
      ) : (
        <>
          <p>
            Count :
            <span>
              <button className={styles.button} onClick={() => onCount(-1)}>
                -
              </button>
              {count}
              <button className={styles.button} onClick={() => onCount(+1)}>
                +
              </button>
            </span>
            <span className={styles.max}>Maximum {item.stock}</span>
          </p>
          <br />
          <button className={styles.add} onClick={onAddToCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="#fff"
            >
              <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM280-280q-45 0-69-39.5t-1-78.5l54-98-144-304H40v-80h131l170 360h281l155-280 70 38-155 280q-11 20-29 31t-41 11H324l-44 80h480v80H280Z" />
            </svg>{" "}
            Add to cart
          </button>
        </>
      )}
    </div>
  </div>
);
