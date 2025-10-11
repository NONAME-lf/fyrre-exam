import { useLocation, useParams } from "react-router";
import { useState, useEffect, lazy } from "react";
import DetailBackType from "../components/DetailBackType/DetailBackType";
import { getData } from "../helpers";
import LeadArticle from "../components/LeadArticle/LeadArticle";
import DetailContent from "../components/DetailContent/DetailContent";
import { toast } from "react-toastify";

const LatestSection = lazy(() =>
  import("../components/LatestSection/LatestSection")
);

export default function DetailPage() {
  const params = useParams();
  const [itemData, setItemData] = useState(null);

  const getEpisode = (id, shows) => {
    const cashedEpisode = localStorage.getItem(`spotify_episode_${id}`);
    if (cashedEpisode) return JSON.parse(cashedEpisode);
    for (const show of shows) {
      const cachedShow = localStorage.getItem(`spotify_show_${show.id}`);
      const showData = cachedShow ? JSON.parse(cachedShow) : show;
      if (!showData.episodes) continue;
      const episode = showData.episodes.items.find((episode, index) => {
        episode.epNum = showData.episodes.items.length - index;
        return episode.id === id;
      });
      if (episode) return episode;
    }
    toast.error("Episode not found", { theme: "dark" });
  };

  useEffect(() => {
    getData().then((res) => {
      const dataList =
        params.type === "magazine"
          ? res?.articles
          : params.type === "author"
          ? res?.authors
          : params.type === "podcast"
          ? res?.shows
          : [];

      const item =
        params.type !== "podcast"
          ? dataList.find((data) => data.id === parseInt(params.id))
          : getEpisode(params.id, res?.shows);
      setItemData(item || null);
    });
  }, [params]);

  return (
    <>
      <DetailBackType type={params.type} />
      {params.type === "magazine" && itemData && (
        <LeadArticle lead={itemData} detail={true} />
      )}
      <DetailContent item={itemData} type={params.type} />
      <LatestSection type={params.type} itemData={itemData} />
    </>
  );
}
