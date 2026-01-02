import Grid from "../layout/Grid";
import "./ContactsSection.css";
import Accordion from "../accordion/Accordion"
import AccordionItem from "../accordion/AccordionItem"
import Card from "../cards/Card"
import BigButton from "../buttons/BigButton"

const ContactsSection = () => {
    return (
        <section className="contacts-section">
            {/* HEADER */}
            <div className="contacts-header">
                <h2>Perguntas Frequentes</h2>
            </div>

            {/* CONTENT */}
            <div className="contacts-content">
                <Accordion>
                    <AccordionItem title={"Qual a idade recomendada?"}>
                        4-99 anos.
                    </AccordionItem>

                    <AccordionItem title={"É necessário experiência própria?"}>
                        Não.
                    </AccordionItem>

                    <AccordionItem title={"Quais são os horários?"}>
                        24/7
                    </AccordionItem>

                    <AccordionItem title={"Existe opção online?"}>
                        Sim.
                    </AccordionItem>

                </Accordion>

                <Card
                    bgcolor={"#CAE5FF"}
                    bordercolor={"#000"}
                    borderradius={"28px"}
                    borderwidth={"3px"}
                    boxshadow={"5px 5px 0 #000"}
                >
                    <div className="card-content">

                        <div className="card-title">
                            <h2> Quer acompanhar as novidades?</h2>
                        </div>

                        <div className="card-body">
                            <Grid gap={32}>
                                <div className="news-description">
                                    <p>Receba todas as novidades em primeira mão além de descontos exclusivos e workshops divertidos!</p>
                                </div>
                                <div className="news-form">
                                    <form className="newsletter-form">
                                        <input
                                            type="email"
                                            placeholder="Digite seu melhor email..."
                                            required
                                        />

                                        <BigButton
                                            text={"INSCREVER-SE"}
                                            type="submit"
                                            backgroundColor={"#F05A4A"}
                                            borderColor="#000"
                                            boxShadow="3px 3px 0 #000"
                                            height={"52px"}
                                        >

                                        </BigButton>
                                    </form>
                                </div>
                            </Grid>
                        </div>

                    </div>
                </Card>

            </div>
        </section>
    );
};

export default ContactsSection;
