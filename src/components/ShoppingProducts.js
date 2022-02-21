function ShoppingProducts({products}){

  const onClick = () =>{
    console.log(products)
  }
  
  
    return (
        <div className="shopping-products">
      <table>
          <thead>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Add to cart</th>
          </thead>
          <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={onClick}>Add to cart</button>               
              </td>
            </tr>
          ))}
          </tbody>
      </table>
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
    )
}
//tarea: 
export default ShoppingProducts;