import { useEffect, useState } from "react";
import PageSlogan from "../components/PageSlogan/PageSlogan";
import { getData } from "../helpers";
import ArticlesSection from "../components/ArticlesSection/ArticlesSection";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";

export default function MagazinePage() {
  const [sloganData, setSloganData] = useState(null);
  const [articlesData, setArticlesData] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState(null);

  const handleFilterChange = (category) => {
    if (category === "All") {
      setFilteredArticles(null);
    } else {
      setFilteredArticles(
        articlesData.filter((article) => article.category === category)
      );
    }
  };

  useEffect(() => {
    getData().then((res) => {
      setSloganData(
        res?.svgSlogans?.find((slogan) => slogan.page === "MagazinePage")
      );
      setArticlesData(res?.articles);
    });
  }, []);

  return (
    <>
      <PageSlogan svgContent={sloganData?.svgContent} />
      <CategoryFilter
        articles={articlesData || []}
        onchange={handleFilterChange}
      />
      <ArticlesSection
        articles={filteredArticles || articlesData || []}
        sidebar={false}
        orientation="vertical"
      />
    </>
  );
}
