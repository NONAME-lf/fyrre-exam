import "./style.scss";

export default function SocList() {
  return (
    <>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer nofollow">
          <svg className="icon">
            <use
              xlinkHref={`${import.meta.env.BASE_URL}/sprite.svg#intagram`}
            ></use>
          </svg>
        </a>
      </li>
      <li>
        <svg className="icon">
          <use xlinkHref={`${import.meta.env.BASE_URL}/sprite.svg#rirss`}></use>
        </svg>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer nofollow">
          <svg className="icon">
            <use
              xlinkHref={`${import.meta.env.BASE_URL}/sprite.svg#twitter`}
            ></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer nofollow">
          <svg className="icon">
            <use
              xlinkHref={`${import.meta.env.BASE_URL}/sprite.svg#youtube`}
            ></use>
          </svg>
        </a>
      </li>
    </>
  );
}
