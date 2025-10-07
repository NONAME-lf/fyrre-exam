import "./style.scss";
import { useEffect, useState } from "react";
import { getImagePath } from "../../helpers";
import { NavLink } from "react-router";
export default function AuthorCard(props) {
  const [imagePath, setImagePath] = useState(null);

  const image = () => {
    if (!props.author?.img) {
      return false;
    }
    setImagePath(getImagePath(`${props.author.img}`));
  };

  useEffect(() => {
    image();
  }, [props.author]);

  return (
    <div className="author-card">
      <NavLink to={`/authors/${props.author.id}`} className="link-hover">
        <div className="img-wrap">
          <img
            src={imagePath}
            alt={`${props.author.name} image`}
            onError={() => setImagePath(getImagePath("no-image.jpg"))}
          />
        </div>
      </NavLink>
      <div className="content">
        <NavLink to={`/authors/${props.author.id}`} className="link-hover">
          <h3>{props.author.name}</h3>
        </NavLink>
        <div className="info">
          <div className="job">
            <span>Job</span>
            {props.author.job}
          </div>
          <div className="city">
            <span>City</span>
            {props.author.city}
          </div>
        </div>
      </div>
    </div>
  );
}
