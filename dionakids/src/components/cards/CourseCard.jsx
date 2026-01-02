import "./CourseCard.css";
import BigButton from "../buttons/BigButton";

export default function CourseCard({
  image,
  age,
  title,
  subject,
  description,
  price,
  color,
  borderColor,
}) {
  return (
    <div
      className="course-card"
      style={{
        borderColor: color,
        boxShadow: `6px 6px 0 ${color}`,
      }}
    >
      <div className="course-image">
        <img
          src={image}
          alt={title}
          style={{ borderBottomColor: color }}
        />

        <span
          className="course-age"
          style={{ backgroundColor: color }}
        >
          {age}
        </span>
      </div>

      <div className="course-content">
        <h3 style={{ color }}>{title}</h3>
        <h4>{subject}</h4>

        <p>{description}</p>

        {/* Footer fixo no fundo */}
        <div className="course-footer">
          <div className="course-price">
            <span>INVESTIMENTO</span>
            <strong style={{ color }}>
              R$ {price} <small>/mês</small>
            </strong>
          </div>

          <BigButton
            text="QUERO ESTE! →"
            backgroundColor={color}
            borderColor={borderColor}
          />
        </div>
      </div>
    </div>
  );
}
