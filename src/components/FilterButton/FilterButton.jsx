import CategoryLabel from "../CategoryLabel/CategoryLabel";
import "./style.scss";

export default function FilterButton(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button
      className={`btn filter ${props.isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <CategoryLabel category={props.title} />
    </button>
  );
}
