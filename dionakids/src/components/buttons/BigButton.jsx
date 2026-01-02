import "./BigButton.css";

export default function BigButton({
  text,
  url,
  backgroundColor,
  borderColor,
  boxShadowColor,
}) {
  return (
    <a
      href={url}
      className="big-button"
      style={{
        backgroundColor,
        borderColor,
        boxShadow: `0 6px 0 ${boxShadowColor}`,
      }}
    >
      {text}
    </a>
  );
}
