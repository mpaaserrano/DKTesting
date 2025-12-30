import "./CourseCard.css";

export default function CourseCard({
  image,
  age,
  title,
  subject,
  description,
  price,
  color,
}) {
  return (
    <div className="course-card" style={{ borderColor: color }}>
      
      <div className="course-image">
        <img src={image} alt={title}  style={{ borderColor: color }} />
        <span className="course-age" style={{ backgroundColor: color }}>
          {age}
        </span>
      </div>

      <div className="course-content">
        <h3 style={{ color }}>{title}</h3>
        <h4>{subject}</h4>

        <p>{description}</p>

        <div className="course-price">
          <span>INVESTIMENTO</span>
          <strong style={{ color }}>
            R$ {price} <small>/mês</small>
          </strong>
        </div>

        <button
          className="course-btn"
          style={{ backgroundColor: color }}
        >
          QUERO ESTE! →
        </button>
      </div>

    </div>
  );
}
