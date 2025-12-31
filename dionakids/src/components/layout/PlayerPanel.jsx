import PlayerSelectCard from "../cards/PlayerSelectCard";
import AboutCard from "../cards/AboutCard";
import QuoteCard from "../cards/QuoteCard";
import InfoTag from "../cards/InfoTag";
import "./PlayerPanel.css";

const PlayerPanel = () => {
  return (
    <div className="player-panel">
      {/* TOP (natural height) */}
      <div className="panel-top">
        <PlayerSelectCard />

        <div className="info-tags">
          <InfoTag text="CLASSE: PROFESSOR" bgColor="#2da1ff" />
          <InfoTag text="ORIGEM: PORTUGAL 🇵🇹" bgColor="#ff4d88" />
        </div>
      </div>

      {/* STRETCH ZONES */}
      <AboutCard />
      <QuoteCard />
    </div>
  );
};

export default PlayerPanel;
