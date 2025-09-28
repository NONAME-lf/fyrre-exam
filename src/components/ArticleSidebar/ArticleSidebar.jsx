import { NavLink } from "react-router";

export default function ArticleSidebar() {
  return (
    <>
      <div className="magazine">
        <div className="info"></div>
        <div className="img-wrap"></div>
        <NavLink to="/magazine" className="btn">
          See all magazines
        </NavLink>
      </div>
      <div className="popular">
        <span>Most Popular</span>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className="newsletter">
        <span>NEWSLETTER</span>
        <span>Design News to your inbox</span>
        <FormInput />
        <Button />
      </div>
    </>
  );
}
