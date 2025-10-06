import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { FaUser, FaFolderOpen, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 bg-opacity-90 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold mr-4">
            LC
          </Link>
          <Link href="/" className="text-xl font-semibold hidden md:block">
            Li Carvallo Escudero
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link href="/about" className="hover:text-accent flex items-center">
                  <FaUser className="mr-1" /> {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent flex items-center">
                  <FaFolderOpen className="mr-1" /> {t('projects')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent flex items-center">
                  <FaEnvelope className="mr-1" /> {t('contact')}
                </Link>
              </li>
            </ul>
            <LanguageSwitcher />
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90 mt-2 p-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/about" className="hover:text-accent flex items-center" onClick={toggleMenu}>
                <FaUser className="mr-1" /> {t('about')}
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-accent flex items-center" onClick={toggleMenu}>
                <FaFolderOpen className="mr-1" /> {t('projects')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent flex items-center" onClick={toggleMenu}>
                <FaEnvelope className="mr-1" /> {t('contact')}
              </Link>
            </li>
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;