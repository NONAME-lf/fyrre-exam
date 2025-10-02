import { NavLink } from "react-router";
import "./style.scss";

export default function HoverLink(props) {
  return (
    <NavLink to={props.to}>
      <span className="highlight">{props.highlight}</span>
      <span className="hover-span">{props.text}</span>
    </NavLink>
  );
}
