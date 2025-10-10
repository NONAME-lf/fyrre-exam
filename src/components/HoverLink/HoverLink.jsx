import { NavLink } from "react-router";
import "./style.scss";
import "../../assets/fonts/icomoon-arrow/fonts/icomoon.ttf";

export default function HoverLink(props) {
  return (
    <NavLink
      className={`hover-link ${props.inverted || ""} ${
        props.uppercase ? "uppercase" : ""
      } ${props.bold ? "bold" : ""}`}
      to={props.to}
    >
      {props.iconReverse && props.icon && (
        <span className="icon reverse">{props.icon}</span>
      )}
      <span className="highlight">{props.highlight}</span>
      <span className="hover-span">{props.text}</span>
      {!props.iconReverse && props.icon && (
        <span className="icon">{props.icon}</span>
      )}
    </NavLink>
  );
}
