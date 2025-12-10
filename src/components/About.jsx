
import meDark from '../assets/images/me-dark.webp';
import meWhite from '../assets/images/me-white.webp';

const About = ({ theme }) => {
  return (
    <section id="about" className="section about">
      <div className="container about-content">
        <div className="about-image">
          <img
            src={theme === 'light' ? meWhite : meDark}
            alt="Terapeuta"
            style={{ transition: 'opacity 0.3s ease' }}
          />
        </div>
        <div className="about-text">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Sobre Mí</h2>
          <p>
            Soy María Lorena Calcopietro, Licenciada en Comunicación y fundadora de <a href="https://www.instagram.com/activatupazinterior?igsh=dzJhd3l1YnR4czJv&utm_source=qr" target="_blank" rel="noopener noreferrer" className="brand-link">Activa tu Paz Interior</a>, un espacio dedicado a la sanación emocional para lograr el bienestar.
            Mi misión es acompañarte en un camino de autoconocimiento para que puedas identificar emociones, bloqueos y patrones que influyen en tu armonía.
          </p>
          <p>
            A través de métodos como la biodescodificación emocional, constelaciones familiares y los Registros Akáshicos, te invito a explorar tu mundo interior y abrir espacio a la transformación.
            Creo en el poder de sanar cuando escuchamos nuestro cuerpo y nuestras emociones.
          </p>
          <p>
            En <a href="https://www.instagram.com/activatupazinterior?igsh=dzJhd3l1YnR4czJv&utm_source=qr" target="_blank" rel="noopener noreferrer" className="brand-link">Activa tu Paz Interior</a> encontrarás un sitio seguro para reconectar con tu esencia y transformar tu historia desde la raíz.
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

        .brand-link {
          font-weight: bold;
          color: var(--primary);
          text-decoration: none;
          transition: opacity 0.3s;
        }
        
        .brand-link:hover {
          text-decoration: underline;
          opacity: 0.8;
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
