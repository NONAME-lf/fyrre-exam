import { useEffect, useState } from "react";
import "./style.scss";
import { getData } from "../../helpers";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function LatestSection(props) {
  const [typeData, setTypeData] = useState(null);

  useEffect(() => {
    getData().then((res) => {
      const dataList =
        props.type === "magazine"
          ? res?.articles
          : props.type === "author"
          ? res?.authors
          : [];
      setTypeData(dataList || null);
    });
  }, [props]);

  useEffect(() => {
    console.log(typeData);
  }, [typeData]);

  return (
    <section className="latest-section">
      <SectionHeader
        title={props.type}
        highlight="See&nbsp;"
        text="All"
        type={props.type}
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
      </ul>
    </section>
  );
}
