import NewsTicker from "../NewsTicker/NewsTicker";
import SiteForm from "../SiteForm/SiteForm";
import { useState } from "react";
import "./style.scss";

export default function SiteFooter() {
  const [footerData, setFooterData] = useState([]);

  return (
    <footer>
      <NewsTicker />
      <div className="container">
        <SiteForm />
      </div>
    </footer>
  );
}
