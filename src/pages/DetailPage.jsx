import { useParams } from "react-router";
import { useState, useEffect } from "react";
import DetailBackType from "../components/DetailBackType/DetailBackType";
import { getData } from "../helpers";
import LeadArticle from "../components/LeadArticle/LeadArticle";
import DetailContent from "../components/DetailContent/DetailContent";

export default function DetailPage() {
  const params = useParams();
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    getData().then((res) => {
      const dataList =
        params.type === "magazine"
          ? res?.articles
          : params.type === "author"
          ? res?.authors
          : [];

      const item = dataList.find((data) => data.id === parseInt(params.id));
      setItemData(item || null);
    });
  }, []);

  //   useEffect(() => {
  //     console.log(itemData);
  //   }, [itemData]);

  return (
    <>
      <DetailBackType type={params.type} />
      {params.type === "magazine" && itemData && (
        <LeadArticle lead={itemData} detail={true} />
      )}
      <DetailContent item={itemData} />
    </>
  );
}
