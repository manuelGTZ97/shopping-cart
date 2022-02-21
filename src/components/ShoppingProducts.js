function ShoppingProducts({ products, onClickAddCart }) {
  // info what?
  // change the param name to a specific one.
  const onClick = (productInfo) => {
    onClickAddCart(productInfo);
  };

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
                {/* You need to use onClick={() => onClick(PRODUCT OBJECT AS PARAMETER)}*/}
                <button onClick={() => onClick(product)}>Add to cart</button>
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
  );
}
//tarea:
export default ShoppingProducts;
