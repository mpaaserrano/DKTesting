import Grid from "../layout/Grid";
import "./MethodologySection.css";
const Code = "/assets/methodology/code.png"
const Puzzle = "/assets/methodology/puzzle.png"
const Team = "/assets/methodology/team.png"
const Dino = "/assets/methodology/dino-big.png"

const MethodologySection = () => {
    return (
        <section className="methodology-section">
            {/* HEADER */}
            <div className="methodology-header">
                <h2>Nossa Metodologia</h2>
                <p>
                    Nosso objetivo é cativar a atenção, mas acima disso, ensinar lições valiosas para a vida.
                </p>
            </div>

            {/* CONTENT */}
            <div className="methodology-content">
                <Grid gap={32}>

                    <div className="methodology-item">
                        <div className="item-img">
                            <img src={Code} alt="Code"></img>
                        </div>
                        <div className="item-body">
                            <h3>Prática Constante</h3>
                            <p>
                                Todas as nossas lições têm prática. Todas as semanas o aluno terá um mini-projeto para concluir e executar seu aprendizado.
                            </p>
                        </div>
                    </div>

                    <div className="methodology-item">
                        <div className="item-img">
                            <img src={Puzzle} alt="Puzzle"></img>
                        </div>
                        <div className="item-body">
                            <h3>Resoluções de Problemas</h3>
                            <p>
                                O nosso objetivo é trabalhar a mente dos jovens para que desenvolvam o pensamento crítico em busca de soluções criativas para os problemas.
                            </p>
                        </div>
                    </div>

                    <div className="methodology-item">
                        <div className="item-img">
                            <img src={Team} alt="Team"></img>
                        </div>
                        <div className="item-body">
                            <h3>Trabalho em Equipe</h3>
                            <p>
                                Focamos em criatividade e colaboração, preparando os alunos para o ambiente real de tecnologia e empresarial.                            </p>
                        </div>
                    </div>

                </Grid>

            </div>

            <img
                src={Dino}
                alt="Dinossauro"
                className="methodology-mascot"
            />
        </section>
    );
};

export default MethodologySection;
