import { toast } from "react-toastify";
import NewsTicker from "../components/NewsTicker/NewsTicker";
import { use, useEffect, useState } from "react";
import LeadArticle from "../components/LeadArticle/LeadArticle";
import ArticlesSection from "../components/ArticlesSection/ArticlesSection";
import PodcastsSection from "../components/PodcastsSection/PodcastsSection";
import AuthorsSection from "../components/AuthorsSection/AuthorsSection";
import PageSlogan from "../components/PageSlogan/PageSlogan";
import { getData } from "../helpers";

export default function HomePage() {
  const [leadArticle, setLeadArticle] = useState(null);
  const [data, setData] = useState(null);
  const [sloganData, setSloganData] = useState(null);
  const [dataShows, setDataShows] = useState(null);
  const [dataAuthors, setDataAuthors] = useState(null);
  const [articles, setArticles] = useState([]);
  const [leadNewsTicker, setLeadNewsTicker] = useState(null);

  const getLeadNewsTicker = () => {
    if (!data?.newsTickers) return;
    const tmp_newsTickers = data.newsTickers;

    const lead = tmp_newsTickers.find(
      (newsTicker) => newsTicker.leadArticleTicker
    );

    setLeadNewsTicker(lead.leadArticleTicker);
  };

  const getArticle = () => {
    if (!data?.articles) return;
    let tmp_articles = data.articles;
    const lead = tmp_articles.find((article) => article.lead === "true");
    setLeadArticle(lead);
    tmp_articles = tmp_articles.slice(0, 7);
    setArticles(tmp_articles.filter((article) => article.id !== lead.id));
  };

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  useEffect(() => {
    getArticle();
    setDataShows(data?.shows);
    setDataAuthors(data?.authors);
    setSloganData(
      data?.svgSlogans?.find((slogan) => slogan.page === "HomePage")
    );
    getLeadNewsTicker();
  }, [data]);

  return (
    <>
      <PageSlogan svgContent={sloganData?.svgContent} />
      <NewsTicker
        newsTicker={leadNewsTicker}
        className=".page-wrapper > .container"
      />
      <LeadArticle lead={leadArticle} />
      <ArticlesSection
        articles={articles}
        sidebar={true}
        orientation="horizontal"
      />
      <PodcastsSection data={dataShows} />
      <AuthorsSection data={dataAuthors} sectionHeader />
    </>
  );
}
