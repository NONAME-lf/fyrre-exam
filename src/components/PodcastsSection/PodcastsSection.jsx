import SectionHeader from "../SectionHeader/SectionHeader";
import PodcastCard from "../PodcastCard/PodcastCard";
import "./style.scss";
import { useEffect, useState } from "react";

export default function PodcastSection(props) {
  const [shows, setShows] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [quantity, setQuantity] = useState(3);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    !accessToken && requestSpotifyToken();
  }, [accessToken]);

  useEffect(() => {
    getSpotifyShows();
  }, [accessToken, props.data]);

  useEffect(() => {
    getEpisodes(quantity);
  }, [shows]);

  const getSpotifyShows = async () => {
    if (!accessToken || !props.data) return;
    const tmp_shows = await requestSpotifyData();
    setShows(tmp_shows);
  };

  const requestSpotifyToken = async () => {
    if (accessToken) return;
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            btoa(
              `${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${
                import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
              }`
            ),
        },
        body: new URLSearchParams({ grant_type: "client_credentials" }),
      });
      if (response.ok) {
        const tocken_data = await response.json();
        setAccessToken(tocken_data.access_token);
        // console.log("TOKEN: ", tocken_data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // &market=US&locale=en-US
  const requestSpotifyData = async () => {
    if (!accessToken || !props.data) return;
    try {
      const showsIds = props.data;
      const showItems = [];
      for (const show of showsIds) {
        const response = await fetch(
          `https://api.spotify.com/v1/shows/${show.id}`,
          {
            method: "GET",
            headers: { Authorization: "Bearer " + accessToken },
          }
        );
        if (response.ok) {
          const tmp_data = await response.json();
          showItems.push(tmp_data);
        } else {
          throw new Error(
            "Failed to fetch data, with status: " + response.status
          );
        }
      }
      // console.log("SPOTIFY SHOWS: ", showItems);
      return showItems;
    } catch (error) {
      console.error(error);
    }
  };

  const getEpisodes = (quantity) => {
    if (!shows || shows.length === 0) return;
    // console.log("SHOWS: ", shows);
    const episodeList = [];
    shows.forEach((show) => {
      if (!show.episodes) return;
      show.episodes.items.forEach((episode) => {
        if (episodeList.length < quantity) episodeList.push(episode);
        else {
          setEpisodes(episodeList);
          return;
        }
      });
    });
  };

  return (
    <section className="podcasts-section">
      <SectionHeader title="Podcasts" highlight="All&nbsp;" text="Episodes" />
      <ul className="podcast-list">
        {episodes.map((episode) => {
          return (
            <li key={episode.id}>
              <PodcastCard
                episode={episode}
                episodeNum={episodes.length - episodes.indexOf(episode)}
                border={"grid-border"}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
