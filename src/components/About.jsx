
import meDesktop from '../assets/images/me2.jpeg';
import meMobile from '../assets/images/me.jpeg';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container about-content">
        <div className="about-image">
          <picture>
            <source media="(max-width: 768px)" srcSet={meMobile} />
            <img src={meDesktop} alt="Terapeuta" />
          </picture>
        </div>
        <div className="about-text">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Sobre Mí</h2>
          <p>
            Soy María Lorena Calcopietro, Licenciada en Comunicación y fundadora de Activa tu Paz Interior, un espacio dedicado a la sanación emocional y el bienestar holístico.
            Mi misión es acompañarte en un camino de autoconocimiento para que puedas identificar emociones, bloqueos y patrones que influyen en tu bienestar.
          </p>
          <p>
            A través de herramientas holísticas como la biodescodificación emocional y los Registros Akáshicos, te invito a explorar tu mundo interior y abrir espacio a la transformación.
            Creo en el poder de sanar cuando escuchamos nuestro cuerpo y nuestras emociones.
          </p>
          <p>
            En Activa tu Paz Interior encontrarás un lugar seguro para reconectar con tu esencia y transformar tu historia desde la raíz.
          </p>
        </div>
      </div>

      <style jsx="true">{`
        .about {
          background-color: var(--bg-main);
          position: relative;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-soft);
        }

        .about-text p {
          margin-bottom: 20px;
          color: var(--text-main);
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
          
          .about-image {
            order: -1;
            margin-bottom: 20px;
          }
          
          .about-text h2 {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
