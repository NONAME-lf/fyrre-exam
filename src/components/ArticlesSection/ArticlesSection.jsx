import ArticleItem from "../ArticleCard/ArticleCard";
import "./style.scss";
import HoverLink from "../HoverLink/HoverLink";
import ArticleSidebar from "../ArticleSidebar/ArticleSidebar";

export default function ArticleSection(props) {
  return (
    <section className="articles-section">
      <div className="section-content">
        <ul className="articles">
          {props.articles.map((article) => {
            return (
              <li key={article.id} className="article-item">
                <ArticleItem article={article} />
              </li>
            );
          })}
        </ul>
        <ArticleSidebar />
      </div>
      <HoverLink
        to="/magazine"
        highlight="All&nbsp;"
        text={"Articles"}
        icon=""
      />
    </section>
  );
}
