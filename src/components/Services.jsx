
const servicesData = [
  {
    title: "Biodecodificación",
    description: "Encuentra el origen emocional de tus síntomas físicos y patrones de vida. Sesiones individuales para sanar desde la raíz.",
    image: "https://extension.unicen.edu.ar/wp-content/uploads/2016/03/BIODECODIFICACION2016-imagne-1.jpg"
  },
  {
    title: "Constelaciones Familiares",
    description: "Ordena tu sistema familiar y libera cargas transgeneracionales. Talleres grupales e individuales disponibles.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2664&auto=format&fit=crop"
  },
  {
    title: "Registros Akáshicos",
    description: "Accede a la sabiduría de tu alma. Lecturas para obtener guía, claridad y comprensión sobre tu camino evolutivo.",
    image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=2699&auto=format&fit=crop"
  }
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Talleres y Sesiones</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="card-btn">Más información</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .services {
          background-color: var(--bg-card);
          position: relative;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .service-card {
          background: var(--bg-main);
          border-radius: var(--radius-card);
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(var(--shadow-color),0.05);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          border: 1px solid var(--border);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-soft);
          border-color: var(--primary);
        }

        .card-image img {
          width: 100%;
          height: 240px;
          object-fit: cover;
        }

        .card-content {
          padding: 30px;
          text-align: left;
        }

        .card-content h3 {
          color: var(--primary);
          margin-bottom: 15px;
          font-size: 1.6rem;
        }

        .card-content p {
          color: var(--text-main);
          margin-bottom: 25px;
          font-size: 1rem;
          line-height: 1.7;
        }

        .card-btn {
          background: transparent;
          border: 1px solid var(--primary);
          color: var(--primary);
          padding: 10px 24px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .card-btn:hover {
          background: var(--primary);
          color: var(--text-on-primary);
        }
      `}</style>
    </section>
  );
};

export default Services;
