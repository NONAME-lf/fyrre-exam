import { useEffect, useState } from "react";
import "./style.scss";
import FilterButton from "../FilterButton/FilterButton";

export default function CategoryFilter(props) {
  const [categoryData, setCategoryData] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("All");

  useEffect(() => {
    if (!props.articles) return;
    const tmp_categories = props.articles.map((article) => article.category);
    const unique_categories = ["All", ...new Set(tmp_categories)];
    setCategoryData(unique_categories);
  }, [props]);

  return (
    <div className="categories-filter">
      <h4>Categories</h4>
      <ul className="categories">
        {categoryData &&
          categoryData.map((category) => (
            <li key={category}>
              <FilterButton
                title={category}
                isActive={currentCategory === category}
                onClick={() => {
                  props.onchange(category);
                  setCurrentCategory(category);
                }}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
