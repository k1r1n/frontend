"use client";
import { useState } from "react";
import { stockApi, cartApi } from "../../endpoint";
import { ProductCard } from "../../component";

export const ProductContainer = ({ item }) => {
  const [count, setCount] = useState(1);

  const updateStock = async () => {
    await fetch(`${stockApi}/${item.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        count: Number(item.stock) - count,
      }),
    });
  };

  const addCart = async () => {
    await fetch(`${cartApi}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        count,
        id: item.id,
      }),
    });
  };

  const onAddToCart = async () => {
    updateStock();
    addCart();
  };

  const onCount = (value) => {
    if (count + value <= item.stock && count + value >= 0) {
      setCount(count + value);
    }
  };

  return (
    <>
      <ProductCard
        item={item}
        count={count}
        onCount={onCount}
        onAddToCart={onAddToCart}
      />
    </>
  );
};
