import { useEffect, useState } from "react";
import { getImagePath } from "../../helpers";
import "./style.scss";
import CategoryLabel from "../CategoryLabel/CategoryLabel";

export default function LeadArticle(props) {
  const [imagePath, setImagePath] = useState(null);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);

  const leadImage = () => {
    if (!props.lead?.img) {
      return false;
    }
    setImagePath(getImagePath(`${props.lead.img}`));
  };

  const ifRwdWidth = () => {
    if (!document.querySelector(".lead-article .content h3")) return;
    const width = document.body.clientWidth;
    setClientWidth(width);
    if (width <= 600 && imagePath) {
      document
        .querySelector(".lead-article .content h3")
        .style.setProperty("--bg-before", `url(${imagePath})`);
    } else {
      document
        .querySelector(".lead-article .content h3")
        .style.setProperty("--bg-before", `none`);
    }
  };

  useEffect(() => {
    leadImage();
  }, [props]);

  useEffect(() => {
    // Call initially even without resize event
    ifRwdWidth();

    window.addEventListener("resize", () => {
      ifRwdWidth();
    });
    return () => {
      window.removeEventListener("resize", ifRwdWidth);
    };
  }, [imagePath]);

  return (
    <>
      <article className={`lead-article ${props.detail ? "detail" : ""}`}>
        <div className={"content"}>
          <h3>{props.lead?.title}</h3>
          <div className="text">
            <p>{props.lead?.text}</p>
            {!props.detail && (
              <div className="info">
                <ul>
                  <li>
                    <span className="param">Text</span>
                    {props.lead?.author}
                  </li>
                  <li>
                    <span className="param">Date</span>
                    {props.lead?.date}
                  </li>
                  <li>
                    <span className="param">Duration</span>
                    {props.lead?.timeToRead}
                  </li>
                </ul>
                <CategoryLabel category={props.lead?.category} />
              </div>
            )}
          </div>
        </div>
        {props.detail && (
          <div className="info">
            <ul>
              <li>
                <span className="param">Text</span>
                {props.lead?.author}
              </li>
              <li>
                <span className="param">Date</span>
                {props.lead?.date}
              </li>
              <li>
                <span className="param">Duration</span>
                {props.lead?.timeToRead}
              </li>
            </ul>
            <CategoryLabel category={props.lead?.category} />
          </div>
        )}
        {clientWidth > 600 && (
          <div className="img-wrap">
            <img
              src={imagePath}
              alt={`${props.lead?.title} image`}
              onError={() =>
                setImagePath("/fyrre-exam/src/assets/img/no-image.jpg")
              }
              loading="lazy"
            />
          </div>
        )}
      </article>
    </>
  );
}
