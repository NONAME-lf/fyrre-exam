export default function PageSlogan(props) {
  return (
    <div
      className={`img-wrap slogan ${props.className || ""}`}
      dangerouslySetInnerHTML={{ __html: props.svgContent }}
    ></div>
  );
}
