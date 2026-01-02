import "./InfoTag.css";

const InfoTag = ({ text, bgColor }) => {
  return (
    <div
      className="info-tag"
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </div>
  );
};

export default InfoTag;
