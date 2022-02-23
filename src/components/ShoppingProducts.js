function ShoppingProducts({ products, onClickAddCart }) {
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

    </div>
  );
}
//tarea:
export default ShoppingProducts;
