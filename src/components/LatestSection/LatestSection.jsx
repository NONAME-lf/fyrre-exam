import { useEffect, useState } from "react";
import "./style.scss";
import { getData } from "../../helpers";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function LatestSection(props) {
  const [typeData, setTypeData] = useState(null);

  useEffect(() => {
    getData().then((res) => {
      const dataList =
        props.type === "magazine"
          ? res?.articles
          : props.type === "author"
          ? res?.authors
          : [];
      setTypeData(dataList || null);
    });
  }, [props]);

  return (
    <section className="latest-section">
      <SectionHeader
        title={props.type}
        highlight="See&nbsp;"
        text="All"
        type={props.type}
      />
    </section>
  );
}
