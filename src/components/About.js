import React from "react";
import { FaRocket, FaCheckCircle } from "react-icons/fa";
import software from "../assets/images/imagemnav1.jpg";
import { Link } from "react-router-dom";

const EmpresaInfo = () => {
  return (
    <>
      <div className="py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            <span className="text-slate-950">SOFTMAX</span> - A empresa para o
            seu negócio!
          </h2>
          <p className="mt-6 text-base text-gray-600 font-medium max-w-3xl mx-auto">
            A SoftMax está no mercado desde 2007, oferecendo soluções inovadoras
            e práticas para gestão administrativa, fabril e emissão de NF-e com
            total integração ao sistema. Simplifique seus processos e controle
            tudo em um só lugar.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
              <FaRocket className="text-indigo-900 text-5xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Desde 2007
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                Com 16 anos de experiência, a <strong>SOFTMAX</strong> é
                referência no mercado, transformando a forma como as empresas
                gerenciam seus processos.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-8 bg-slate-900 rounded-xl shadow-lg text-white">
              <FaCheckCircle className="text-white text-5xl mb-4" />
              <h3 className="text-2xl font-semibold">Diferenciais</h3>
              <ul className="mt-6 text-lg text-white list-disc list-inside space-y-2">
                <li>
                  <strong className="text-green-300">Gestão Integrada:</strong>{" "}
                  Controle administrativo e fabril em um só lugar.
                </li>
                <li>
                  <strong className="text-green-300">Emissão de NF-e:</strong>{" "}
                  Emitir notas fiscais com um clique!
                </li>
                <li>
                  <strong className="text-green-300"> Praticidade:</strong> Um
                  sistema que facilita o seu dia a dia.
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center text-center justify-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-900">
                Emissão de NF-e
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                Emitir a nota fiscal com apenas um clique! A solução mais
                prática do mercado, sem complicação e com total integração ao
                seu sistema.
              </p>
              <button className="bg-blue-500 text-white py-3 px-10 rounded-full mt-6 hover:bg-green-400 transition-all duration-300 ease-in-out transform hover:scale-105">
                Quer saber mais?
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="h-[500px] md:h-[400px] inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${software})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <div className="flex flex-col h-full px-6 sm:px-12 items-center justify-center text-center">
          <h3 className="text-3xl font-bold text-white">
            Simplifique a gestão da sua empresa agora mesmo!
          </h3>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
            Não perca tempo com sistemas complicados. A SoftMax tem a solução
            que você precisa para otimizar seus processos administrativos e
            fiscais de forma simples e eficiente.
          </p>
          <Link to="/contact">
            <button className="bg-blue-500 text-white py-3 px-10 rounded-full mt-6 hover:bg-green-400 transition-all duration-300 ease-in-out transform hover:scale-105">
              Entre em contato
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmpresaInfo;
