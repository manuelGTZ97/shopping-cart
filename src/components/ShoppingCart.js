function ShoppingCart({cart, removeFromCart }) {
  const onClick =(product) => {
    removeFromCart(product)
  }

  return cart?.length !== 0 ? (
    <div className="shoping-cart">
      <table>
        <thead>
          <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Remove from cart</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((product, index) => (
          <tr key={index}> 
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
  ): 
  ( 
    <h1 style={{textAlign: "center"}}>Cart is empty</h1>
  )
}

export default ShoppingCart;
