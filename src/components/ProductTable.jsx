import ProductRow from "./ProductRow";

function ProductTable(props) {
  return (
    <div className="center">
      <table className="table">
        <thead>
          <th>Name</th>
          <th>Price</th>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
