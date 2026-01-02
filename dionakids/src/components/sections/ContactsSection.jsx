import Grid from "../layout/Grid";
import "./ContactsSection.css";
import Accordion from "../accordion/Accordion"
import AccordionItem from "../accordion/AccordionItem"
import Card from "../cards/Card"
import BigButton from "../buttons/BigButton"

/* Image imports */
const Address = "assets/contacts/address.png"
const WhatsApp = "assets/contacts/whatsapp.png"
const Email = "assets/contacts/email.png"


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

                {/* NEWSLETTER CARD*/}
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

                {/*CONTACT FORM CARD */}
                <Card
                    bgcolor={"#A892FF"}
                    bordercolor={"#000"}
                    borderradius={"28px"}
                    borderwidth={"3px"}
                    boxshadow={"5px 5px 0 #000"}
                >
                    <div className="card-content">
                        <Grid gap={32}>
                            <div className="card-left">
                                <div className="card-title">
                                    <h2>Vamos conversar?</h2>
                                </div>
                                <div className="card-description">
                                    <p>Estamos à disposição para tirar todas as suas dúvidas. Venha nos visitar e conhecer a nossa escola!</p>
                                </div>
                                <div className="left-body">
                                    <div className="card-holder">
                                        <div className="contact-card">
                                            <Card
                                                bgcolor={"#fff"}
                                                bordercolor={"#000"}
                                                borderradius={"20px"}
                                                borderwidth={"3px"}
                                                boxshadow={"4px 4px 0 #000"}
                                            >
                                                <div className="contact-item">
                                                    <img src={Address} alt="Address" className="contact-img" />

                                                    <div className="contact-text">
                                                        <h3>Endereço</h3>
                                                        <p>Avenida Dilson Bastos n.º145, APT 201</p>
                                                        <p>Vitória da Conquista - BA</p>
                                                    </div>
                                                </div>


                                            </Card>
                                        </div>
                                        <div className="contact-card">
                                            <Card
                                                bgcolor={"#fff"}
                                                bordercolor={"#000"}
                                                borderradius={"20px"}
                                                borderwidth={"3px"}
                                                boxshadow={"4px 4px 0 #000"}
                                            >
                                                <div className="contact-item">
                                                    <img src={WhatsApp} alt="Address" className="contact-img" />

                                                    <div className="contact-text">
                                                        <h3>WhatsApp</h3>
                                                        <p>(77) 99999-9999</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>

                                        <div className="contact-card">
                                            <Card
                                                bgcolor={"#fff"}
                                                bordercolor={"#000"}
                                                borderradius={"20px"}
                                                borderwidth={"3px"}
                                                boxshadow={"4px 4px 0 #000"}
                                            >
                                                <div className="contact-item">
                                                    <img src={Email} alt="Address" className="contact-img" />

                                                    <div className="contact-text">
                                                        <h3>Email</h3>
                                                        <p>contato@dionakids.com.br</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-right">
                                <Card
                                    bgcolor={"#fff"}
                                    bordercolor={"#000"}
                                    borderradius={"28px"}
                                    borderwidth={"3px"}
                                    boxshadow={"8px 8px 0 #000"}
                                >
                                    <form className="contact-form">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>NOME DO RESPONSÁVEL</label>
                                                <input type="text" placeholder="Seu nome" />
                                            </div>

                                            <div className="form-group">
                                                <label>NOME DO ALUNO</label>
                                                <input type="text" placeholder="Nome do aluno" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>EMAIL</label>
                                            <input type="email" placeholder="seu@email.com" />
                                        </div>

                                        <div className="form-group">
                                            <label>TELEFONE / WHATSAPP</label>
                                            <input type="tel" placeholder="(00) 00000-0000" />
                                        </div>

                                        <div className="form-group">
                                            <label>MENSAGEM</label>
                                            <textarea placeholder="Como podemos ajudar?" />
                                        </div>

                                        <BigButton
                                            text={"ENVIAR MENSAGEM"}
                                            type="submit"
                                            backgroundColor={"#F05A4A"}
                                            borderColor="#460801"
                                            boxShadow="0px 3px 0 #460801"
                                            width={"100%"}
                                        ></BigButton>
                                    </form>

                                </Card>
                            </div>

                        </Grid>
                    </div >
                </Card >

            </div >
        </section >
    );
};

export default ContactsSection;
