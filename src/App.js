import "./App.css";
import {
  Header,
  ShoppingCart,
  ShoppingProducts,
  ShoppingTotal,
} from "./components";
import { useState, useEffect } from "react";


function test() {
  let a = "hola";
  function b() {
    console.log(" hola");
  }
  return [a, b];
}
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
  const [total, setTotal] =useState();

  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    setTotal(0)
    console.log(total)
  }, [cart, total])

  const onClickAddCart = (product) => {
        setCart((prevState) => [...prevState, product])
  };

  const removeFromCart = (product) =>{
    setCart((prevState) => {
      return prevState?.filter((item) => item.name !== product.name)
    })
  }


  return (
    <div className="App">
      <Header />
      <ShoppingProducts products={products} onClickAddCart={onClickAddCart}  />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart}/>
      <ShoppingTotal total={total} products={products} />
    </div>
  );
}

export default App;
