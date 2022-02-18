import "./App.css";

// 1.- Products table (Product description, Price, Quantity and Add to cart button)
// 2.- Shopping cart (Product description, Price and Remove from cart button)
// 3.- Total price

function App() {
  return (
    <div className="App">
      <header className="shoping-header">
        <h1>Shopping Cart</h1>
      </header>
      <div className="shoping-products">
        <table>
          <thead>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Add to cart</th>
          </thead>
          <tbody>
            <tr>
              <td>Chicken</td>
              <td>$10</td>
              <td>2</td>
              <td>
                <button>Add to cart</button>
              </td>
            </tr>
            <tr>
              <td>Beef</td>
              <td>$20</td>
              <td>3</td>
              <td>
                <button>Add to cart</button>
              </td>
            </tr>
            <tr>
              <td>Tomato</td>
              <td>$10</td>
              <td>10</td>
              <td>
                <button>Add to cart</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="shoping-cart">
        <table>
          <thead>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove from cart</th>
          </thead>
          <tbody>
            <tr>
              <td>Empty</td>
              <td>0</td>
              <td>0</td>
              <td>
                <button>Remove from cart</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="shoping-total">
        <h2>Total: $0</h2>
      </div>
    </div>
  );
}

export default App;
