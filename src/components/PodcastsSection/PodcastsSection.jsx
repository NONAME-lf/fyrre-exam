import SectionHeader from "../SectionHeader/SectionHeader";
import PodcastCard from "../PodcastCard/PodcastCard";
import "./style.scss";

export default function PodcastSection(props) {
  console.log("SPOTIFY EPISODES", props);

  return (
    <section className="podcasts-section">
      <SectionHeader title="Podcasts" />
      <ul className="podcast-list">
        {props.episodes.map((episode) => {
          return (
            <li key={episode.id}>
              <PodcastCard
                episode={episode}
                episodeNum={
                  props.episodes.length - props.episodes.indexOf(episode)
                }
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
