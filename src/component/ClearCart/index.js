"use client";
import styles from "./styles.module.css";
import { cartApi, stockApi } from "../../endpoint";

export const ClearCart = ({ cart }) => {
  const updateStock = async () => {
    for (const [index, data] of Object.entries(cart)) {
      await fetch(`${stockApi}/${data.product_id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          count: Number(data.stock) + Number(data.count),
        }),
      });
    }
  };

  const deleteCart = async () => {
    for (const [index, data] of Object.entries(cart)) {
      await fetch(`${cartApi}/${data.id}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };

  const onAddToCart = async () => {
    await updateStock();
    await deleteCart();
  };

  return (
    <>
      <button className={styles.button} onClick={onAddToCart}>
        Clear all my cart
      </button>
    </>
  );
};
