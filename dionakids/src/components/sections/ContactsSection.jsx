import Grid from "../layout/Grid";
import "./ContactsSection.css";
import Accordion from "../accordion/Accordion"
import AccordionItem from "../accordion/AccordionItem"

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

            </div>
        </section>
    );
};

export default ContactsSection;
