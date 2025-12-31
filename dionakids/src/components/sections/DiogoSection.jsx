import "./DiogoSection.css";

const DiogoSection = ({ left, right }) => {
  return (
    <section className="diogo-section">
      <div className="column">{left}</div>
      <div className="column">{right}</div>
    </section>
  );
};

export default DiogoSection;
