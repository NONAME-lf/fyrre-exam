import { getImagePath } from "../../helpers";
import SocList from "../SocList/SocList";
import "./style.scss";
import { useState, useEffect } from "react";

export default function DetailAuthorSidebar(props) {
  const [imagePath, setImagePath] = useState(null);
  console.log(props);

  const image = () => {
    if (!props.authorData?.img) {
      return false;
    }
    setImagePath(getImagePath(`${props.authorData.img}`));
  };

  useEffect(() => {
    image();
  }, [props.authorData]);

  return (
    <aside className="detail-author-sidebar">
      <div className="author-photo">
        <div className="img-wrap">
          <img
            src={getImagePath(props.authorData?.img)}
            alt={`${props.authorData?.name} image`}
            onError={() => setImagePath(getImagePath("no-image.jpg"))}
            loading="lazy"
          />
        </div>
      </div>
      <div className="author-info">
        <h3>FOLLOW</h3>
        <SocList />
      </div>
    </aside>
  );
}
