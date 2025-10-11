import NewsTicker from "../NewsTicker/NewsTicker";
import SiteForm from "../SiteForm/SiteForm";
import { use, useEffect, useState } from "react";
import { getData } from "../../helpers.js";
import "./style.scss";
import FooterNav from "../FooterNav/FooterNav.jsx";
import { NavLink } from "react-router";
import logo from "../../assets/img/fyrre-logo.svg";
import SocList from "../SocList/SocList";

export default function SiteFooter() {
  const [footerData, setFooterData] = useState([]);
  const [newsTickerData, setNewsTickerData] = useState(null);
  const [footerNewsTicker, setFooterNewsTicker] = useState(null);

  useEffect(() => {
    getData().then((res) => setFooterData(res.footerData));
    getData().then((res) => setNewsTickerData(res.newsTickers));
  }, []);

  useEffect(() => {
    if (!newsTickerData) return;
    const tmp_newsTickers = newsTickerData;

    const footer = tmp_newsTickers.find(
      (newsTicker) => newsTicker.footerTicker
    );

    setFooterNewsTicker(footer.footerTicker);
  }, [newsTickerData]);

  return (
    <footer>
      <NewsTicker newsTicker={footerNewsTicker} className="footer" />
      <div className="container">
        <SiteForm form={footerData.form} />
        <div className="nav-div">
          <NavLink to="/">
            <div className="img-wrap">
              <img
                src={logo}
                alt="Fyrre Magazine Logo"
                className="logo"
                loading="lazy"
              />
            </div>
          </NavLink>
          <FooterNav nav={footerData.nav} />
        </div>
        <div className="misc">
          <span className="copyright">{footerData.copyright}</span>
          <ul className="soc-list">
            <SocList inverted={"inverted"} />
          </ul>
        </div>
      </div>
    </footer>
  );
}
