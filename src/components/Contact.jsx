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
          background: #fff;
        }

        .contact-subtitle {
          text-align: center;
          color: var(--color-text-light);
          margin-bottom: 40px;
        }

        .contact-container {
          max-width: 800px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          font-size: 1.1rem;
          color: var(--color-text);
        }

        .icon {
          color: var(--color-primary);
        }

        .social-links {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--color-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: var(--color-primary);
          color: white;
          transform: translateY(-3px);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-family: inherit;
          outline: none;
          transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--color-primary);
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
