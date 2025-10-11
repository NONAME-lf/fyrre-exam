import "./style.scss";

export default function InputLabel(props) {
  return (
    <label htmlFor={`${props.id}-${props.pos}`} className="input-label">
      <input
        id={`${props.id}-${props.pos}`}
        name={`${props.id}-${props.pos}`}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
        type={props.type}
        className={props.className}
      />
      <span>{props.placeholder}</span>
      <span className="placeholder">{props.label}</span>
    </label>
  );
}
