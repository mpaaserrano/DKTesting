import Grid from "../layout/Grid";
import "./EventSection.css";
import EventCard from "../cards/EventCard"

//Image imports
const MinecraftWorkshop = "/assets/events/minecraft-workshop.png"
const Security = "/assets/events/security.png"
const Holiday = "/assets/events/holiday.png"
const PuraDiversao = "/assets/events/pura-diversao.png"

const EventSection = () => {
    return (
        <section className="event-section">
            {/* HEADER */}
            <div className="event-header">
                <img
                    src={PuraDiversao}
                    alt="Pura diversão"
                    className="event-badge"
                />

                <h2>Eventos e Workshops</h2>
                <p>
                    Participe das nossas atividades e aprenda se divertindo. Venha conhecer a turma!
                </p>
            </div>

            {/* CONTENT */}
            <div className="event-content">
                <Grid gap={32}>
                    <EventCard
                        image={MinecraftWorkshop}
                        title="Workshop de Minecraft"
                        description="Todos os meses, temos o nosso workshop público! Esse mês é Minecraft, venha aprender como podemos criar regras no mundo aberto!"
                        buttonText="INSCREVA-SE"
                        color="#000"
                        buttonBorderColor="#3C3C3C"
                    />

                    <EventCard
                        image={Security}
                        title="LIVE: Segurança online"
                        description="Como fazer seu filho/a ter conhecimento do que é seguro e do que não é seguro?"
                        buttonText="QUERO ASSISTIR!"
                        color="#000"
                        buttonBorderColor="#3C3C3C"
                    />

                    <EventCard
                        image={Holiday}
                        title="Colônia de Férias"
                        description="Aproveite próxima época para dar uma nova skill pra seu filho/a"
                        buttonText="SAIBA MAIS"
                        color="#000"
                        buttonBorderColor="#3C3C3C"
                    />



                </Grid>

            </div>
        </section>
    );
};

export default EventSection;
