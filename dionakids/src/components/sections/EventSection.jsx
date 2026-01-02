import Grid from "../layout/Grid";
import "./EventSection.css";

const EventSection = () => {
    return (
        <section className="event-section">
            {/* HEADER */}
            <div className="event-header">
                <h2>Eventos e Workshops</h2>
                <p>
                    Participe das nossas atividades e aprenda se divertindo. Venha conhecer a turma!
                </p>
            </div>

            {/* CONTENT */}
            <div className="event-content">
                <Grid gap={32}>

                    

                </Grid>

            </div>
        </section>
    );
};

export default EventSection;
