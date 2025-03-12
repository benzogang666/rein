import "./Menu.css";
import { LuLayoutGrid, LuEqual, LuLayoutList } from "react-icons/lu";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useProducts } from "../../contexts/productsContext/productsContext";
import CC from "../../components/cards/col-card/Col-Card";
import RC from "../../components/cards/row-card/Row-Card";
import MC from "../../components/cards/mini-card/Mini-Card";

const Menu = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const products = useProducts();

  const firstCategory = products.categories[0];
  const firstSubcategory = firstCategory?.subcategories[0];

  useEffect(() => {
    if (!category || !subcategory)
      navigate(`/menu/${firstCategory?.slug}/${firstSubcategory?.slug}`, {
        replace: true,
      });
  }, [category, subcategory, firstCategory, firstSubcategory, navigate]);

  const [view, setView] = useState("mini");

  const section =
    products.categories
      .find((c) => c.slug === category)
      ?.subcategories.find((s) => s.slug === subcategory)?.items || [];

  return (
    <div className="menu">
      <div className="categories">
        {products.categories.map((line) => (
          <div
            key={line.slug}
            className="category"
            onClick={() =>
              navigate(
                `/menu/${line.slug}/${line.subcategories[0]?.slug || ""}`
              )
            }
          >
            <div className="category-image"></div>
            <div className="category-name">{line.name}</div>
          </div>
        ))}
      </div>
      <div className="sub-categories">
        {products.categories
          .find((c) => c.slug === category)
          ?.subcategories.map((line) => (
            <div
              key={line.slug}
              className={`sub-category ${
                subcategory === line.slug ? "active-sub-category" : ""
              }`}
              onClick={() => navigate(`/menu/${category}/${line.slug}`)}
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
            <div className="col-cards">
              <CC round={section} />
            </div>
          ) : view === "row" ? (
            <div className="row-cards">
              <RC round={section} />
            </div>
          ) : (
            <div className="mini-cards">
              <MC round={section} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;