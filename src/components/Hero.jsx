
const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>Sanando el alma,<br />liberando emociones</h1>
                    <p>
                        Descubre el poder de la biodecodificación emocional y encuentra el equilibrio
                        que tu vida necesita. Espacios de sanación a través de talleres y sesiones personalizadas.
                    </p>
                    <a href="#services" className="btn">Ver Talleres</a>
                </div>
                <div className="hero-image">
                    {/* Placeholder for generated image */}
                    <div className="image-placeholder">
                        <img src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2672&auto=format&fit=crop" alt="Meditación y paz" />
                    </div>
                </div>
            </div>

            <style jsx="true">{`
        .hero {
          padding-top: 120px;
          padding-bottom: 80px;
          background: linear-gradient(135deg, var(--color-bg) 0%, #ffecec 100%);
          min-height: 90vh;
          display: flex;
          align-items: center;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 20px;
          color: var(--color-text);
        }

        .hero-text p {
          font-size: 1.2rem;
          color: var(--color-text-light);
          margin-bottom: 30px;
          max-width: 90%;
        }

        .hero-image img {
          width: 100%;
          height: auto;
          box-shadow: var(--shadow-soft);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          transition: border-radius 0.5s ease;
        }
        
        .hero-image:hover img {
           border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-text p {
            margin: 0 auto 30px;
          }
          
          .hero-image {
             margin-top: 40px;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
