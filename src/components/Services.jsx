import { Link } from 'react-router-dom';
import { workshops } from '../data/workshops';

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Talleres y Sesiones</h2>
        <div className="services-grid">
          {workshops.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <Link to={`/taller/${service.id}`} className="card-btn">
                  Más información
                </Link>
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
          display: flex;
          flex-direction: column;
          height: 100%;
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
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-content h3 {
          color: var(--primary);
          margin-bottom: 15px;
          font-size: 1.6rem;
          min-height: 4.8rem; /* Aprox 3 lines height to align description */
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
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
          margin-top: auto;
          align-self: flex-start;
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
