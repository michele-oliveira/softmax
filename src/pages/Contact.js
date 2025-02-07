import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import contact from "../assets/images/contact.jpg";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <Header />
      <div
        className="h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${contact})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-15"></div>
        <div className="absolute bottom-0 left-0 right-0 text-center text-white px-4 md:px-8 py-6">
          <h1 className="text-4xl md:text-4xl font-semibold mb-5">Contato</h1>
          <p className="text-sm md:text-xl mb-6">
            Entre em contato conosco e conheça mais sobre a Softmax e Maxcontrol
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-24 flex items-center justify-center bg-slate-600 hover:bg-slate-900 rounded-full mb-4"
              >
                <FaLocationDot className="text-white text-3xl" />
              </a>
              <p className="font-semibold text-lg">Endereço:</p>
              <p className="text-sm">Guarulhos, São Paulo</p>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="mailto:contato@softmax.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-24 flex items-center justify-center bg-slate-600 hover:bg-slate-900 rounded-full mb-4"
              >
                <FaEnvelope className="text-white text-3xl" />
              </a>
              <p className="font-semibold text-lg">E-mail:</p>
              <p className="text-sm">contato@softmax.com.br</p>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-24 flex items-center justify-center bg-slate-600 hover:bg-slate-900 rounded-full mb-4"
              >
                <FaPhone className="text-white text-3xl" />
              </a>
              <p className="font-semibold text-lg">Telefone:</p>
              <p className="text-sm">(11) 4966-3209 / 99855-8723</p>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://wa.me/555511998558723"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-24 flex items-center justify-center bg-slate-600 hover:bg-slate-900 rounded-full mb-4"
              >
                <FaWhatsapp className="text-white text-3xl" />
              </a>
              <p className="font-semibold text-lg">WhatsApp</p>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://www.facebook.com/ERPsoftmax?ref=bookmarks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-24 flex items-center justify-center bg-slate-600 hover:bg-slate-900 rounded-full mb-4"
              >
                <FaFacebook className="text-white text-3xl" />
              </a>
              <p className="font-semibold text-lg">Facebook</p>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2Fmaxcim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-24 flex items-center justify-center bg-slate-600 hover:bg-slate-900 rounded-full mb-4"
              >
                <FaXTwitter className="text-white text-3xl" />
              </a>
              <p className="font-semibold text-lg">Twitter</p>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://www.linkedin.com/in/kleisson-maximiano-189aa323/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-24 flex items-center justify-center bg-slate-600 hover:bg-slate-900 rounded-full mb-4"
              >
                <FaLinkedin className="text-white text-3xl" />
              </a>
              <p className="font-semibold text-lg">LinkedIn</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
