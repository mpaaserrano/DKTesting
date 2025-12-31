import "./Card.css";

const Card = ({
  bgcolor,
  bordercolor,
  borderwidth,
  boxshadow,
  borderradius,
  children
}) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: bgcolor,
        borderColor: bordercolor,
        borderWidth: borderwidth,
        boxShadow: boxshadow,
        borderRadius: borderradius,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
