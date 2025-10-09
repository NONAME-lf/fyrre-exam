export default function PageSlogan(props) {
  return (
    <div className="img-wrap slogan">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1520"
        height="215"
        viewBox="0 0 1520 215"
        fill="none"
        dangerouslySetInnerHTML={{ __html: props.svgContent }}
      />
    </div>
  );
}
