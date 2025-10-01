import { NavLink } from "react-router";
import "./style.scss";
import logo from "../../assets/img/fyrre-logo.svg";
import SocList from "../SocList/SocList";
import Container from "../Container/Container";

export default function SiteHeader() {
  return (
    <header>
      <Container>
        <NavLink className="link" to="/">
          <div className="img-wrap">
            <img className="logo" src={logo} alt="Fyrre Logo" />
          </div>
        </NavLink>
        <nav className="main-menu">
          <ul className="nav-list">
            <li>
              <NavLink to="/magazine">
                M<span className="hover-span">agazine</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/authors">
                A<span className="hover-span">uthors</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/podcast">
                P<span className="hover-span">odcast</span>
              </NavLink>
            </li>
            <li>
              <span className="divider"></span>
            </li>
            <SocList />
          </ul>
        </nav>
      </Container>
    </header>
  );
}
