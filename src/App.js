import "./App.css";
import {
  Header,
  ShoppingCart,
  ShoppingProducts,
  ShoppingTotal,
} from "./components";
import { useState } from "react";

// 1.- Products table (Product description, Price, Quantity and Add to cart button)
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

  const onClickAddCart = (product) => {
    // instead of name "products" we can use "product"
    // We need to log the product that you clicked.
    // e.g. console.log(product); not console.log(products);
    console.log(product);
  };

  // We need to create a function de delete the product from the cart.
  // create a function onRemoveFromCart. Remember that we need to pass the product to the function.
  // call the function onRemoveFromCart in ShoppingCart component.

  return (
    <div className="App">
      <Header />
      <ShoppingProducts products={products} onClickAddCart={onClickAddCart} />
      <ShoppingCart />
      <ShoppingTotal />
    </div>
  );
}

export default App;
