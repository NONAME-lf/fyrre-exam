import { NavLink } from "react-router";
import "./style.scss";
import logo from "../../assets/img/fyrre-logo.svg";
import SocList from "../SocList/SocList";
import Container from "../Container/Container";
import HoverLink from "../HoverLink/HoverLink";
import { Divide as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import MobileMenuPanel from "../MobileMenuPanel/MobileMenuPanel";

export default function SiteHeader() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.querySelector(".overlay").addEventListener("click", () => {
      setOpen(false);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 896) {
        setOpen(false);
      }
    });
    if (isOpen) {
      document.querySelector(".overlay").classList.add("active");
      document.querySelector(".mobile-menu-panel").classList.add("active");
    } else {
      document.querySelector(".overlay").classList.remove("active");
      document.querySelector(".mobile-menu-panel").classList.remove("active");
    }
    return () => {
      document.querySelector(".overlay").removeEventListener("click", () => {
        setOpen(false);
      });
      window.removeEventListener("resize", () => {
        if (window.innerWidth > 896) {
          setOpen(false);
        }
      });
    };
  }, [isOpen]);

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
        </nav>
        <Hamburger size={27} toggled={isOpen} toggle={setOpen} />
        <MobileMenuPanel />
      </Container>
    </header>
  );
}
