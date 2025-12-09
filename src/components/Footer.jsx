
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Biodecodificación. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#home">Inicio</a>
          <a href="#privacy">Política de Privacidad</a>
        </div>
      </div>
      <style jsx="true">{`
        .footer {
          background-color: var(--primary);
          padding: 40px 0;
          color: var(--text-on-primary);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer p {
          font-size: 0.9rem;
        }

        .footer-links a {
          margin-left: 20px;
          font-size: 0.9rem;
        }
        
        .footer-links a:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .footer-content {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
          .footer-links a {
            margin: 0 10px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
