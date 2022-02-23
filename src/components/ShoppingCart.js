function ShoppingCart({cart, removeFromCart }) {
  const onClick =(product) => {
    removeFromCart(product)
  }

  return cart?.length !== 0 ? (
    <div className="shoping-cart">
      <table>
        <thead>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Remove from cart</th>
        </thead>
        <tbody>
          {cart?.map((product) => (
          <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
              <button onClick={() =>onClick(product)}>Remove from cart</button>
            </td>
          </tr>   
          ))}
        </tbody>
      </table>
    </div>
  ): ( 
    <h1 style={{textAlign: "center"}}>Cart is empty</h1>
  )
}

export default ShoppingCart;
