import PageSlogan from "../components/PageSlogan/PageSlogan";
import { useEffect, useState } from "react";
import { getData } from "../helpers";
import PodcastSection from "../components/PodcastsSection/PodcastsSection";

export default function PodcastPage() {
  const [sloganData, setSloganData] = useState(null);
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    getData().then((res) => {
      setSloganData(
        res?.svgSlogans?.find((slogan) => slogan.page === "PodcastPage")
      );
      setShowData(res?.shows);
    });
  }, []);

  return (
    <>
      <PageSlogan svgContent={sloganData?.svgContent} className="dmb" />
      <PodcastSection
        data={showData}
        quantity={5}
        noSectionHeader
        orientation="horizontal"
        epNum
      />
    </>
  );
}
