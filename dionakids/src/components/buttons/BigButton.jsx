import "./BigButton.css";

export default function BigButton({
  text,
  url,
  backgroundColor,
  borderColor,
  boxShadow,
  height,
  width,
}) {
  return (
    <a
      href={url}
      className="big-button"
      style={{
        backgroundColor,
        borderColor,
        boxShadow,
        height,
        width,
      }}
    >
      <span className="button-text">{text}</span>
    </a>
  );
}
