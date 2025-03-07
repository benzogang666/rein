import "./Search.css";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useProducts } from "../../contexts/productsContext/productsContext";
import MC from "../../components/cards/mini-card/Mini-Card";

const Search = () => {
  const products = useProducts();
  const [query, setQuery] = useState("");

  const filteredProducts = products.categories.flatMap(
    ({ name: categoryName, subcategories }) =>
      subcategories.flatMap(({ name: subcategoryName, items }) =>
        items
          .filter(({ name }) =>
            name.toLowerCase().includes(query.toLowerCase())
          )
          .map((item) => ({
            categoryName,
            subcategoryName,
            item,
          }))
      )
  );

  return (
    <div className="search">
      <div className="search-dashboard">
        <input
          className="search-field"
          value={query}
          placeholder="Название блюда..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <IoClose className="search-clear" onClick={() => setQuery("")} />
      </div>

      <div className="search-storage">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(({ categoryName, subcategoryName, item }) => (
            <div className="search-storage-section" key={item.id}>
              {categoryName} = {subcategoryName}
              <MC round={[item]} />
            </div>
          ))
        ) : (
          <div className="search-empty">Ничего не найдено</div>
        )}
      </div>
    </div>
  );
};

export default Search;