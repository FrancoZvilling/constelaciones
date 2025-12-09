import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/123456789"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      <style jsx="true">{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background-color: var(--primary);
          color: var(--text-on-primary);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(var(--shadow-color), 0.4);
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(var(--shadow-color), 0.6);
        }
      `}</style>
    </a>
  );
};

export default FloatingWhatsApp;
