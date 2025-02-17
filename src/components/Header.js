import { useState } from "react";
import { IoMdMenu as MenuIcon } from "react-icons/io";
import { Link } from "react-router-dom";
import softmax from "../assets/images/softmax1.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full px-4 py-2 bg-slate-900 text-white md:h-32">
      <div className="flex justify-between items-center h-16 md:h-full">
        <Link
          to="/"
          className="h-12 w-32 md:h-24 md:w-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${softmax})` }}
        />

        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon size={28} />
        </button>

        <div className="hidden md:flex gap-12 font-semibold">
          <Link to="/">
            <h1 className="hover:text-green-400 cursor-pointer">Home</h1>
          </Link>
          <Link to="/modules">
            <h1 className="hover:text-green-400 cursor-pointer">Módulos</h1>
          </Link>
          <a href="/manual" target="_blank">
            <h1 className="hover:text-green-400 cursor-pointer">
              Manual do sistema
            </h1>
          </a>
          <Link to="/contact">
            <h1 className="hover:text-green-400 cursor-pointer">Contato</h1>
          </Link>
        </div>
      </div>

      <div
        className={`flex flex-col gap-4 mt-2 overflow-hidden md:hidden items-end font-semibold transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link to="/">
          <h1 className="hover:text-green-400 cursor-pointer">Home</h1>
        </Link>
        <Link to="/modules">
          <h1 className="hover:text-green-400 cursor-pointer">Módulos</h1>
        </Link>
        <Link to="/manual">
          <h1 className="hover:text-green-400 cursor-pointer">
            Manual do sistema
          </h1>
        </Link>
        <Link to="contact">
          <h1 className="hover:text-green-400 cursor-pointer">Contato</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
