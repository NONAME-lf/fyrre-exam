import SectionHeader from "../SectionHeader/SectionHeader";
import AuthorCard from "../AuthorCard/AuthorCard";
import "./style.scss";

export default function AuthorsSection(props) {
  return (
    <section className="authors-section">
      <SectionHeader title="Authors" highlight="All&nbsp;" text="Authors" />
      <ul className="author-list">
        {props.data?.map((author) => (
          <li key={author.id}>
            <AuthorCard author={author} />
          </li>
        ))}
      </ul>
    </section>
  );
}
