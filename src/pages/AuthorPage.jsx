import { useEffect, useState } from "react";
import PageSlogan from "../components/PageSlogan/PageSlogan";
import { getData } from "../helpers";
import AuthorSection from "../components/AuthorsSection/AuthorsSection";

export default function AuthorPage() {
  const [sloganData, setSloganData] = useState(null);
  const [authorsData, setAuthorsData] = useState(null);

  useEffect(() => {
    getData().then((res) => {
      setSloganData(
        res?.svgSlogans?.find((slogan) => slogan.page === "AuthorPage")
      );
      setAuthorsData(res?.authors || []);
    });
  }, []);

  return (
    <>
      <PageSlogan svgContent={sloganData?.svgContent} className="dmb" />
      <AuthorSection
        data={authorsData}
        className="author-page"
        hoverLink={{
          highlight: "A",
          text: "bout",
          icon: "",
          uppercase: "uppercase",
          bold: "bold",
        }}
      />
    </>
  );
}
