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
    if (!props.quantity) return;
    setQuantity(props.quantity);
  }, [props]);

  useEffect(() => {
    getSpotifyShows();
  }, [accessToken, props.data]);

  useEffect(() => {
    getEpisodes(quantity);
  }, [shows, quantity]);

  const getSpotifyShows = async () => {
    if (!accessToken || !props.data) return;
    requestSpotifyData().then((res) => {
      if (res) setShows(res);
    });
  };

  const requestSpotifyToken = async () => {
    const cachedToken = sessionStorage.getItem("spotify_token");
    const tokenExpire = sessionStorage.getItem("spotify_token_expire");
    if (cachedToken && tokenExpire && tokenExpire > Date.now()) {
      setAccessToken(cachedToken);
      return;
    }
    // if (accessToken) return;
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
        const tokenData = await response.json();
        const expire = Date.now() + tokenData.expires_in * 1000;
        sessionStorage.setItem("spotify_token", tokenData.access_token);
        sessionStorage.setItem("spotify_token_expire", expire);
        setAccessToken(tokenData.access_token);
        // console.log("TOKEN: ", tokenData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // &market=US&locale=en-US
  const requestSpotifyData = async () => {
    if (!accessToken || !props.data) return;
    const cachedToken = sessionStorage.getItem("spotify_token");
    const tokenExpire = sessionStorage.getItem("spotify_token_expire");
    if (cachedToken && tokenExpire && tokenExpire < Date.now()) {
      requestSpotifyToken();
      return;
    }
    try {
      const showItems = [];

      for (const show of props.data) {
        const cachedShow = localStorage.getItem(`spotify_show_${show.id}`);
        if (cachedShow) {
          showItems.push(JSON.parse(cachedShow));
          continue;
        }

        const response = await fetch(
          `https://api.spotify.com/v1/shows/${show.id}`,
          {
            method: "GET",
            headers: { Authorization: "Bearer " + accessToken },
          }
        );
        if (response.ok) {
          const tmp_data = await response.json();
          localStorage.setItem(
            `spotify_show_${show.id}`,
            JSON.stringify(tmp_data)
          );
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
      show.episodes.items.forEach((episode, key) => {
        if (episodeList.length < quantity) {
          const cachedEpisode = localStorage.getItem(
            `spotify_episode_${episode.id}`
          );
          if (cachedEpisode) {
            episodeList.push(JSON.parse(cachedEpisode));
            return;
          }
          episode.epNum = quantity - key;
          localStorage.setItem(
            `spotify_episode_${episode.id}`,
            JSON.stringify(episode)
          );
          episodeList.push(episode);
        } else {
          setEpisodes(episodeList);
          return;
        }
      });
    });
  };

  return (
    <section className="podcasts-section">
      {props.sectionHeader && (
        <SectionHeader
          title="Podcast"
          highlight="All&nbsp;"
          text="Episodes"
          to="/podcast"
        />
      )}
      <ul className="podcast-list">
        {episodes.map((episode, key) => {
          return (
            <li key={episode.id}>
              <PodcastCard
                epNum={props.epNum && episodes.length - key}
                episode={episode}
                episodeNum={episodes.length - episodes.indexOf(episode)}
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
