import HoverLink from "../HoverLink/HoverLink";
import "./style.scss";

export default function DetailBackType(props) {
  return (
    <div className="detail-back-type">
      <HoverLink
        to={`/${props.type}`}
        className="link-hover"
        highlight="All&nbsp;"
        text={props.type}
        icon=""
      />
      <span className="type">{props.type}</span>
    </div>
  );
}
