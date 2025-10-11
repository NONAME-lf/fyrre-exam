import "./style.scss";

export default function FormButton(props) {
  return (
    <button id="submit-button" type="submit" className="btn">
      {/* <!-- use span here instead of div, because div elements isn't allowed inside of button --> */}
      <span className="text">{props.text}</span>
      <span className="pluses">+++</span>
    </button>
  );
}
