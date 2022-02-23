import "./App.css";
import {
  Header,
  ShoppingCart,
  ShoppingProducts,
  ShoppingTotal,
} from "./components";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      name: "Chicken",
      price: "$10",
      quantity: 2,
    },
    {
      name: "Beef",
      price: "$20",
      quantity: 3,
    },
    {
      name: "Tomato",
      price: "$10",
      quantity: 10,
    },
  ]);

  const onClickAddCart = (product) => {
     console.log(product);
  };

  const removeFromCart = (product) =>{
    console.log(product)
  }

  // We need to create a function to delete the product on the cart.
  // create a function onRemoveFromCart. Remember that we need to pass the product to the function.
  // call the function onRemoveFromCart in ShoppingCart component.

  return (
    <div className="App">
      <Header />
      <ShoppingProducts products={products} onClickAddCart={onClickAddCart}  />
      <ShoppingCart removeFromCart={removeFromCart}/>
      <ShoppingTotal />
    </div>
  );
}

export default App;
