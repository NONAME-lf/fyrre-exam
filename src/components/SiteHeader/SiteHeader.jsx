import { NavLink } from "react-router";
import "./style.scss";
import logo from "../../assets/img/fyrre-logo.svg";
import SocList from "../SocList/SocList";

export default function SiteHeader() {
  return (
    <header>
      <NavLink className="link" to="/">
        <div className="img-wrap">
          <img className="logo" src={logo} alt="Fyrre Logo" />
        </div>
      </NavLink>
      <nav className="main-menu">
        <ul className="nav-list">
          <li>
            <NavLink to="/magazine">Magazine</NavLink>
          </li>
          <li>
            <NavLink to="/auhtors">Auhtors</NavLink>
          </li>
          <li>
            <NavLink to="/podcast">Podcast</NavLink>
          </li>
          <li>
            <span className="divider"></span>
          </li>
          <SocList />
        </ul>
      </nav>
    </header>
  );
}
