import Card from "./Card";
import "./QuoteCard.css";
import bahiaFlag from "/assets/flags/bahia.png";

const QuoteCard = () => {
  return (
    <Card
      bgcolor="#fde7b5"
      bordercolor="#000"
      borderwidth="3px"
      boxshadow="3px 3px 0 #000"
      borderradius="18px"
      className="quote-card"
    >
      <p className="quote-title">
        “Mas Diogo, porquê Conquista com tanto lugar legal por aí?”
      </p>

      <p className="quote-subtitle">Todo mundo pergunta e eu respondo:</p>

      <ol className="quote-list">
        <li>Amo a Bahia;</li>
        <li>Amo lugares menores;</li>
        <li>
          Depois de ter assistido à novela Pedra sobre Pedra, meu sonho é ter meu
          lugarzinho lindo maravilhoso aqui no interior. 😄✨
        </li>
      </ol>

      <img
        src={bahiaFlag}
        alt="Bandeira da Bahia"
        className="quote-flag"
      />
    </Card>
  );
};

export default QuoteCard;
