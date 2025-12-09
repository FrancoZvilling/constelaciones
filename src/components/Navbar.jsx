import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#home' },
        { name: 'Sobre mí', href: '#about' },
        { name: 'Talleres', href: '#services' },
        { name: 'Contacto', href: '#contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <div className="logo">
                    <span>Constelaciones</span><span className="dot">.</span>
                </div>

                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                {isOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="mobile-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <style jsx="true">{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
          background-color: transparent;
        }

        .navbar.scrolled {
          background-color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          padding: 15px 0;
          backdrop-filter: blur(5px);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text);
        }

        .logo .dot {
          color: var(--color-primary);
        }

        .desktop-menu {
          display: flex;
          gap: 30px;
        }

        .nav-link {
          font-weight: 500;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-toggle {
          display: none;
          cursor: pointer;
          color: var(--color-text);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: white;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .mobile-link {
          font-size: 1.1rem;
          font-weight: 500;
          padding: 10px;
          border-bottom: 1px solid #eee;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
