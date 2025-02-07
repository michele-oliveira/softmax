import { FaPhoneAlt, FaComments, FaShieldAlt, FaCogs } from "react-icons/fa";

function Info() {
  return (
    <div className="bg-slate-900 sm:px-6">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center">
          <div className="p-11 rounded-2xl transform">
            <FaPhoneAlt className="text-white text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Contato rápido
            </h3>
            <p className="text-gray-200 text-lg">
              Estamos sempre à disposição para melhor atender os nossos
              clientes.
            </p>
          </div>
          <div className="p-11 rounded-2xl">
            <FaComments className="text-white text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Comunicação fácil
            </h3>
            <p className="text-gray-200 text-lg">
              Conte sempre com nossa equipe para um melhor atendimento.
            </p>
          </div>
          <div className="p-11 rounded-2xl ">
            <FaShieldAlt className="text-white text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Confiança
            </h3>
            <p className="text-gray-200 text-lg">
              Nossos programadores são altamente capacitados e organizados.
            </p>
          </div>
          <div className="p-11 rounded-2xl">
            <FaCogs className="text-white text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Flexibilidade
            </h3>
            <p className="text-gray-200 text-lg">
              A Softmax desenvolve sob medida para integrar todos os processos
              de sua empresa de forma simples, prática e eficiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
