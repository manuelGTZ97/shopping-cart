function ShoppingCart() {
  return (
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
  );
}

export default ShoppingCart;
