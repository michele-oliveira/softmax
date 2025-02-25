import factory from "../../assets/images/manual/factory_menu.png";
import factory1 from "../../assets/images/manual/factory_Fornecedor.png";
import factory2 from "../../assets/images/manual/Factory_Dados.png";
import factory3 from "../../assets/images/manual/Factory_busca_Titulo.png";
import factory4 from "../../assets/images/manual/factory_Impressao.png";
import factory5 from "../../assets/images/manual/Factory_ferramentas.png";
import factory6 from "../../assets/images/manual/factory_xml.png";

function FactoryLaunch() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="my-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Operação de troca de Títulos
      </h1>
      <p className="my-6 text-base sm:text-base lg:max-w-4xl font-bold">
        O que é a operação de troca de títulos?
      </p>
      <p className="my-6 text-sm sm:text-base lg:max-w-4xl">
        A troca de títulos é um processo no qual um fornecedor ou empresa cede
        títulos (como boletos ou duplicatas) para uma instituição financeira em
        troca de liquidez imediata. Isso pode envolver:
      </p>

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-disc list-inside text-base space-y-2">
          <li>
            <b>Seleção de um fornecedor previamente cadastrado.</b>
          </li>
          <li>
            <b>Inserção dos títulos a serem negociados.</b>
          </li>
          <li>
            <b>
              Definição de condições como tipo de cobrança, conta de depósito e
              data de liquidação.
            </b>
          </li>
          <li>
            <b>
              Geração de relatórios (exemplo: Borderô de troca de títulos).{" "}
            </b>
          </li>
          <li>
            <b>Exportação de XMLs das notas fiscais associadas. </b>
          </li>
        </ol>
      </div>

      <p className="my-6 text-base sm:text-base lg:max-w-4xl font-bold">
        O que a ferramenta Factory faz?
      </p>
      <p className="my-6 text-sm sm:text-base lg:max-w-4xl">
        Com base no código, a ferramenta Factory provavelmente automatiza esse
        processo dentro do sistema, permitindo que os usuários:
      </p>

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-disc list-inside text-base space-y-2">
          <li>
            <b>Busquem fornecedores e insiram os títulos para troca.</b>
          </li>
          <li>
            <b>Configurem os detalhes da operação.</b>
          </li>
          <li>
            <b>Gerem relatórios e documentos fiscais.</b>
          </li>
          <li>
            <b>Finalizem a operação e exportem os dados necessários.</b>
          </li>
        </ol>
      </div>

      <img
        className="w-full max-w-3xl object-contain"
        src={factory}
        alt="Operação de troca de títulos Factory"
      />

      <p className="my-10 text-base sm:text-base lg:max-w-4xl font-bold">
        Buscar Fornecedor (previamente cadastrado) entidade que fará troca de
        títulos;
      </p>

      <img
        className="w-full max-w-3xl object-contain"
        src={factory1}
        alt="Operação de troca de títulos Factory"
      />

      <p className="my-10 text-base sm:text-base lg:max-w-4xl font-bold">
        Inserir tipo de cobrança (Factory)/ Conta para deposito / Data para
        efetivação de deposito.
      </p>

      <img
        className="w-full max-w-3xl object-contain"
        src={factory2}
        alt="Operação de troca de títulos Factory"
      />

      <p className="my-10 text-base sm:text-base lg:max-w-4xl font-bold">
        Inserir títulos, (clicar em pesquisa de títulos, selecionar títulos
        desejados e clicar em inserir)
      </p>

      <img
        className="w-full max-w-3xl object-contain"
        src={factory3}
        alt="Operação de troca de títulos Factory"
      />

      <p className="my-10 text-base sm:text-base lg:max-w-4xl font-bold">
        Relatório de Borderô de troca de títulos
      </p>

      <img
        className="w-full max-w-3xl object-contain"
        src={factory4}
        alt="Operação de troca de títulos Factory"
      />

      <p className="my-10 text-base sm:text-base lg:max-w-4xl font-bold">
        Exportação de XML das respectivas notas fiscais dos títulos inclusos
      </p>

      <img
        className="w-full max-w-3xl object-contain"
        src={factory6}
        alt="Operação de troca de títulos Factory"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <p className="my-6 text-sm sm:text-base lg:max-w-4xl font-bold">
            Ferramentas
          </p>
          <li>
            <b>Impressão do Borderô</b>
          </li>
          <li>
            <b>Finalizar Operação</b>
          </li>
          <li>
            <b>Exportar XMLs</b>
          </li>
          <li>
            <b>Informar Custo de Operação de troca de títulos </b>
          </li>
        </ol>
      </div>
      <img
        className="w-full max-w-3xl object-contain"
        src={factory5}
        alt="Operação de troca de títulos Factory"
      />
    </div>
  );
}

export default FactoryLaunch;
