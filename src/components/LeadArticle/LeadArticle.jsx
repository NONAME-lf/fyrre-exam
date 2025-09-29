import { useEffect, useState } from "react";
import { getImagePath } from "../../helpers";

export default function LeadArticle(props) {
  const [imagePath, setImagePath] = useState("/src/assets/img/");
  console.log(props);
  const leadImage = () => {
    if (!props.lead?.img) {
      return false;
    }
    // setImagePath(getImagePath(`${imagePath}${props.lead.img}`));
    console.log(imagePath);
  };

  useEffect(() => {
    leadImage();
  }, [props, imagePath]);

  return (
    <>
      <article>
        <div className="content">
          <h2></h2>
          <div className="text">
            <p></p>
            <div className="info">
              <ul>
                <li>
                  <span className="param">Text:</span>
                </li>
                <li>
                  <span className="param">Date:</span>
                </li>
                <li>
                  <span className="param">Duration:</span>
                </li>
              </ul>
              <span className="label"></span>
            </div>
          </div>
        </div>
        <div className="image">
          <div className="img-wrap">
            <img src={imagePath} alt={`${props.lead?.title} image`} />
          </div>
        </div>
      </article>
    </>
  );
}
