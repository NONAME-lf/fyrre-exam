import { NavLink } from "react-router";
import ArticleItem from "../ArticleCard/ArticleCard";
import "./style.scss";

export default function ArticleSection(props) {
  return (
    <>
      <ul className="articles">
        {props.articles.map((article) => {
          return (
            <li key={article.id} className="article-item">
              <ArticleItem article={article} />
            </li>
          );
        })}
      </ul>
      <NavLink to="/magazine">All Articles</NavLink>
      <div className="sidebar"></div>
    </>
  );
}
