import { useState } from "react";
import jsonData from "../data.json";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const { products, setProducts } = props;
  const productsFiltered = (searchInput) => {
    const filteredArray = jsonData.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setProducts(filteredArray);
  };
  const inStockArray = (value) => {
    if (value === true) {
      const filteredStockArray = products.filter(
        (product) => product.inStock === true
      );
      setProducts(filteredStockArray);
      return filteredStockArray;
    } else {
      return setProducts(jsonData);
    }
  };
  return (
    <div>
      <div>
        <label>Search</label>
        <br />
        <input
          className="search-bar"
          type="text"
          onChange={(e) => {
            productsFiltered(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <input
          type="checkBox"
          onChange={(e) => {
            inStockArray(e.target.checked);
          }}
        />
        Only show products in stock
      </div>
    </div>
  );
}

export default SearchBar;
