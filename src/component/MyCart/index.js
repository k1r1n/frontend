export const MyCart = ({ item }) => (
  <div>
    <h1 className="text-3xl font-bold underline">{item.name}</h1>
    <p>Price: {item.price.toFixed(2)}</p>
    <p>Count : {item.count}</p>
  </div>
);
