import jsonData from "../data.json";
import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductPage() {
  const [products, setProducts] = useState(jsonData);
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar setProducts={setProducts} products={products} />
      <br />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductPage;
