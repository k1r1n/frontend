"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { cartApi, stockApi } from "../../endpoint";
import { currency } from "../../util/money";

export const MyCart = ({ item }) => {
  const [count, setCount] = useState(item.count);

  const updateStock = async (value) => {
    await fetch(`${stockApi}/${item.product_id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        count: value,
      }),
    });
  };

  const updateItem = async (value) => {
    await fetch(`${cartApi}/${item.product_id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: value,
    });
  };

  const onCount = (value) => {
    if (count + value <= item.stock && count + value >= 1) {
      setCount(count + value);
      updateItem(count + value);
    }
  };

  const onRemove = async () => {
    await fetch(`${cartApi}/${item.id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    updateStock(item.stock + item.count);
  };

  return (
    <div className={styles.list}>
      <div>
        <h1 className="text-3xl font-bold underline">{item.name}</h1>
        <p>Price: {currency().format(item.price)}</p>
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
      </div>
      <button className={styles.remove} onClick={onRemove}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="red"
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
      </button>
    </div>
  );
};
