import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import "../index.css";

function FilteredProducts() {
  const { productData } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("all");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const { loggedUser } = useContext(ProductContext);
  const filteredProducts = productData.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchBrand = brand === "all" || product.brand === brand;

    const matchCategory = category === "all" || product.category === category;

    const matchMinPrice = minPrice === "" || product.price >= Number(minPrice);

    const matchMaxPrice = maxPrice === "" || product.price <= Number(maxPrice);
    return (
      matchSearch &&
      matchBrand &&
      matchMaxPrice &&
      matchMinPrice &&
      matchCategory
    );
  });
  return (
    <div className="shopPage">
      <div className="sideBar">
        <SearchBar search={search} setSearch={setSearch} />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="sideBarOptions"
        >
          <option value="all">All category</option>
          <option value="Smartphones">SmartPhones</option>
          <option value="Laptops">Laptops</option>
          <option value="Tablets">Tablets</option>
          <option value="Audio">Audio</option>
          <option value="Smartwatches">Smartwatches</option>

          <option value="Accessories">Accessories</option>

          <option value="Electronics">Electronics</option>
        </select>

        <select
          value={brand}
          className="sideBarOptions"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="all">All brands</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Dell">Dell</option>
          <option value="HP">HP</option>

          <option value="OnePlus">OnePlus</option>

          <option value="Xiaomi">Xiaomi</option>

          <option value="Google">Google</option>

          <option value="Sony">Sony</option>
          <option value="Anker">Anker</option>
          <option value="JBL">JBL</option>
        </select>

        {loggedUser?.role !== "admin" && (
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min price"
            className="sideBarInputs"
          />
        )}

        {loggedUser?.role !== "admin" && (
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max price"
            className="sideBarInputs"
          />
        )}
      </div>
      <div className="AllProductsContainer">
        {filteredProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
export default FilteredProducts;
