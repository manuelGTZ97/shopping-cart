import "./App.css";
import { useState } from "react";
import {
  Header,
  ShoppingCart,
  ShoppingProducts,
  ShoppingTotal,
} from "./components";

// 1.- Dinmic Products table (Product description, Price, Quantity and Add to cart button)
// 2.- Shopping cart (Product description, Price and Remove from cart button)
// 3.- Total price

function App() {
  const [products, setProducts] = useState([
    {
      name: "Chicken",
      price: 10,
      quantity: 2,
    },
    {
      name: "Beef",
      price: 20,
      quantity: 3,
    },
    {
      name: "Tomato",
      price: 10,
      quantity: 10,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <ShoppingProducts products={products} />
      <ShoppingCart />
      <ShoppingTotal />
    </div>
  );
}

export default App;
