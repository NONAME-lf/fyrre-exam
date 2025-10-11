import { getImagePath } from "../../helpers";
import SocList from "../SocList/SocList";
import ListenList from "../ListenList/ListenList";
import { useEffect, useState } from "react";
import "./style.scss";

export default function DetailContentSideBar(props) {
  const [imagePath, setImagePath] = useState(null);
  // console.log(props);

  useEffect(() => {
    if (!props.authorData?.img && props.podcastData?.images) return;
    if (props.type === "magazine")
      setImagePath(getImagePath(props.authorData?.img));
    else if (props.type === "podcast")
      setImagePath(props.podcastData?.images[0]?.url);
  }, [props]);

  if (props.type === "magazine") {
    return (
      <aside className="detail-content-sidebar">
        <div className="author-info">
          <div className="img-wrap">
            <img
              src={imagePath}
              alt={`${props.authorData?.name} image`}
              onError={() => setImagePath(getImagePath("no-image.jpg"))}
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
  } else if (props.type === "podcast") {
    return (
      <aside className="detail-content-sidebar">
        <div className="podcast-info">
          <div className="img-wrap">
            <div className="color-layer">
              <hgroup>
                <h4 className="podcast-label">FYRRE</h4>
                <p className="podcast-title">Podcast</p>
              </hgroup>
              <div className="misc">
                <span className="episode">EP {props.episodeNum}</span>
                <div className="arrow"></div>
              </div>
            </div>
            <img
              src={props.podcastData?.images[0]?.url}
              alt={`${props.podcastData?.name} image`}
              onError={() =>
                setImagePath("/fyrre-exam/src/assets/img/no-image.jpg")
              }
            />
          </div>
          <div className="listen-on">
            <h3>Listen on</h3>
            <ListenList spotify={props.podcastData?.external_urls?.spotify} />
          </div>
        </div>
        <ul className="article-info">
          <li>
            <span className="param">Date</span>
            {props.podcastData?.release_date}
          </li>
          <li>
            <span className="param">Duration</span>
            {props.podcastData?.duration_ms
              ? `${Math.floor(props.podcastData.duration_ms / 60000)} min`
              : ""}
          </li>
          <li>
            <span className="param">Share</span>
            <SocList />
          </li>
        </ul>
      </aside>
    );
  }
}
