"use client";
import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { stockApi } from "../../endpoint";

export const AddToCart = ({ item }) => {
  const [count, setCount] = useState(1);

  const onAddToCart = async () => {
    const data = await fetch(`${stockApi}/${item.id}`, {
      method: "put",
      headers: {
        accept: "application/json",
      },
      body: JSON.stringify({
        count: 999,
      }),
    });
    let result = await data.json();
    // try {
    //   const response = await fetch(`${stockApi}/${item.id}`, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       id: 0,
    //       product_id: "string",
    //       count: 444,
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error(`Error! status: ${response.status}`);
    //   }

    //   const result = await response.json();
    //   return result;
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const onCount = (value) => {
    if (count + value <= item.stock && count + value >= 0) {
      setCount(count + value);
    }
  };

  return (
    <>
      <span>
        <button
          className={styles.button}
          disabled={count === 0}
          onClick={() => onCount(-1)}
        >
          -
        </button>
        {count}
        <button
          className={styles.button}
          disabled={count === 0}
          onClick={() => onCount(+1)}
        >
          +
        </button>
      </span>
      <button
        className={styles.add}
        disabled={count === 0}
        onClick={onAddToCart}
      >
        Add to cart
      </button>
    </>
  );
};
