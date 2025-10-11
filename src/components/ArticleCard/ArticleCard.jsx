import "./style.scss";
import { useEffect, useState } from "react";
import { getImagePath } from "../../helpers";
import { NavLink } from "react-router";

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
        <NavLink
          to={`/detail/magazine/${props.article.id}`}
          className="link-hover"
        >
          <div className="img-wrap">
            <img
              src={imagePath}
              alt={`${props.article.title} image`}
              loading="lazy"
              onError={() =>
                setImagePath("/fyrre-exam/src/assets/img/no-image.jpg")
              }
            />
          </div>
        </NavLink>
        <div className="content">
          <div className="text">
            <NavLink
              to={`/detail/magazine/${props.article.id}`}
              className="link-hover"
            >
              <h3>{props.article.title}</h3>
            </NavLink>
            {!props.noText && <p>{props.article.text}</p>}
          </div>
          <div className="info">
            <ul>
              {!props.noAuthor && (
                <li>
                  <span className="param">Text</span>
                  {props.article.author}
                </li>
              )}
              <li>
                <span className="param">Date</span>
                {props.article.date}
              </li>
              <li>
                <span className="param">Duration</span>
                {props.article.timeToRead}
              </li>
            </ul>
            {!props.noCategory && (
              <span className="label">{props.article.category}</span>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
