import Card from "./Card";
import StatusBar from "../bars/StatusBar";
import "./CharacterCard.css";

const characterImg = "/assets/diogo/diogo-full.png";

const CharacterCard = () => {
    return (
        <div className="character-column">
            <Card
                bgcolor="#fff"
                bordercolor="#4b2e0f"
                borderwidth="4px"
                boxshadow="6px 6px 0 #4b2e0f"
                borderradius="32px"
                className="character-card"   // 🔥 ADD THIS
            >
                <div className="character-wrapper">
                    <img src={characterImg} alt="Diogo" />
                </div>
            </Card>
        </div>
    );
};

export default CharacterCard;
