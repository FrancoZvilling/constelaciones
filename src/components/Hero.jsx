import coverImage from '../assets/images/cover.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img src={coverImage} alt="Cover" className="hero-image" />
      <div className="hero-content">
        <a href="#services" className="btn hero-btn">Ver Talleres</a>
      </div>

      <style jsx="true">{`
        .hero {
          width: 100%;
          height: 85vh; /* Fixed height to fit screen without scrolling */
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          margin-top: 0;
          background-color: var(--bg-main);
        }
        
        .hero-image {
           width: 100%;
           height: 100%; /* Fill the fixed container */
           display: block;
           object-fit: cover; /* Fill width AND height, cropping excess to prevent zoom/scroll issues */
           border-radius: 0; 
        }

        .hero-content {
          position: absolute;
          bottom: 10%; /* Position at the bottom */
          left: 60%;    /* Adjust this value to move right (e.g., 15%, 20%) */
          transform: none; /* Remove centering transform */
          z-index: 10;
          text-align: left; /* Align text left */
          width: auto; /* Allow it to shrink to fit content */
        }

        .hero-btn {
          font-size: 1.5rem;
          padding: 15px 40px;
          border-radius: 50px;
          box-shadow: 0 8px 32px rgba(var(--shadow-color), 0.4);
          background-color: var(--primary);
          color: var(--text-on-primary);
          border: 2px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(4px);
        }

        .hero-btn:hover {
          transform: scale(1.05); /* This is fine */
          background-color: var(--bg-card);
          color: var(--primary);
          border-color: var(--primary);
        }

        @media (max-width: 768px) {
          .hero {
            height: 70vh; /* Slightly shorter on mobile to fit nicely */
          }

          .hero-content {
            left: 50%;
            bottom: 15%; /* Lift slightly higher on mobile */
            transform: translateX(-50%);
            text-align: center;
            width: 100%;
          }

          .hero-btn {
             font-size: 1.2rem;
             padding: 12px 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
