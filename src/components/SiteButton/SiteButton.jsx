import { NavLink } from "react-router";
import "./style.scss";

export default function FormButton(props) {
  return (
    <NavLink
      to={props.to}
      className={`btn ${props.className ? props.className : ""}`}
    >
      {props.text}
    </NavLink>
  );
}
