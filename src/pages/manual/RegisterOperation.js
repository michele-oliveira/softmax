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
        <b>CFOP</b> é a sigla de <b>Código Fiscal de Operações e Prestações</b>,
        das entradas e saídas de mercadorias, intermunicipal e interestadual.
        Trata-se de um código numérico que identifica a natureza de circulação
        da mercadoria ou a prestação de serviço de transportes. Importante na
        hora de gerar notas fiscais para informar parâmetros obrigatórios a
        receita.
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
            No menu “<b>(1) Cadastro</b>” selecione o módulo “
            <b>(2) Faturamento</b>” e selecione{" "}
            <b> "(3) CFOP - Cadastro de Operaçoes Fiscais"</b>;{" "}
          </li>
          <li>
            Clique em “<b>Novo</b>”, onde abrirá uma nova janela;
          </li>
          <li>
            O primeiro passo é inserir o <b>código fiscal CFOP</b> referente a
            operação;{" "}
          </li>
          <li>
            Em seguida adicionar uma <b>“descrição do CFOP</b>” cadastrado;{" "}
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
            Clique em “<b>(4) Salvar</b>”;{" "}
          </li>
          <li>
            Obs.: Depois que é salvo o cadastro, será habilitada a opção de “
            <b>(5) Informações complementares Automáticas</b>”. Saiba mais em “
            <a href="/">Informações complementares</a>”;
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
            <b>Botão Incluir</b> - Criar Novo lançamento;
          </li>
          <li>
            <b>Botão Alterar</b> - Realiza alterações em lançamentos já salvos
            no sistema;
          </li>
          <li>
            <b>Botão cancelar / Excluir</b>- Botão mult. opções, Remove baixa de
            empenho, cancela lançamento, exclui lançamento;
          </li>
          <li>
            <b>Botão Salvar</b>- Salvar / Gravar lançamento
          </li>
          <li>
            <b>Botão Cancelar / Abortar</b> - Cancela a operação vigente, ignora
            alterações e retorno ao estado anterior;
          </li>
          <li>
            <b>Navegação;</b>
          </li>
          <li>
            <b>Navegação;</b>
          </li>
          <li>
            <b>Navegação;</b>
          </li>
          <li>
            <b>Navegação;</b>
          </li>
          <li>
            <b>Botão de cadastro de NCM</b> - Classificação fiscal ;
          </li>
          <li>
            <b>Botão de mensagem de CFOP</b>
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
            <b>Guia Cadastro</b>
          </li>
          <li>
            <b>Guia Lista de CFOPs cadastradas</b>
          </li>
          <li>
            <b>Guia Lista de CFOPs GERAL</b>
          </li>
          <li>
            <b>Guia ICMS por estado</b>
          </li>
          <li>
            <b>Guia código de enquadramento de IPI</b>
          </li>
          <li>
            <b>Guia CFOP por Cliente / Produto</b>{" "}
          </li>
          <li>
            <b>Guia CST de ICMS</b>{" "}
          </li>
          <li>
            <b>Guia CST de IPI</b>
          </li>
          <li>
            <b>Guia CST de PIS/Cofins</b>{" "}
          </li>
        </ol>
      </div>
    </div>
  );
}

export default RegisterOperations;
