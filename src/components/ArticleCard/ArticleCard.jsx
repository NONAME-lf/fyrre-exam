import "./style.scss";
import { useEffect, useState } from "react";
import { getImagePath } from "../../helpers";

export default function ArticleCard(props) {
  const [imagePath, setImagePath] = useState(null);
  const [orientation, setOrientation] = useState("horizontal");

  const image = () => {
    if (!props.article?.img) {
      return false;
    }
    setImagePath(getImagePath(`${props.article.img}`));
  };

  useEffect(() => {
    setOrientation(props.orientation || "horizontal");
    image();
  }, [props]);
  return (
    <>
      <article className={`article-card ${orientation}`}>
        <div className="image">
          <div className="img-wrap">
            <img
              src={imagePath}
              alt={`${props.article.title} image`}
              onError={() =>
                setImagePath("/fyrre-exam/src/assets/img/no-image.jpg")
              }
            />
          </div>
        </div>
        <div className="content">
          <div className="text">
            <h3>{props.article.title}</h3>
            <p>{props.article.text}</p>
          </div>
          <div className="info">
            <ul>
              <li>
                <span className="param">Text:</span>
                {props.article.author}
              </li>
              <li>
                <span className="param">Date:</span>
                {props.article.date}
              </li>
              <li>
                <span className="param">Duration:</span>
                {props.article.timeToRead}
              </li>
            </ul>
            <span className="label">{props.article.category}</span>
          </div>
        </div>
      </article>
    </>
  );
}
