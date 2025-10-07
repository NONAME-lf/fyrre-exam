import "./style.scss";

export default function InputLabel(props) {
  return (
    <label htmlFor={props.id}>
      <input
        id={props.id}
        name={props.id}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
        type={props.type}
        className={props.className}
      />
      <span className="placeholder">{props.label}</span>
    </label>
  );
}
