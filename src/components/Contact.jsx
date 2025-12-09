import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-container">
        <h2 className="section-title">Contáctame</h2>
        <p className="contact-subtitle">
          ¿Tienes dudas o quieres agendar una sesión? Escríbeme.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <Phone className="icon" />
              <span>+123 456 789</span>
            </div>
            <div className="info-item">
              <Mail className="icon" />
              <span>contacto@biodeco.com</span>
            </div>

            <div className="social-links">
              <a href="#" className="social-icon"><Instagram /></a>
              <a href="#" className="social-icon"><Facebook /></a>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Tu Nombre" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Tu Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tu Mensaje" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn">Enviar Mensaje</button>
          </form>
        </div>
      </div>

      <style jsx="true">{`
        .contact {
          background: var(--bg-main);
        }

        .contact-subtitle {
          text-align: center;
          color: var(--text-main);
          margin-bottom: 60px;
          font-size: 1.1rem;
        }

        .contact-container {
          max-width: 900px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 80px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
          font-size: 1.1rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .icon {
          color: var(--primary);
          width: 28px;
          height: 28px;
        }

        .social-links {
          display: flex;
          gap: 20px;
          margin-top: 40px;
        }

        .social-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          transition: all 0.3s ease;
          border: 1px solid var(--border);
        }

        .social-icon:hover {
          background: var(--primary);
          color: var(--text-on-primary);
          transform: translateY(-4px);
          border-color: var(--primary);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: var(--bg-card);
          padding: 40px;
          border-radius: var(--radius-card);
          box-shadow: 0 4px 30px rgba(var(--shadow-color),0.05);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 16px;
          border: 1px solid var(--border);
          border-radius: 12px;
          font-family: inherit;
          color: var(--text-main);
          background-color: var(--bg-input);
          outline: none;
          transition: all 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--primary);
          background-color: var(--bg-main);
          box-shadow: 0 0 0 4px rgba(var(--shadow-color), 0.1);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
