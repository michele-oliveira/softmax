import { useEffect, useRef, useState } from "react";
import { FiHome, FiMenu, FiChevronDown } from "react-icons/fi";
import PropTypes from "prop-types";
import { ManualPage } from "../enums/manual/ManualPage";
import { ManualRegisterPage } from "../enums/manual/ManualRegisterPage";
import { ManualMovementsPage } from "../enums/manual/ManualMovementsPage";
import { ManualTaxPage } from "../enums/manual/ManualTaxPage";

import softmax from "../assets/images/softmax1.png";
import { Link } from "react-router-dom";

function ManualSideBar({ selectPage }) {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const handleSelectPage = (page) => {
    if (page) {
      setIsOpen(false);
      if (page.startsWith("http")) {
        window.open(page, "_blank");
      } else {
        selectPage(page);
        window.scroll({ top: 0, behavior: "smooth" });
      }
    } else {
      console.error("parameter 'page' must be provided");
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setOpenSubmenus({});
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        ref={menuButtonRef}
        className="fixed left-7 top-4 z-50 transition-colors duration-300 ease-in-out"
      >
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
          ref={sidebarRef}
          className={`fixed top-0 left-0 h-full z-40 bg-slate-900 text-white transform transition-all duration-300 ease-in-out ${
            isOpen ? "w-72" : "w-0 xl:w-20"
          } overflow-hidden`}
        >
          <nav className="mt-16 px-4 py-2 h-[calc(100vh-16rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            <ul>
              <li>
                <Link to="/">
                  <button
                    className={`p-3 text-lg font-bold hover:bg-gray-700 rounded flex items-center gap-2 ${
                      isOpen ? "w-full" : "w-fit"
                    }`}
                  >
                    <FiHome className="text-white text-2xl" />
                  </button>
                </Link>
              </li>

              <div
                className={`
                ${isOpen ? "max-w-72 opacity-100" : "max-w-0 opacity-0"}
              overflow-hidden`}
              >
                <li>
                  <button
                    type="button"
                    onClick={() => handleSelectPage(ManualPage.HOME_PAGE)}
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
                    {
                      label: "Cadastro de Clientes",
                      page: ManualRegisterPage.CUSTOMER_REGISTRATION,
                    },
                    {
                      label: "Cadastro de Fornecedores",
                      page: ManualRegisterPage.SUPPLIER_REGISTRATION,
                    },
                    {
                      label: "Cadastro de Transportadoras",
                      page: ManualRegisterPage.CARRIER_REGISTRATION,
                    },
                    {
                      label: "Cadastro de Produtos PA",
                      page: ManualRegisterPage.PRODUCT_REGISTRATION,
                    },
                    {
                      label: "Cadastro de Produtos MP",
                      page: ManualRegisterPage.MP_REGISTRATION,
                    },
                    {
                      label: "Cadastro de Produto SA",
                      page: ManualRegisterPage.SA_REGISTRATION,
                    },
                    {
                      label: "Cadastro de Produto OM",
                      page: ManualRegisterPage.OM_REGISTRATION,
                    },
                    {
                      label: "Desenvolvimento de Produtos/Ensaio",
                      page: ManualRegisterPage.PRODUCT_DEVELOPMENT,
                    },
                    {
                      label: "Cadastro de Operações Fiscais-CFOP",
                      page: ManualRegisterPage.OPERATIONS_REGISTRATION,
                    },
                  ].map((item) => (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => handleSelectPage(item.page)}
                        className="w-full p-2 text-base text-start hover:bg-gray-500 rounded"
                      >
                        {item.label}
                      </button>
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
                    {
                      label: "Pedido de compra",
                      page: ManualMovementsPage.PURCHASE_ORDER,
                    },
                    {
                      label: "Pedido de compra - Recebimento",
                      page: ManualMovementsPage.COLLECT_ORDER,
                    },
                    {
                      label: "Pedido de venda",
                      page: ManualMovementsPage.SALE_ORDER,
                    },
                    {
                      label: "Pedido de venda - Romaneio",
                      page: ManualMovementsPage.ROMANEIO_SALE,
                    },
                    {
                      label: "Empenho / Ordem de Produção",
                      page: ManualMovementsPage.PRODUCTION_ORDER,
                    },
                    {
                      label: "Mapa de Produção",
                      page: ManualMovementsPage.PRODUCTION_MAP,
                    },
                    {
                      label: "Finan. Contas a Receber",
                      page: ManualMovementsPage.ACCOUNTS_RECEIVABLE,
                    },
                    {
                      label: "Finan. Contas a Pagar",
                      page: ManualMovementsPage.ACCOUNTS_PAYABLE,
                    },
                    {
                      label: "Finan. Controle de Cheques",
                      page: ManualMovementsPage.CONTROL_CHECK,
                    },
                    {
                      label: "Finan. Controle Bancário",
                      page: ManualMovementsPage.CONTROL_BANKING,
                    },
                    {
                      label: "Finan. Lança. Bancários CNAB",
                      page: ManualMovementsPage.CNAB_SHIPPING,
                    },
                    {
                      label: "Finan. Lança. Factory (Troca de títulos)",
                      page: ManualMovementsPage.LAUNCH_FACTORY,
                    },
                    {
                      label: "Emitir Nota Fiscal eletrônica NF-e",
                      page: ManualMovementsPage.ISSUE_INVOICE,
                    },
                  ].map((item) => (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => handleSelectPage(item.page)}
                        className="w-full p-2 text-base text-start hover:bg-gray-500 rounded"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>

                <li className="p-3 text-lg text-nowrap font-bold hover:bg-gray-700 rounded">
                  <button
                    type="button"
                    onClick={() => handleSelectPage(ManualPage.ACRONYMS)}
                    className="w-full text-lg text-left text-nowrap font-bold hover:bg-gray-700 rounded"
                  >
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
                    {
                      label: "Tabela origem / CST / CSO",
                      page: ManualTaxPage.TABLE_CST,
                    },
                    {
                      label: "Tabela CST PIS/COFINS",
                      page: ManualTaxPage.TABLE_SOURCE,
                    },
                    {
                      label:
                        "Suspensão, Diferimento, Isenção, Incidência e Não Incidência",
                      page: ManualTaxPage.SUSPENSION_EXEMPTION,
                    },
                    {
                      label:
                        "Contribuinte, contribuinte isento e não contribuinte do ICMS",
                      page: ManualTaxPage.TAX_DEPARTMENT,
                    },
                    {
                      label: "Sefaz",
                      page: ManualTaxPage.TREASURY_DEPARTMENT_WEBSITE,
                    },
                    {
                      label: "De olho no Imposto",
                      page: ManualTaxPage.FINANCE_DEPARTMENT,
                    },
                    {
                      label: "De olho no Imposto - Automatizar o processo",
                      page: ManualTaxPage.DE_OLHO_NO_IMPOSTO_WEBSITE,
                    },
                    {
                      label: "CNAE",
                      page: ManualTaxPage.CNAE,
                    },
                  ].map((item) => (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => handleSelectPage(item.page)}
                        className="w-full p-2 text-base text-start hover:bg-gray-500 rounded"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
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

ManualSideBar.propTypes = {
  selectPage: PropTypes.func.isRequired,
};

export default ManualSideBar;
