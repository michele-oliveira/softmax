import { useState } from "react";
import softmax from "../assets/images/softmax1.png";
import { FiHome, FiMenu, FiChevronDown } from "react-icons/fi";

function ManualSideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <div className="flex transition-all duration-300">
      <div
        className={`fixed top-0 left-0 h-full bg-slate-900 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            <FiMenu />
          </button>
        </div>
        <nav className="mt-4 p-2">
          <ul>
            <li className="p-3 text-lg font-bold hover:bg-gray-700 rounded cursor-pointer flex items-center gap-2">
              <FiHome className="text-white text-2xl" />
            </li>
            {isOpen && (
              <>
                <li
                  className="p-3 text-lg font-bold flex items-center justify-between hover:bg-gray-700 rounded cursor-pointer"
                  onClick={() => toggleSubmenu("cadastro")}
                >
                  Cadastro <FiChevronDown />
                </li>
                {openSubmenu === "cadastro" && (
                  <ul className="pl-4">
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Cadastro de Clientes
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Cadastro de Fornecedores
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Cadastro de Transportadoras
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Cadastro de Produtos PA
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Cadastro de Produtos MP
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Cadastro de Produto SA
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Cadastro de Produto OM
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Desenvolvimento de Produtos/Ensaio
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Cadastro de Operações Fiscais-CFOP
                    </li>
                  </ul>
                )}
                <li
                  className="p-3 text-lg font-bold flex items-center justify-between hover:bg-gray-700 rounded cursor-pointer"
                  onClick={() => toggleSubmenu("movimentos")}
                >
                  Movimentos <FiChevronDown />
                </li>
                {openSubmenu === "movimentos" && (
                  <ul className="pl-4">
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Pedido de Venda
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Cadastro de Compra
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Empenho / Ordem de Produção
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Mapa de Produção
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Finan.Contas a Receber
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Finan. Contas a Pagar
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Finan. Control de Cheques
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Finan.Controle Bancário
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Finan. Lança. Bancários CNAB
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Finan. Lança. Factory (Troca de títulos)
                    </li>
                    <li className="p-2 text-base hover:bg-gray-500 rounded cursor-pointer">
                      Emitir Nota Fiscal eletrônica NF-e
                    </li>
                  </ul>
                )}
              </>
            )}
          </ul>
        </nav>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-center">
          <img
            className="h-16 object-contain"
            src={softmax}
            alt="Softmax logo"
          />
          {isOpen && (
            <p className="text-sm py-2">Software sob medida para sua empresa</p>
          )}
        </div>
      </div>

      <div
        className={`flex-1 min-h-screen transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-20"
        }`}
      >
        <h1 className="text-center text-xl font-bold mt-10">Manual do sistema</h1>
      </div>
    </div>
  );
}

export default ManualSideBar;
