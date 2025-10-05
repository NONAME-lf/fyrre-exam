import { NavLink } from "react-router";
import "./style.scss";
export default function PodcastCard(props) {
  //   console.log("EPISODE: ", props);
  const duration = props.episode.duration_ms;
  const seconds = Math.floor((duration % 60000) / 1000);
  const minutes = Math.floor(duration / 60000);
  const hours = Math.floor(minutes / 60);

  return (
    <div
      className={`podcast-card ${props.orientation || "horizontal"} ${
        props.border || ""
      }`}
    >
      <NavLink to={`/Podcast/${props.episode.id}`} className="link-hover">
        <div className="img-wrap">
          <div className="color-layer">
            <hgroup>
              <h4 className="podcast-label">FYRRE</h4>
              <p className="podcast-title">Podcast</p>
            </hgroup>
            <div className="misc">
              <span className="episode">{props.episodeNum}</span>
            </div>
          </div>
          <img
            src={props.episode.images[0].url}
            alt={`${props.episode.name} image`}
            onError={() =>
              setImagePath("/fyrre-exam/src/assets/img/no-image.jpg")
            }
          />
        </div>
      </NavLink>
      <div className="content">
        <NavLink to={`/Podcast/${props.episode.id}`} className="link-hover">
          <h3 className="title">{props.episode.name}</h3>
        </NavLink>
        <div className="info">
          <ul>
            <li>
              <span className="param">Date</span>
              {props.episode.release_date}
            </li>
            <li>
              <span className="param">Duration</span>
              {hours > 0 ? `${hours}h ` : ""}
              {minutes % 60}m {minutes < 10 ? `${seconds}s` : null}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
