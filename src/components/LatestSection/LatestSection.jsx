import { use, useEffect, useState } from "react";
import "./style.scss";
import { getData } from "../../helpers";
import SectionHeader from "../SectionHeader/SectionHeader";
import PodcastCard from "../PodcastCard/PodcastCard";
import ArticleCard from "../ArticleCard/ArticleCard";
import { useParams } from "react-router";

export default function LatestSection(props) {
  const [typeData, setTypeData] = useState(null);
  const [latestItems, setLatestItems] = useState([]);
  console.log(props);

  useEffect(() => {
    if (props.type !== "magazine" && props.type !== "author") return;
    getData().then((res) => {
      const dataList = res?.articles;
      setTypeData(dataList || null);
      // console.log(dataList);
    });
  }, [props]);

  useEffect(() => {
    console.log(typeData);
  }, [typeData]);

  useEffect(() => {
    if (props.type !== "podcast") return;
    const cachedEpisodes = getAllEpisodesFromStorage();
    if (cachedEpisodes) {
      setTypeData(cachedEpisodes);
      return;
    }

    // if no cached episodes, fetch and store ???
    getData().then((res) => {
      let allEpisodes = [];
      for (const show of res?.shows) {
        if (!show.episodes) continue;
        const episodesWithAuthor = show.episodes.items.map((episode, index) => {
          episode.authorId = show.id;
          episode.epNum = show.episodes.items.length - index;
          return episode;
        });
        allEpisodes = allEpisodes.concat(episodesWithAuthor);
      }
      setTypeData(allEpisodes);
      localStorage.setItem("spotify_episodes", JSON.stringify(allEpisodes));
    });
  }, []);

  function getAllEpisodesFromStorage() {
    const episodes = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("spotify_episode_")) {
        const item = localStorage.getItem(key);
        if (item) {
          episodes.push(JSON.parse(item));
        }
      }
    }
    return episodes;
  }

  return (
    <section className="latest-section">
      <SectionHeader
        title={
          props.type === "magazine"
            ? "Latest Posts"
            : props.type === "author"
            ? `Articles by ${props.itemData?.name}`
            : "Latest Episodes"
        }
        highlight="See&nbsp;"
        text="All"
        to={props.type === "magazine" ? `/magazine` : "/podcast"}
      />
      <ul className="latest-items">
        {typeData &&
          props.type === "magazine" &&
          typeData
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3)
            .map((article) => {
              return (
                <li key={article.id} className="latest-item">
                  <ArticleCard article={article} orientation="vertical" />
                </li>
              );
            })}
        {typeData &&
          props.type === "author" &&
          typeData
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .filter((article) => article.authorId === props.itemData?.id)
            .slice(0, 4)
            .map((article) => {
              return (
                <li key={article.id} className="latest-item">
                  <ArticleCard
                    article={article}
                    orientation="horizontal"
                    noAuthor
                    noText
                    noCategory
                  />
                </li>
              );
            })}
        {typeData &&
          props.type === "podcast" &&
          typeData &&
          typeData
            .sort(
              (a, b) =>
                new Date(b["release_date"]) - new Date(a["release_date"])
            )
            .slice(0, 3)
            .map((episode) => {
              return (
                <li key={episode.id} className="latest-item">
                  <PodcastCard
                    episode={episode}
                    episodeNum={episode.epNum}
                    border={"grid-border"}
                    orientation={props.orientation || ""}
                  />
                </li>
              );
            })}
      </ul>
    </section>
  );
}
