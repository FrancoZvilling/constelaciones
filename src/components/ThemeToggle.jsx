import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check system preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      <style jsx="true">{`
        .theme-toggle {
          background: transparent;
          border: 1px solid var(--primary);
          color: var(--primary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          background: var(--primary);
          color: var(--text-on-primary);
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;
