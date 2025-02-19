import { useEffect, useState } from "react";
import { FiHome, FiMenu, FiChevronDown } from "react-icons/fi";

import softmax from "../assets/images/softmax1.png";

function ManualSideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (menu) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  useEffect(() => {
    if (!isOpen) {
      setOpenSubmenus({});
    }
  }, [isOpen]);

  return (
    <>
      <div className="fixed left-7 top-4 z-50 transition-colors duration-300 ease-in-out">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-2xl ${
            isOpen ? "text-white" : "text-slate-900 xl:text-white"
          }`}
        >
          <FiMenu />
        </button>
      </div>

      <div className="flex">
        <div
          className={`fixed top-0 left-0 h-full z-40 bg-slate-900 text-white transform transition-all duration-300 ease-in-out ${
            isOpen ? "w-72" : "w-0 xl:w-20"
          } overflow-hidden`}
        >
          <nav className="mt-16 px-4 py-2 h-[calc(100vh-16rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            <ul>
              <li>
                <button
                  className={`p-3 text-lg font-bold hover:bg-gray-700 rounded flex items-center gap-2 ${
                    isOpen ? "w-full" : "w-fit"
                  }`}
                >
                  <FiHome className="text-white text-2xl" />
                </button>
              </li>

              <div
                className={`
                ${isOpen ? "max-w-72 opacity-100" : "max-w-0 opacity-0"}
              overflow-hidden`}
              >
                <li>
                  <button
                    type="button"
                    className="w-full p-3 text-lg text-left text-nowrap font-bold hover:bg-gray-700 rounded"
                  >
                    Página inicial
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => toggleSubmenu("cadastro")}
                    className="flex w-full p-3 items-center justify-between text-lg text-nowrap font-bold hover:bg-gray-700 rounded"
                  >
                    Cadastro <FiChevronDown />
                  </button>
                </li>
                <ul
                  className={`pl-4 transform transition-all duration-300 ease-in-out overflow-hidden ${
                    openSubmenus["cadastro"]
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {[
                    "Cadastro de Clientes",
                    "Cadastro de Fornecedores",
                    "Cadastro de Transportadoras",
                    "Cadastro de Produtos PA",
                    "Cadastro de Produtos MP",
                    "Cadastro de Produto SA",
                    "Cadastro de Produto OM",
                    "Desenvolvimento de Produtos/Ensaio",
                    "Cadastro de Operações Fiscais-CFOP",
                  ].map((item) => (
                    <li
                      key={item}
                      className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <li>
                  <button
                    type="button"
                    onClick={() => toggleSubmenu("movimentos")}
                    className="flex w-full p-3 items-center justify-between text-lg text-nowrap font-bold hover:bg-gray-700 rounded"
                  >
                    Movimentos <FiChevronDown />
                  </button>
                </li>

                <ul
                  className={`pl-4 transform transition-all duration-300 ease-in-out overflow-hidden ${
                    openSubmenus["movimentos"]
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {[
                    "Pedido de Venda",
                    "Cadastro de Compra",
                    "Empenho / Ordem de Produção",
                    "Mapa de Produção",
                    "Finan. Contas a Receber",
                    "Finan. Contas a Pagar",
                    "Finan. Controle de Cheques",
                    "Finan. Controle Bancário",
                    "Finan. Lança. Bancários CNAB",
                    "Finan. Lança. Factory (Troca de títulos)",
                    "Emitir Nota Fiscal eletrônica NF-e",
                  ].map((item) => (
                    <li
                      key={item}
                      className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <li className="p-3 text-lg text-nowrap font-bold hover:bg-gray-700 rounded">
                  <button type="button" className="w-full text-left">
                    Siglas
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => toggleSubmenu("fiscal")}
                    className="flex w-full p-3 items-center justify-between text-lg text-nowrap font-bold hover:bg-gray-700 rounded"
                  >
                    Fiscal <FiChevronDown />
                  </button>
                </li>

                <ul
                  className={`pl-4 transform transition-all duration-300 ease-in-out overflow-hidden ${
                    openSubmenus["fiscal"]
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {[
                    "Tabela origem / CST / CSO",
                    "Tabela CST PIS/COFINS",
                    "Suspensão, Diferimento, Isenção, Incidência e Não Incidência",
                    "Manual do Contribuinte v6.00",
                    "Contribuinte, contribuinte isento e não contribuinte do ICMS",
                    "Sefaz",
                    "De olho no Imposto",
                    "De olho no Imposto - Automatizar o processo",
                  ].map((item) => (
                    <li
                      key={item}
                      className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <li className="p-3 text-lg text-nowrap font-bold hover:bg-gray-700 rounded">
                  <button type="button" className="w-full text-left">
                    Programas
                  </button>
                </li>
              </div>
            </ul>
          </nav>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-center">
            <img
              className={`${
                isOpen ? "h-16" : "h-6"
              } object-contain transition-all duration-700 ease-in-out`}
              src={softmax}
              alt="Softmax logo"
            />

            <p
              className={`text-sm ${
                isOpen ? "max-h-32" : "max-h-0"
              } overflow-hidden transition-all duration-300 ease-in-out`}
            >
              Software sob medida para sua empresa
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManualSideBar;
