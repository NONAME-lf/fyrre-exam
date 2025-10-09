import ArticleItem from "../ArticleCard/ArticleCard";
import "./style.scss";
import HoverLink from "../HoverLink/HoverLink";
import ArticleSidebar from "../ArticleSidebar/ArticleSidebar";
import { use, useEffect } from "react";

export default function ArticleSection(props) {
  const isRwdWidth = () => {
    if (!document.querySelector(".article-section .article-card")) return;
    const width = document.body.clientWidth;
    if (width <= 1232) {
      document
        .querySelectorAll(".article-section .article-card")
        .forEach((card) => {
          card.classList.remove("horizontal");
          card.classList.add("vertical");
        });
    } else {
      document
        .querySelectorAll(".article-section .article-card")
        .forEach((card) => {
          card.classList.remove("vertical");
          card.classList.add("horizontal");
        });
    }
  };

  useEffect(() => {
    // Call initially even without resize event
    isRwdWidth();

    window.addEventListener("resize", () => {
      isRwdWidth();
    });
    return () => {
      window.removeEventListener("resize", isRwdWidth);
    };
  }, [props]);
  return (
    <section className={`articles-section ${props.orientation}`}>
      <div className={`section-content ${props.sidebar ? "sidebar" : ""}`}>
        <ul className="articles">
          {props.articles.map((article) => {
            return (
              <li key={article.id} className="article-item">
                <ArticleItem
                  article={article}
                  orientation={props.orientation}
                />
              </li>
            );
          })}
        </ul>
        {props.sidebar && <ArticleSidebar />}
      </div>
      {!props.nolink && (
        <HoverLink
          to="/magazine"
          highlight="All&nbsp;"
          text={"Articles"}
          icon=""
          uppercase
          bold
        />
      )}
    </section>
  );
}
