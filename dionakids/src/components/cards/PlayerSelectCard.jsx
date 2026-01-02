import Card from "./Card";
import "./PlayerSelectCard.css";

const RightArrow = "/assets/generic/Right-Arrow.svg";

const PlayerSelectCard = () => {
    return (
        <div className="card-wrapper">
            <Card
                bgcolor="#f4a340"
                bordercolor="#000"
                borderwidth="3px"
                boxshadow="4px 4px 0 #000"
            >
                <div className="player-select">
                    <h2>Player Select:</h2>

                    <div className="player-row">
                        <img src={RightArrow} alt="Select arrow" />
                        <span>DIOGO BARROS</span>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default PlayerSelectCard;
