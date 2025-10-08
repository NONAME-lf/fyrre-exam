import HoverLink from "../HoverLink/HoverLink";
import "./style.scss";

export default function FooterNav(props) {
  return (
    <nav className="footer-nav">
      <ul>
        {props.nav?.map((link, index) => (
          <li key={index}>
            <HoverLink
              to={link.to}
              highlight={link.title[0]}
              text={link.title.slice(1)}
              inverted={"inverted"}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
