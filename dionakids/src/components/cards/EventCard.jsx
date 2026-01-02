import "./EventCard.css";
import BigButton from "../buttons/BigButton";

export default function EventCard({
  image,
  title,
  description,
  color,
  buttonText,
  buttonBorderColor,
}) {
  return (
    <div
      className="event-card"
      style={{
        borderColor: color,
        boxShadow: `6px 6px 0 ${color}`,
      }}
    >
      <div className="event-image">
        <img
          src={image}
          alt={title}
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
            borderColor={buttonBorderColor}
            boxShadowColor={color}
          />
        </div>
      </div>
    </div>
  );
}
