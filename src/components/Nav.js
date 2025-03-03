import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import nav2 from "../assets/images/nav2.jpg";

function Nav() {
  return (
    <div
      className="h-[500px] bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${nav2})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-20"></div>
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Software sob medida para sua empresa
        </h1>
        <p className="text-sm md:text-xl mb-6">
          Um melhor controle para seu negócio.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/contact">
            <button className="bg-blue-500 text-white py-3 px-10 rounded-full flex items-center justify-center space-x-3 hover:bg-green-400 transition transform hover:scale-105 duration-300">
              <span>Nos contate</span>
              <FaArrowRight />
            </button>
          </Link>
          <Link to="/modules">
            <button className="bg-transparent border-2 border-white text-white py-2 px-8 rounded-full hover:bg-white hover:text-slate-900 transition duration-300">
              Saiba mais
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
