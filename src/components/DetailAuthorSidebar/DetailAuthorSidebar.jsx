import { getImagePath } from "../../helpers";
import SocList from "../SocList/SocList";
import "./style.scss";

export default function DetailAuthorSidebar(props) {
  //   console.log(props);

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
