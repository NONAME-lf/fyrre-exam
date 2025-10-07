import NewsTicker from "../NewsTicker/NewsTicker";
import SiteForm from "../SiteForm/SiteForm";
import { useEffect, useState } from "react";
import { getData } from "../../helpers.js";
import "./style.scss";

export default function SiteFooter() {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    getData().then((res) => setFooterData(res.footerData));
  }, []);

  // console.log(footerData);

  return (
    <footer>
      <NewsTicker />
      <div className="container">
        <SiteForm form={footerData.form} />
      </div>
    </footer>
  );
}
