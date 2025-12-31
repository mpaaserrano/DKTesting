import "./AboutCard.css";
import Card from "./Card";
import StatusBar from "../bars/StatusBar";

const AboutCard = () => {
    return (
        <div className="about-card">
            <Card bordercolor="#000" borderwidth="2px" bgcolor="#fff" boxshadow="4px 4px 0 black">
                <div className="about-wrapper">
                    <h3>Quem é o Diogo?</h3>
                    <p >
                        Sou um português apaixonado pela Bahia! 🔥 Venho de Alcobaça. Sim, também tem Alcobaça em Portugal! 🇵🇹 Visite a Dona Ema - a padaria de minha mãe - e falem de mim e recebem um “Bolo de Noiva”, por nossa conta!
                    </p>
                    <p>
                        Originalmente sou desenvolvedor de software, mas desde que experimentei dar uma aula que descobri meu verdadeiro talento. Adoro ensinar, inspirar, motivar, transformar carreiras!
                    </p>
                    <p>
                        No meu dia-a-dia, ensino como trabalhar em projetos complexos da nuvem e em IA, e também atuo como empresário na minha agência Dionamite.
                    </p>
                    <StatusBar
                        label="HABILIDADE DE ENSINO"
                        value={100}
                        valueText="100%"
                        color="#ff4d88"
                    />

                    <StatusBar
                        label="SOTAQUE PORTUGUÊS"
                        value={100}
                        valueText="MAIS DE 9000"
                        color="#ffd400"
                    />
                </div>
            </Card>
        </div>
    );
};

export default AboutCard;
