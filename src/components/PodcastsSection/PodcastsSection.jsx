import SectionHeader from "../SectionHeader/SectionHeader";
import PodcastCard from "../PodcastCard/PodcastCard";
import "./style.scss";
import { useEffect, useState } from "react";

export default function PodcastSection(props) {
  // console.log("SPOTIFY EPISODES", props);
  const [epQnt, setEpQnt] = useState(3);
  useEffect(() => {
    props.qnt(epQnt);
  }, [epQnt]);
  return (
    <section className="podcasts-section">
      <SectionHeader title="Podcasts" highlight="All&nbsp;" text="Episodes" />
      <ul className="podcast-list">
        {props.episodes.map((episode) => {
          return (
            <li key={episode.id}>
              <PodcastCard
                episode={episode}
                episodeNum={
                  props.episodes.length - props.episodes.indexOf(episode)
                }
                border={"grid-border"}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
