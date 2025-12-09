
const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container about-content">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=799&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Terapeuta" />
        </div>
        <div className="about-text">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Sobre Mí</h2>
          <p>
            Hola, soy especialista en Biodecodificación Emocional y terapias holísticas.
            Mi misión es acompañarte en tu proceso de autoconocimiento y sanación.
          </p>
          <p>
            A través de diversas herramientas como los Registros Akáshicos y las Constelaciones
            Familiares, buscamos juntos el origen emocional de tus conflictos para transformarlos
            en aprendizaje y bienestar.
          </p>
          <p>
            Creo firmemente que todos tenemos la capacidad de sanar cuando escuchamos el lenguaje
            de nuestro cuerpo y nuestras emociones.
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
