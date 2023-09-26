import { ProductCard, AddToCart } from "../component";
import { productApi } from "../endpoint";
import Link from "next/link";

async function getData() {
  const response = await fetch(productApi);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Home() {
  const product = await getData();

  return (
    <main className="flex column">
      <Link className="link" href="./cart">
        Go to My Cart
      </Link>

      <div>
        {product.map((_product) => (
          <div className="list" key={_product.id}>
            <ProductCard item={_product} />
            <AddToCart item={_product} />
          </div>
        ))}
      </div>
    </main>
  );
}
