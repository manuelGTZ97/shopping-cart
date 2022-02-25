function ShoppingTotal({total, products}) {


const initialValue = 0;
const totalPrice = products.reduce((prevPrice, currentPrice) => prevPrice + currentPrice.price, initialValue);

console.log(total);
// expected output: 40

  return (
    <div className="shoping-total">
      <h2>Total: ${total}</h2>
    </div>
  );
}

export default ShoppingTotal;
