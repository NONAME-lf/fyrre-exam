import { NavLink } from "react-router";
import "./style.scss";
import "../../assets/fonts/icomoon-arrow/fonts/icomoon.ttf";

export default function HoverLink(props) {
  return (
    <NavLink to={props.to}>
      <span className="highlight">{props.highlight}</span>
      <span className="hover-span">{props.text}</span>
      {props.icon && <span className="icon">{props.icon}</span>}
    </NavLink>
  );
}
