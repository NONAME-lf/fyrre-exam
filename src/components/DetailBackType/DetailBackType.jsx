import HoverLink from "../HoverLink/HoverLink";
import "./style.scss";

export default function DetailBackType(props) {
  return (
    <div className="detail-back-type">
      <HoverLink
        to={`/${props.type}`}
        className="link-hover"
        highlight="Go&nbsp;"
        text="back"
        icon=""
        uppercase="uppercase"
        bold="bold"
        iconReverse
      />
      <span className="type">{props.type}</span>
    </div>
  );
}
