import "./style.scss";

export default function ListenList(props) {
  console.log(props);

  return (
    <ul className="listen-list">
      <li>
        <a
          href={props.spotify}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={props.inverted}
        >
          <svg className="icon">
            <use
              xlinkHref={`${import.meta.env.BASE_URL}/sprite.svg#spotify`}
            ></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={props.inverted}
        >
          <svg className="icon">
            <use
              xlinkHref={`${import.meta.env.BASE_URL}/sprite.svg#apple`}
            ></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={props.inverted}
        >
          <svg className="icon">
            <use
              xlinkHref={`${import.meta.env.BASE_URL}/sprite.svg#soundcloud`}
            ></use>
          </svg>
        </a>
      </li>
    </ul>
  );
}
