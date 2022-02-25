import "./App.css";
import {
  Header,
  ShoppingCart,
  ShoppingProducts,
  ShoppingTotal,
} from "./components";
import { useState, useEffect } from "react";



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
  const [total, setTotal] =useState(0);

  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    const initialValue = 0;
    const totalPrice = cart.reduce((prevPrice, currentPrice) => prevPrice + currentPrice.price, initialValue);
    console.log(totalPrice)
    setTotal(totalPrice)
  }, [cart, total,])

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
      <ShoppingTotal total={total}/>
    </div>
  );
}

export default App;
