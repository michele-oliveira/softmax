import ManualSideBar from "../../components/ManualSideBar";
import fornecedores from "../assets/images/manual/cad_fornecedor.png";
import cad from "../assets/images/manual/cad_for_guias.png";
import cad2 from "../assets/images/manual/cad_for_menu.jpg";

function RegisterSupplier() {
  return (
    <>
      <ManualSideBar />

      <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
        <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
          Manual do Sistema - Cadastro de Fornecedores
        </h1>
        <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
          O programa <b>Maxcontrol</b> oferece um formulário de cadastro de
          fornecedores completo para melhor organizar e adquirir os dados de
          seus fornecedores.
        </p>
        <p className="mx-4 mb-10 text-sm sm:text-base lg:max-w-4xl">
          Integrado ao módulo de
          <b>O que é o cadastro de fornecedores?</b> Basicamente, trata-se de um
          controle em que são inseridas todas as pessoas físicas ou jurídicas
          que fornecem algum tipo de produto ou serviço para o seu negócio.
          Independentemente do que é disponibilizado, o fornecedor precisa ser
          cadastrado para facilitar a gestão.
        </p>

        <img
          className="w-full max-w-3xl object-contain"
          src={fornecedores}
          alt="Cadastro Fornecedores"
        />

        <img
          className="w-full max-w-3xl object-contain p-4"
          src={cad2}
          alt="Cadastro Fornecedores"
        />

        <div className="flex flex-col items-start w-full max-w-3xl text-left px-4">
          <p className="text-sm pt-2">
            <b>1-Botão Incluir-</b> Criar Novo lançamento;
          </p>
          <p className="text-sm pt-1">
            <b>2-Botão Alterar -</b> Alterar / Editar um lançamento salvo;
          </p>
          <p className="text-sm pt-1">
            <b>3-Botão cancelar / Excluir -</b> Botão mult. opções, Remove baixa
            de empenho, cancela lançamento, exclui lançamento;
          </p>
          <p className="text-sm pt-1">
            <b>4-Botão Salvar - </b> Salvar / Gravar lançamento
          </p>
          <p className="text-sm pt-1">
            <b>5-Botão Cancelar / Abortar - </b> Cancela a operação vigente,
            ignora alterações e retorno ao estado anterior;
          </p>
          <p className="text-sm pt-1">
            <b>6-Navegação ;</b>
          </p>
          <p className="text-sm pt-1">
            <b>7-Navegação ;</b>
          </p>
          <p className="text-sm pt-1">
            <b>8-Navegação ;</b>
          </p>
          <p className="text-sm pt-1">
            <b>9-Navegação ;</b>
          </p>
          <p className="text-sm pt-1">
            <b>10-Botão de pré-visualização/impressão -</b> impressão do
            cadastro;
          </p>
          <p className="text-sm pt-1">
            <b>11-Botão de emissão de relatórios;</b>
          </p>
          <p className="text-sm pt-1">
            <b>12-Botão de gerenciador de arquivos ;</b>
          </p>
        </div>

        <img
          className="w-full max-w-3xl object-contain pt-10"
          src={cad}
          alt="Cadastro Fornecedores"
        />

        <div className="flex flex-col items-start w-full max-w-3xl text-left py-10 px-4">
          <p className="text-sm">
            <b>Guia Cadastro</b>
          </p>
          <p className="text-sm pt-1">
            <b>Guia Dados Adicionais </b>
          </p>
          <p className="text-sm pt-1">
            <b>Guia Itens Fornecidos</b>
          </p>
          <p className="text-sm pt-1">
            <b>Guia ABC de Produtos – </b> Guia com lista de produtos já
            adquiridos.
          </p>
          <p className="text-sm pt-1">
            <b>Guia compras – </b> Guia com lista de compras já feitas ao
            fornecedor.
          </p>
          <p className="text-sm pt-1">
            <b>Guia Notas Fiscais</b>
          </p>
          <p className="text-sm pt-1">
            <b>Guia IQF </b>
          </p>
          <p className="text-sm pt-1">
            <b>Guia Histórico – </b> Cadastro de informações do fornecedor , LOG
            referente a troca de informações com fornecedor. Para adição e
            alteração seguir passos da Guia cadastro..
          </p>
          <p className="text-sm pt-1">
            <b>Guia Financeiro – </b>Guia com dados dos títulos a pagar ao
            fornecedor.
          </p>
          <p className="text-sm pt-1">
            <b>Guia Contatos – </b> Cadastro de responsáveis pela empresa
            fornecedora. Para adição e alteração seguir passos da Guia cadastro.
          </p>
          <p className="text-sm pt-1">
            <b>Guia Avaliação de Fornecedor – </b>Definição do tipo de
            fornecedor.
          </p>
          <p className="text-sm pt-1">
            <b>Guia Qualificação de Fornecedor – </b>Definição dos requisitos
            que devem ser atendidos para compra.
          </p>
          <p className="text-sm pt-1">
            <b>Guia tabela de preços</b>
          </p>
          <p className="text-sm pt-1">
            <b>Guia Emails</b>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterSupplier;
