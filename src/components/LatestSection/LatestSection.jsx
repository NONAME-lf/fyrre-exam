import { useEffect, useState } from "react";
import "./style.scss";
import { getData } from "../../helpers";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleCard from "../ArticleCard/ArticleCard";
import { useParams } from "react-router";

export default function LatestSection(props) {
  const [typeData, setTypeData] = useState(null);

  useEffect(() => {
    getData().then((res) => {
      const dataList = res?.articles;
      setTypeData(dataList || null);
      // console.log(dataList);
    });
  }, [props]);

  return (
    <section className="latest-section">
      <SectionHeader
        title={
          props.type === "magazine"
            ? "Latest Posts"
            : `Articles by ${props.itemData?.name}`
        }
        highlight="See&nbsp;"
        text="All"
        to={`/magazine`}
      />
      <ul className="latest-items">
        {typeData &&
          props.type === "magazine" &&
          typeData
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3)
            .map((article) => {
              return (
                <li key={article.id} className="latest-item">
                  <ArticleCard article={article} orientation="vertical" />
                </li>
              );
            })}
        {typeData &&
          props.type === "author" &&
          typeData
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .filter((article) => article.authorId === props.itemData?.id)
            .slice(0, 4)
            .map((article) => {
              return (
                <li key={article.id} className="latest-item">
                  <ArticleCard
                    article={article}
                    orientation="horizontal"
                    noAuthor
                    noText
                    noCategory
                  />
                </li>
              );
            })}
      </ul>
    </section>
  );
}
