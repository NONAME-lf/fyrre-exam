import SectionHeader from "../SectionHeader/SectionHeader";
import AuthorCard from "../AuthorCard/AuthorCard";
import "./style.scss";

export default function AuthorsSection(props) {
  return (
    <section className={`authors-section ${props.className || ""}`}>
      {props.sectionHeader && (
        <SectionHeader
          title="Authors"
          highlight="All&nbsp;"
          text="Authors"
          to="/author"
        />
      )}
      <ul className="author-list">
        {props.data?.map((author) => (
          <li key={author.id}>
            <AuthorCard author={author} hoverLink={props.hoverLink} />
          </li>
        ))}
      </ul>
    </section>
  );
}
