import { NavLink } from "react-router";
import "./style.scss";
import logo from "../../assets/img/fyrre-logo.svg";
import SocList from "../SocList/SocList";
import Container from "../Container/Container";
import HoverLink from "../HoverLink/HoverLink";

export default function SiteHeader() {
  return (
    <header>
      <Container>
        <NavLink className="link" to="/">
          <div className="img-wrap">
            <img className="logo" src={logo} alt="Fyrre Magazine Logo" />
          </div>
        </NavLink>
        <nav className="main-menu">
          <ul className="nav-list">
            <li>
              <HoverLink to="/magazine" highlight="M" text="agazine" />
            </li>
            <li>
              <HoverLink to="/authors" highlight="A" text="uthors" />
            </li>
            <li>
              <HoverLink to="/podcast" highlight="P" text="odcast" />
            </li>
            <li>
              <span className="divider"></span>
            </li>
            <li>
              <SocList isHeader={true} />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
