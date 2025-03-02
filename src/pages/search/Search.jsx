import "./Search.css";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useProducts } from "../../contexts/productsContext/productsContext";
import MC from "../../components/cards/mini-card/Mini-Card";

const Search = () => {
  const products = useProducts();
  const [query, setQuery] = useState("");

  const filteredProducts = products.categories.flatMap(({ subcategories }) =>
    subcategories
      .map(({ name, items }) => ({
        name,
        items: items.filter(({ name }) =>
          name.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter(({ items }) => items.length)
  );

  return (
    <>
      <div className="search">
        <div className="search-dashboard">
          <input
            className="search-field"
            value={query}
            placeholder="Название блюд..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <IoClose className="search-clear" onClick={() => setQuery("")} />
        </div>

        <div className="search-storage">
          {filteredProducts.map(({ name, items }) => (
            <div key={name}>
              <div>{name}</div>
              <br />
              <MC round={items} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;