import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold mr-4">
            LC
          </Link>
          <Link href="/" className="text-xl font-semibold hidden md:block">
            Li Carvallo Escudero
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <div className="hidden md:flex">
            <ul className="flex space-x-4">
              <li>
                <Link href="/about" className="hover:text-accent flex items-center">
                  <FaUser className="mr-1" /> About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent flex items-center">
                  <FaFolderOpen className="mr-1" /> Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent flex items-center">
                  <FaEnvelope className="mr-1" /> Contact
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
        <div className="md:hidden bg-primary mt-2 p-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/about" className="hover:text-accent flex items-center" onClick={toggleMenu}>
                <FaUser className="mr-1" /> About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-accent flex items-center" onClick={toggleMenu}>
                <FaFolderOpen className="mr-1" /> Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent flex items-center" onClick={toggleMenu}>
                <FaEnvelope className="mr-1" /> Contact
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;