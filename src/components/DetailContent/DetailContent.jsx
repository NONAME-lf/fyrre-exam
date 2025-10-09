import { useEffect, useState } from "react";
import DetailContentSideBar from "../DetailContentSidebar/DetailContentSidebar";
import "./style.scss";
import { getData } from "../../helpers";

export default function DetailContent(props) {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    if (!props.item?.authorId) return;
    getData().then((res) => {
      const author = res?.authors?.find(
        (athr) => +athr.id === +props.item.authorId
      );
      setAuthorData(author || null);
    });
  }, [props]);

  useEffect(() => {
    console.log(authorData);
  }, [authorData]);

  return (
    <section className="detail-content">
      <DetailContentSideBar authorData={authorData} articleData={props.item} />
    </section>
  );
}
