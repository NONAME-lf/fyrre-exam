import { NavLink } from "react-router";

export default function ArticleSection() {
  return (
    <>
      <ul className="articles"></ul>
      <NavLink to="/magazine">All Articles</NavLink>
      <div className="sidebar"></div>
    </>
  );
}
