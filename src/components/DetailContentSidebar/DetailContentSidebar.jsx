import { getImagePath } from "../../helpers";
import SocList from "../SocList/SocList";
import "./style.scss";

export default function DetailContentSideBar(props) {
  return (
    <aside className="detail-content-sidebar">
      <div className="author-info">
        <div className="img-wrap">
          <img
            src={getImagePath(props.authorData?.img)}
            alt={`${props.authorData?.name} image`}
          />
        </div>
        <h3>{props.authorData?.name}</h3>
      </div>
      <ul className="article-info">
        <li>
          <span className="param">Date</span>
          {props.articleData?.date}
        </li>
        <li>
          <span className="param">Read</span>
          {props.articleData?.timeToRead}
        </li>
        <li>
          <span className="param">Share</span>
          <SocList />
        </li>
      </ul>
    </aside>
  );
}
