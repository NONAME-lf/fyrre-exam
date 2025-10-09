import SiteButton from "../SiteButton/SiteButton";
import SiteForm from "../SiteForm/SiteForm";
import { useEffect, useState } from "react";
import { getData, getImagePath } from "../../helpers";
import "./style.scss";
import { NavLink } from "react-router";

export default function ArticleSidebar() {
  const [sidebarData, setSidebarData] = useState(null);
  const [articlesData, setArticlesData] = useState(null);
  const [mostPopularArticle, setMostPopularArticle] = useState(null);

  useEffect(() => {
    getData().then((data) => {
      setSidebarData(data.sidebar);
    });
    getData().then((data) => {
      setArticlesData(data.articles);
    });
  }, []);

  useEffect(() => {
    if (!sidebarData || !articlesData) return;
    setMostPopularArticle(
      articlesData
        .filter((article) => {
          return article.popularity >= 8;
        })
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 3)
    );
  }, [sidebarData, articlesData]);

  useEffect(() => {
    console.log(mostPopularArticle);
  }, [mostPopularArticle]);

  return (
    <div className="article-sidebar">
      <div className="magazine">
        <div className="info">
          <span>PrintMagazine</span>
          <h3>{sidebarData?.featuredMagazine?.date}</h3>
        </div>
        <div className="img-wrap">
          <img
            src={getImagePath(sidebarData?.featuredMagazine?.img)}
            alt="Featured Magazine image"
          />
        </div>
        <SiteButton to="/magazine" text="Order" className="dark" />
      </div>
      <div className="popular">
        <span>Most Popular</span>
        <ul>
          {mostPopularArticle?.map((item, key) => (
            <li key={item.id}>
              <div className="number">0{key + 1}</div>
              <div className="about">
                <NavLink to={`/article/${item.id}`} className="title-link">
                  <span className="title">{item.title}</span>
                  <span className="author">
                    Text<span>{item.author}</span>
                  </span>
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="newsletter">
        <SiteForm form={sidebarData?.form} />
      </div>
    </div>
  );
}
