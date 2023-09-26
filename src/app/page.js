import Link from "next/link";
import { productApi } from "../endpoint";
import { ProductContainer } from "../feature";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="#ff5300"
        >
          <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
        </svg>
        My cart
      </Link>
      <hr />
      <div>
        {product.length > 0 ? (
          product.map((_product) => (
            <div className="list" key={_product.id}>
              <ProductContainer item={_product} />
            </div>
          ))
        ) : (
          <span>Empty Product</span>
        )}
      </div>
    </main>
  );
}
