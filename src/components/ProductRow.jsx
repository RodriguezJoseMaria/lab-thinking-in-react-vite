function ProductRow(props) {
  const { category, price, inStock, name, id } = props.product;
  //   const colorRed = style={color: 'red'}
  return (
    <tr>
      <td style={inStock ? { color: "black" } : { color: "red" }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
