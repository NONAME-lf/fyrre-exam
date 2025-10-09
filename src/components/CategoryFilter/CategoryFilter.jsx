import { useEffect, useState } from "react";

export default function CategoryFilter(props) {
  const [categoryData, setCategoryData] = useState(null);

  return (
    <div className="categories-filter">
      <h4>Categories</h4>
      <ul className="categories">
        <li>
          <button className="btn">All</button>
        </li>
        {}
      </ul>
    </div>
  );
}
