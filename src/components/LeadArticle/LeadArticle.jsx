import { useEffect, useState } from "react";
import { getImagePath } from "../../helpers";
import "./style.scss";
import CategoryLabel from "../CategoryLabel/CategoryLabel";

export default function LeadArticle(props) {
  const [imagePath, setImagePath] = useState("/fyrre-exam/src/assets/img/");
  const leadImage = () => {
    if (!props.lead?.img) {
      return false;
    }
    setImagePath(getImagePath(`${imagePath}${props.lead.img}`));
  };

  useEffect(() => {
    leadImage();
  }, [props]);

  return (
    <>
      <article className="lead-article">
        <div className="content">
          <h3>{props.lead?.title}</h3>
          <div className="text">
            <p>{props.lead?.text}</p>
            <div className="info">
              <ul>
                <li>
                  <span className="param">Text:</span>
                  {props.lead?.author}
                </li>
                <li>
                  <span className="param">Date:</span>
                  {props.lead?.date}
                </li>
                <li>
                  <span className="param">Duration:</span>
                  {props.lead?.timeToRead}
                </li>
              </ul>
              <CategoryLabel category={props.lead?.category} />
            </div>
          </div>
        </div>
        <div className="img-wrap">
          <img src={imagePath} alt={`${props.lead?.title} image`} />
        </div>
      </article>
    </>
  );
}
