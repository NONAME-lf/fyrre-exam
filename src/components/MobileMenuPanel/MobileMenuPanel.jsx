import Container from "../Container/Container";
import HoverLink from "../HoverLink/HoverLink";
import SocList from "../SocList/SocList";
import "./style.scss";

export default function MobileMenuPanel() {
  return (
    <nav className="mobile-menu-panel">
      <Container>
        <ul className="nav-list">
          <li>
            <HoverLink to="/magazine" highlight="M" text="agazine" />
          </li>
          <li>
            <HoverLink to="/author" highlight="A" text="uthors" />
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
      </Container>
    </nav>
  );
}
