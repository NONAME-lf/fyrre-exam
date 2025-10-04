import ArticleItem from "../ArticleCard/ArticleCard";
import "./style.scss";
import HoverLink from "../HoverLink/HoverLink";

export default function ArticleSection(props) {
  return (
    <section className="articles-section">
      <ul className="articles">
        {props.articles.map((article) => {
          return (
            <li key={article.id} className="article-item">
              <ArticleItem article={article} />
            </li>
          );
        })}
      </ul>
      <HoverLink to="/magazine" highlight="All" text={" Articles"} icon="" />
      <div className="sidebar"></div>
    </section>
  );
}
