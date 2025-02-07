import React from "react";
import { FaLaptop, FaCogs, FaBoxOpen, FaFileInvoice } from "react-icons/fa";

const Modules = () => {
  return (
    <div className="bg-slate-900 py-16 px-4 sm:px-6">
      <div className="container mx-auto text-center">
        <h2 className="flex justify-center text-3xl font-bold text-white mb-12">
          Principais Módulos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-3 rounded-2xl">
            <FaLaptop className="text-white text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4">ERP</h3>
            <p className="text-white text-lg">
              Interliga todos os dados e processos de uma organização em um
              único sistema, garantindo eficiência e integração total.
            </p>
          </div>
          <div className="p-3 rounded-2xl">
            <FaCogs className="text-white text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4">PCP</h3>
            <p className="text-white text-lg">
              Gerencie recursos operacionais de forma inteligente, otimizando
              produtividade e resultados.
            </p>
          </div>
          <div className="p-3 rounded-2xl ">
            <FaBoxOpen className="text-white text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4">MRP</h3>
            <p className="text-white text-lg">
              Controle de estoque preciso e eficiente, reduzindo custos e
              melhorando prazos.
            </p>
          </div>
          <div className="p-3 rounded-2xl">
            <FaFileInvoice className="text-white text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4">NF-E</h3>
            <p className="text-white text-lg">
              Emita notas fiscais em segundos com o emissor mais fácil e rápido
              do mercado.
            </p>
            <p className="font-bold text-white text-lg">
              Com apenas um clique se emite a Nota Fiscal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
