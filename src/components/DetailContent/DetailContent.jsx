import { useEffect, useState } from "react";
import DetailContentSideBar from "../DetailContentSidebar/DetailContentSidebar";
import "./style.scss";
import { getData } from "../../helpers";

export default function DetailContent(props) {
  const [authorData, setAuthorData] = useState(null);

  //   console.log(props);

  useEffect(() => {
    if (!props.item?.authorId) return;
    getData().then((res) => {
      const author = res?.authors?.find(
        (athr) => +athr.id === +props.item.authorId
      );
      setAuthorData(author || null);
    });
  }, [props]);

  return (
    <section className="detail-content">
      <DetailContentSideBar authorData={authorData} articleData={props.item} />
      <ul className="detail-content-text">
        {props.item?.content.mainText.map((text, index) => {
          if (text.medium) {
            return (
              <li key={index}>
                <p className="medium">{text.medium}</p>
              </li>
            );
          } else if (text.normal) {
            return (
              <li key={index}>
                <p className="normal">{text.normal}</p>
              </li>
            );
          } else if (text.quote) {
            return (
              <li key={index}>
                <div className="quote-block">
                  <div className="quotation">“</div>
                  <blockquote>
                    {text.quote.text}
                    <span className="quote-author">{text.quote.author}</span>
                  </blockquote>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
}
