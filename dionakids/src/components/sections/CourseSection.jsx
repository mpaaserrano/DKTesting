import Grid from "../layout/Grid";
import CourseCard from "../cards/CourseCard";
import Card from "../cards/Card";
const Dino = "/assets/generic/dino.png"
const Aprender = "/assets/generic/aprender-brincando.png"
import "./CourseSection.css";

const CourseSection = () => {
  return (
    <div className="section-wrapper">
      {/* HEADER */}
      <div className="top">
      
        {/* 🏷️ Badge */}
        <img
          src={Aprender}
          alt="Aprender Brincando"
          className="courses-badge"
        />

        {/* 🦖 Dinossauro */}
        <img
          src={Dino}
          alt="Dinossauro"
          className="courses-mascot"
        />

        
        

        <h2>Nossos Cursos</h2>
        <p>
          Todas as aulas são presenciais no nosso studio em Vitória da Conquista.
          Os cursos são 2x por semana depois da escola, ou ao sábado se for 1x por semana.
        </p>
      </div>

      {/* CARDS */}
      <Grid gap={32}>
        <CourseCard
          image="/assets/cards/courses/DionaKidz.png"
          age="7 A 11 ANOS"
          title="DionaKidz"
          subject="Minecraft & Python Introdutório"
          description="Minecraft é o puxador emocional: o aluno sente que está hackeando o mundo favorito dele. Python leve nessa idade é excelente."
          price="220"
          color="#F7941D"
          borderColor="#C26A10"
        />

        <CourseCard
          image="/assets/cards/courses/DionaTeenz.png"
          age="11 A 14 ANOS"
          title="DionaTeenz"
          subject="Roblox Studio & Desenvolvimento Web"
          description="Roblox dá criatividade imediata e lógica de programação; Web Dev dá noção real de criação."
          price="250"
          color="#4AA3F8"
          borderColor="#1E2939"
        />

        <CourseCard
          image="/assets/cards/courses/DionaBotz.png"
          age="9 A 14 ANOS"
          title="DionaBotz - Robótica"
          subject="Arduino, Raspberry Pi & Linux"
          description="Arduino é o ponto de partida para a robótica; Raspberry Pi abre portas para projetos mais complexos."
          price="300"
          color="#F05A4A"
          borderColor="#A02619"
        />
      </Grid>

      {/* BOTTOM CARD */}
      <div className="bottom-card">
        <Card
          bgcolor="#FDB933"
          bordercolor="black"
          borderradius="32px"
          borderwidth="2px"
          boxshadow="4px 4px 0 black"
        >
          <Grid gap={32}>
            <div className="bottom-card-text">
              <h2>Como funciona?</h2>
              <p>📍 Aulas presenciais em Vitória da Conquista.</p>
              <p>📅 Turmas 2x por semana (depois da escola) ou apenas nos sábados</p>
            </div>

            <div className="soon-card">
              <Card
                bgcolor="white"
                bordercolor="black"
                borderradius="8px"
                borderwidth="2px"
                boxshadow="3px 3px 0 black"
              >
                <h2>🏗️ EM BREVE 🏗️</h2>
                <p>
                  Futuramente iremos lançar a DionaBoss, que terá foco especial em
                  preparar desenvolvedores adolescentes para o mercado de trabalho.
                </p>
              </Card>
            </div>
          </Grid>
        </Card>
      </div>
    </div>
  );
};

export default CourseSection;
