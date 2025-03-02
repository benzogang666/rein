import "./Menu.css";

import { LuLayoutGrid, LuEqual, LuLayoutList } from "react-icons/lu";

import { useState } from "react";

import { useParams, useNavigate } from "react-router";

import { useProducts } from "../../contexts/productsContext/productsContext";

import CC from "../../components/cards/col-card/Col-Card";
import RC from "../../components/cards/row-card/Row-Card";
import MC from "../../components/cards/mini-card/Mini-Card";

const Menu = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const products = useProducts();

  const isCategory =
    products.categories.find((c) => c.slug === category) ||
    products.categories[0];

  const isSubCategory =
    isCategory.subcategories.find((s) => s.slug === subcategory) ||
    isCategory.subcategories[0];

  const [view, setView] = useState("mini");

  return (
    <div className="menu">
      <div className="categories">
        {products.categories.map((line) => (
          <div
            className="category"
            onClick={() =>
              navigate(`/menu/${line.slug}/${line.subcategories[0].slug}`)
            }
            key={line.slug}
          >
            <div className="category-image"></div>
            <div className="category-name">{line.name}</div>
          </div>
        ))}
      </div>

      <div className="sub-categories">
        {isCategory.subcategories.map((line) => (
          <div
            className={`sub-category ${
              isSubCategory.slug === line.slug ? "active-sub-category" : ""
            }`}
            onClick={() => navigate(`/menu/${isCategory.slug}/${line.slug}`)}
            key={line.slug}
          >
            {line.name}
          </div>
        ))}
      </div>

      <div className="menu-products">
        <div className="menu-product-views">
          <LuLayoutList onClick={() => setView("col")} />
          <LuEqual onClick={() => setView("mini")} />
          <LuLayoutGrid onClick={() => setView("row")} />
        </div>
        <div className="menu-product-cards">
          {view === "col" ? (
            <CC round={isSubCategory.items} />
          ) : view === "row" ? (
            <RC round={isSubCategory.items} />
          ) : (
            <MC round={isSubCategory.items} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;