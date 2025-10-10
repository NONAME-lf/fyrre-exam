import { NavLink } from "react-router";
import HoverLink from "../HoverLink/HoverLink";
import "./style.scss";

export default function SectionHeader(props) {
  return (
    <div className="section-header">
      <h2>{props.title}</h2>
      <HoverLink
        to={props.to}
        highlight={props.highlight}
        text={props.text}
        icon=""
        uppercase
        bold
      />
    </div>
  );
}
