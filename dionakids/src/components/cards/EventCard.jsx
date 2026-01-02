import "./EventCard.css";
import BigButton from "../buttons/BigButton";

export default function EventCard({
  image,
  title,
  description,
  color,
  borderColor,
  buttonText,
}) {
  return (
    <div
      className="event-card"
      style={{
        borderColor: color,
        boxShadow: `5px 5px 0 ${color}`,
      }}
    >
      <div className="event-image">
        <img
          src={image}
          alt={title}
          style={{ borderBottomColor: color }}
        />
      </div>

      <div className="event-content">
        <h3 style={{ color }}>{title}</h3>

        <p>{description}</p>

        {/* Footer fixo no fundo */}
        <div className="event-footer">
          <BigButton
            text={buttonText}
            backgroundColor={color}
            borderColor={borderColor}
          />
        </div>
      </div>
    </div>
  );
}
