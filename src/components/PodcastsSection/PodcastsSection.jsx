import SectionHeader from "../SectionHeader/SectionHeader";

export default function PodcastSection(props) {
  return (
    <section className="podcasts-section">
      <SectionHeader title="Podcasts" />
      <ul className="podcast-list"></ul>
    </section>
  );
}
