
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Li Carvallo Escudero
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gray-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
