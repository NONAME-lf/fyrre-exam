import { useEffect, useState } from "react";
import PageSlogan from "../components/PageSlogan/PageSlogan";
import { getData } from "../helpers";
import ArticlesSection from "../components/ArticlesSection/ArticlesSection";

export default function MagazinePage() {
  const [sloganData, setSloganData] = useState(null);
  const [articlesData, setArticlesData] = useState(null);

  useEffect(() => {
    getData().then((res) => {
      setSloganData(
        res?.svgSlogans?.find((slogan) => slogan.page === "MagazinePage")
      );
      setArticlesData(res?.articles);
    });
  }, []);

  useEffect(() => {
    console.log(articlesData);
  }, [articlesData]);

  return (
    <>
      <PageSlogan svgContent={sloganData?.svgContent} />
      <ArticlesSection
        articles={articlesData || []}
        sidebar={false}
        orientation="vertical"
      />
    </>
  );
}
