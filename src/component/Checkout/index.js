"use client";
import styles from "./styles.module.css";
import { stockApi, cartApi } from "../../endpoint";
import { currency } from "../../util/money";

export const Checkout = ({ cart, summary }) => {
  const updateStock = async () => {
    for (const [index, data] of Object.entries(cart)) {
      await fetch(`${stockApi}/${data.product_id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          count: Number(data.stock) - data.count,
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

  const onCheckout = async () => {
    await updateStock();
    await deleteCart();
  };

  return (
    <>
      <hr />
      <span className={styles.total}>
        <div>Total price</div>
        <div className={styles.sum}>{currency().format(summary)}</div>
      </span>
      <button className={styles.button} onClick={onCheckout}>
        Check out
      </button>
    </>
  );
};
