import { MyCart, ClearCart, Checkout } from "../../component";
import { cartApi } from "../../endpoint";
import Link from "next/link";

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
      <Link className="link" href="../">
        Back to Home
      </Link>
      <div className="column">
        {cart.map((_product) => (
          <div key={_product.id}>
            <MyCart item={_product} />
          </div>
        ))}
      </div>
      <ClearCart cart={cart} />
      <Checkout cart={cart} />
    </main>
  );
}
