import "./style.scss";

export default function FormButton(props) {
  return (
    <button id="submit-button" type="submit" className="btn">
      {/* <!-- use span here instead of div, because div elements isn't allowed inside of button --> */}
      {props.text}
    </button>
  );
}
