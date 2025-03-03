import ensaio from "../../assets/images/manual/cad_cfop_menu.jpg";
import ensaio1 from "../../assets/images/manual/cad_cfop_guias.png";
import ensaio2 from "../../assets/images/manual/cad_CFOP.png";
import ensaio3 from "../../assets/images/manual/Menu_Cadastro.png";

function RegisterOperations() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Cadastro de Operações Fiscais (CFOP)
      </h1>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        <strong>CFOP</strong> é a sigla de{" "}
        <strong>Código Fiscal de Operações e Prestações</strong>, das entradas e
        saídas de mercadorias, intermunicipal e interestadual. Trata-se de um
        código numérico que identifica a natureza de circulação da mercadoria ou
        a prestação de serviço de transportes. Importante na hora de gerar notas
        fiscais para informar parâmetros obrigatórios a receita.
      </p>
      <p className="mx-4 my-4 text-sm sm:text-base lg:max-w-4xl">
        O perfil tributário é um cadastro onde deve ser parametrizados os
        impostos que serão calculados nos documentos de entradas e saídas.
      </p>

      <h2 className="mt-5 text-xl sm:text-1xl font-bold text-slate-900">
        Como Funciona:
      </h2>

      <img
        className="w-full max-w-3xl object-contain pt-6"
        src={ensaio3}
        alt="Desenvolvimento de Operações Fiscais"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            No menu “<strong>(1) Cadastro</strong>” selecione o módulo “
            <strong>(2) Faturamento</strong>” e selecione{" "}
            <strong> "(3) CFOP - Cadastro de Operaçoes Fiscais"</strong>;{" "}
          </li>
          <li>
            Clique em “<strong>Novo</strong>”, onde abrirá uma nova janela;
          </li>
          <li>
            O primeiro passo é inserir o <strong>código fiscal CFOP</strong>{" "}
            referente à operação;{" "}
          </li>

          <li>
            Em seguida adicionar uma <strong>“descrição do CFOP</strong>”
            cadastrado;{" "}
          </li>
          <li>Apontar se essa operação pode ou não movimentar o estoque; </li>
          <li>
            Informar se essa operação pode ou não movimentar o financeiro (Valor
            de Compra);{" "}
          </li>
          <li>
            Informar CST (código de situação Tributária) de ICMS ,CST de IPI,
            CST de PIS e COFINS;
          </li>
          <li>
            Clique em “<strong>(4) Salvar</strong>”;{" "}
          </li>
          <li>
            Obs.: Depois que é salvo o cadastro, será habilitada a opção de “
            <strong>(5) Informações complementares Automáticas</strong>”.;
          </li>
        </ol>
      </div>

      <img
        className="w-full max-w-3xl object-contain pt-6"
        src={ensaio2}
        alt="Desenvolvimento de Operações Fiscais"
      />

      <img
        className="w-full max-w-3xl object-contain py-6"
        src={ensaio}
        alt="Desenvolvimento de Operações Fiscais"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <strong>Botão Incluir</strong> - Criar Novo lançamento;
          </li>
          <li>
            <strong>Botão Alterar</strong> - Realiza alterações em lançamentos
            já salvos no sistema;
          </li>
          <li>
            <strong>Botão cancelar / Excluir</strong>- Botão mult. opções,
            Remove baixa de empenho, cancela lançamento, exclui lançamento;
          </li>
          <li>
            <strong>Botão Salvar</strong>- Salvar / Gravar lançamento
          </li>
          <li>
            <strong>Botão Cancelar / Abortar</strong> - Cancela a operação
            vigente, ignora alterações e retorno ao estado anterior;
          </li>
          <li>
            <strong>Navegação;</strong>
          </li>
          <li>
            <strong>Navegação;</strong>
          </li>
          <li>
            <strong>Navegação;</strong>
          </li>
          <li>
            <strong>Navegação;</strong>
          </li>
          <li>
            <strong>Botão de cadastro de NCM</strong> - Classificação fiscal ;
          </li>
          <li>
            <strong>Botão de mensagem de CFOP</strong>
          </li>
        </ol>
      </div>

      <img
        className="w-full max-w-3xl object-contain py-6"
        src={ensaio1}
        alt="Desenvolvimento de Operações Fiscais"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <strong>Guia Cadastro</strong> -Registra e gerencia informações
            essenciais como clientes, produtos e fornecedores.
          </li>
          <li>
            <strong>Guia Lista de CFOPs cadastradas</strong> - Exibe os CFOPs
            registrados no sistema para consulta e gerenciamento.
          </li>
          <li>
            <strong>Guia Lista de CFOPs GERAL</strong> - Apresenta todos os
            CFOPs disponíveis para seleção e cadastro.
          </li>
          <li>
            <strong>Guia ICMS por estado</strong> - Detalha as alíquotas de ICMS
            por estado, garantindo a correta tributação.
          </li>
          <li>
            <strong>Guia código de enquadramento de IPI</strong> - Gerencia os
            códigos de enquadramento do IPI conforme a categoria fiscal dos
            produtos.
          </li>
          <li>
            <strong>Guia CFOP por Cliente / Produto</strong> - Configura e
            visualiza os CFOPs específicos por cliente ou produto.
          </li>
          <li>
            <strong>Guia CST de ICMS</strong> - Apresenta os CSTs de ICMS para
            aplicar as regras tributárias nas operações.
          </li>
          <li>
            <strong>Guia CST de IPI</strong> - Exibe os CSTs de IPI para o
            correto enquadramento fiscal dos produtos.
          </li>
          <li>
            <strong>Guia CST de PIS/Cofins</strong> - Apresenta os CSTs de
            PIS/Cofins, garantindo a aplicação correta das alíquotas e regras
            fiscais.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default RegisterOperations;
