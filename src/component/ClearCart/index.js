"use client";
import styles from "./styles.module.css";
import { cartApi } from "../../endpoint";
import axios from "axios";

export const ClearCart = ({ cart }) => {
  const onAddToCart = async () => {
    await fetch(`https://localhost:5001/api/cart/3`, {
      method: "put",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: 5,
    });
  };

  return (
    <>
      <button className={styles.button} onClick={onAddToCart}>
        Clear my cart
      </button>
    </>
  );
};
