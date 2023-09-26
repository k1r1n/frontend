"use client";
import styles from "./styles.module.css";
import { stockApi } from "../../endpoint";
import axios from "axios";

export const Checkout = ({ cart }) => {
  const onCheckout = async () => {
    const cartId = cart[0].id;
    const data = await axios(`${stockApi}/${cartId}`, {
      method: "delete",
      headers: {
        accept: "application/json",
      },
    });
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

  return (
    <>
      Total price: {cart.reduce((a, _cart) => a + _cart.price, 0).toFixed(2)}
      <button className={styles.button} onClick={onCheckout}>
        Checkout
      </button>
    </>
  );
};
