import { useState, useEffect } from 'react';
import cover0 from '../assets/images/cover0.jpg';
import coverImage from '../assets/images/cover.jpg';
import coverImage2 from '../assets/images/cover2.jpg';
import coverImage3 from '../assets/images/cover3.jpg';
import coverImage4 from '../assets/images/cover4.jpg';

const Hero = () => {
  const images = [cover0, coverImage, coverImage2, coverImage3, coverImage4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 70000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images.length]); // Reset timer on index change

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="home" className="hero">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`hero-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}

      <div className="hero-content">
        <a href="#services" className="hero-btn">Ver Talleres</a>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
           position: absolute;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%; /* Fill the fixed container */
           display: block;
           object-fit: cover; /* Fill width AND height */
           border-radius: 0;
           opacity: 0;
           transition: opacity 1.5s ease-in-out; /* Smooth crossfade */
           z-index: 1;
        }

        .hero-image.active {
          opacity: 1;
          z-index: 2;
        }

        .hero-content {
          position: absolute;
          bottom: 10%; 
          left: 60%;    
          transform: none; 
          z-index: 10; /* Ensure content is above images */
          text-align: left; 
          width: auto; 
        }

        .hero-btn {
          padding: 15px 40px;
          font-size: 1.5rem;
          background-color: var(--primary);
          color: var(--text-on-primary);
          border: none;
          max-width: 300px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
          font-family: 'Cinzel', serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .hero-btn:hover {
          background-color: var(--secondary);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }


        .carousel-dots {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
          z-index: 20;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.5); /* Darker for contrast on light images */
          border: 2px solid rgba(255, 255, 255, 0.5); /* Light border for contrast on dark images */
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot.active {
          background-color: var(--primary);
          transform: scale(1.2);
          border-color: var(--bg-main);
        }

        .dot:hover {
          background-color: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 768px) {
          .hero {
            height: 70vh; /* Slightly shorter on mobile to fit nicely */
          }

          .hero-content {
            left: 50%;
            bottom: 15%; /* Reverted to original position to avoid covering text */
            transform: translateX(-50%);
            text-align: center;
            width: 100%;
          }

          .hero-btn {
             font-size: 1.2rem;
             padding: 12px 30px;
          }
          
          .carousel-dots {
            bottom: 5%; /* Position dots lower to not interfere with button */
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
