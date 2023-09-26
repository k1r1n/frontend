import Link from "next/link";
import { Checkout } from "../../component";
import { cartApi } from "../../endpoint";

async function getData() {
  const response = await fetch(cartApi);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Home() {
  const cart = await getData();
  const summary = cart.reduce((a, _cart) => a + _cart.price * _cart.count, 0);

  return (
    <main className="column">
      <Link className="link left" href="./cart">
        Back to Cart
      </Link>
      <Checkout summary={summary} cart={cart} />
    </main>
  );
}
