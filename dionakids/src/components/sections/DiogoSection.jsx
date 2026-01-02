import "./DiogoSection.css";
const SectionIcon = "/assets/generic/gaming-controller.png"

const DiogoSection = ({ left, right }) => {
  return (
    <div className="section-wrapper">
    <div className="section-icon">
      <img src={SectionIcon}></img>
    </div>
      <h2>O seu Guia nessa aventura!</h2>
      <section className="diogo-section">
        <div className="column">{left}</div>
        <div className="column">{right}</div>
      </section>
    </div>
  );
};

export default DiogoSection;
