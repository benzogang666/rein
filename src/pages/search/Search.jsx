import "./Search.css";
import { IoClose, IoArrowForward } from "react-icons/io5";
import { useState, useMemo } from "react";
import { useProducts } from "../../contexts/productsContext/productsContext";
import MC from "../../components/cards/mini-card/Mini-Card";

const Search = () => {
  const products = useProducts();
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.categories.flatMap(
      ({ name: categoryName, subcategories }) =>
        subcategories
          .map(({ name: subcategoryName, items }) => ({
            categoryName,
            subcategoryName,
            items: items.filter(({ name }) =>
              name.toLowerCase().includes(query.trim().toLowerCase())
            ),
          }))
          .filter(({ items }) => items.length > 0)
    );
  }, [query, products]);

  return (
    <>
      <div className="search">
        <div className="search-dashboard">
          <input
            className="search-field"
            value={query}
            placeholder="Название блюда..."
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Поле поиска"
          />
          <IoClose
            className="search-clear"
            onClick={() => setQuery("")}
            aria-label="Очистить поиск"
          />
        </div>

        <div className="search-storage">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(({ categoryName, subcategoryName, items }) => (
              <div
                className="search-storage-section"
                key={`${categoryName}-${subcategoryName}`}
              >
                <div className="search-storage-section-named">
                  {categoryName} <IoArrowForward /> {subcategoryName}
                </div>
                {items.map((item) => (
                  <MC round={[item]} key={item.id} />
                ))}
              </div>
            ))
          ) : (
            <div className="search-empty">Ничего не найдено</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;