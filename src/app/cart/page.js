import Link from "next/link";
import { MyCart, ClearCart, Checkout } from "../../component";
import { cartApi } from "../../endpoint";
import styles from "../../component/Checkout/styles.module.css";

async function getData() {
  const response = await fetch(cartApi);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Home() {
  const cart = await getData();

  return (
    <main className="column">
      <Link className="link left" href="../">
        Back to Home
      </Link>
      <hr />
      <div className="column">
        {cart.map((_product) => (
          <div key={_product.id}>
            <MyCart item={_product} />
          </div>
        ))}
      </div>
      {cart.length > 0 ? (
        <>
          <ClearCart cart={cart} />
          <Link href="./checkout" className={styles.goto}>
            Go to Check out
          </Link>
        </>
      ) : (
        <>
          <span>Empty cart</span>
        </>
      )}
    </main>
  );
}
