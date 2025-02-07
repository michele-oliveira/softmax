import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import softmax from "../assets/images/softmax1.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-slate-900 text-white py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
          <div className="flex flex-col items-center text-center justify-center">
            <img
              className="h-16 object-contain"
              src={softmax}
              alt="Softmax's logo"
            />
            <p className="text-sm py-2">Software sob medida para sua empresa</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-bold mb-4 text-slate-300">Contato</h2>
            <ul className="space-y-3 text-sm leading-6 text-slate-400">
              <li>
                Telefone:{" "}
                <span className="text-green-200">
                  (11) 4966-3209 / 99855-8723
                </span>
              </li>
              <li>
                Email:{" "}
                <span className="text-green-200">contato@softmax.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex mt-8 gap-8 justify-center items-center">
          <a
            href="https://www.facebook.com/ERPsoftmax?ref=bookmarks"
            className="text-3xl hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/kleisson-maximiano-189aa323/"
            className="text-3xl hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/i/flow/login?redirect_after_login=%2Fmaxcim"
            className="text-3xl hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-110"
          >
            <FaXTwitter />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
          <p className="text-base text-slate-400 text-center flex-grow sm:mx-6">
            &copy; {currentYear} Softmax. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex justify-center mt-2">
          <p className="text-xs text-slate-400">
            Desenvolvido por Michele Oliveira
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
