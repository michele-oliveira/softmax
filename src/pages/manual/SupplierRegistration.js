import supplierRegistrationImg from "../../assets/images/manual/cad_fornecedor.png";
import supplierRegistrationTabsImg from "../../assets/images/manual/cad_for_guias.png";
import supplierRegistrationMenuImg from "../../assets/images/manual/cad_for_menu.jpg";

function SupplierRegistration() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Cadastro de Fornecedores
      </h1>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        O programa <strong>Maxcontrol</strong> oferece um formulário de cadastro
        de fornecedores completo para melhor organizar e adquirir os dados de
        seus fornecedores.
      </p>
      <p className="mx-4 mb-10 text-sm sm:text-base lg:max-w-4xl">
        <strong>O que é o cadastro de fornecedores?</strong> Basicamente,
        trata-se de um controle em que são inseridas todas as pessoas físicas ou
        jurídicas que fornecem algum tipo de produto ou serviço para o seu
        negócio. Independentemente do que é disponibilizado, o fornecedor
        precisa ser cadastrado para facilitar a gestão.
      </p>

      <img
        className="w-full max-w-3xl object-contain"
        src={supplierRegistrationImg}
        alt="Cadastro Fornecedores"
      />

      <img
        className="w-full max-w-3xl object-contain p-4"
        src={supplierRegistrationMenuImg}
        alt="Cadastro Fornecedores"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left px-4">
        <p className="text-sm pt-2">
          <strong>1-Botão Incluir-</strong> Criar Novo lançamento;
        </p>
        <p className="text-sm pt-1">
          <strong>2-Botão Alterar -</strong> Alterar / Editar um lançamento
          salvo;
        </p>
        <p className="text-sm pt-1">
          <strong>3-Botão cancelar / Excluir -</strong> Botão mult. opções,
          Remove baixa de empenho, cancela lançamento, exclui lançamento;
        </p>
        <p className="text-sm pt-1">
          <strong>4-Botão Salvar - </strong> Salvar / Gravar lançamento
        </p>
        <p className="text-sm pt-1">
          <strong>5-Botão Cancelar / Abortar - </strong> Cancela a operação
          vigente, ignora alterações e retorno ao estado anterior;
        </p>
        <p className="text-sm pt-1">
          <strong>6-Navegação ;</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>7-Navegação ;</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>8-Navegação ;</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>9-Navegação ;</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>10-Botão de pré-visualização/impressão -</strong> impressão do
          cadastro;
        </p>
        <p className="text-sm pt-1">
          <strong>11-Botão de emissão de relatórios;</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>12-Botão de gerenciador de arquivos ;</strong>
        </p>
      </div>

      <img
        className="w-full max-w-3xl object-contain pt-10"
        src={supplierRegistrationTabsImg}
        alt="Cadastro Fornecedores"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-10 px-4">
        <p className="text-sm">
          <strong>Guia Cadastro</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Dados Adicionais </strong>
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Itens Fornecidos</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>Guia ABC de Produtos – </strong> Guia com lista de produtos já
          adquiridos.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia compras – </strong> Guia com lista de compras já feitas
          ao fornecedor.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Notas Fiscais</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>Guia IQF </strong>
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Histórico – </strong> Cadastro de informações do
          fornecedor , LOG referente a troca de informações com fornecedor. Para
          adição e alteração seguir passos da Guia cadastro..
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Financeiro – </strong>Guia com dados dos títulos a pagar
          ao fornecedor.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Contatos – </strong> Cadastro de responsáveis pela
          empresa fornecedora. Para adição e alteração seguir passos da Guia
          cadastro.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Avaliação de Fornecedor – </strong>Definição do tipo de
          fornecedor.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Qualificação de Fornecedor – </strong>Definição dos
          requisitos que devem ser atendidos para compra.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia tabela de preços</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Emails</strong>
        </p>
      </div>
    </div>
  );
}

export default SupplierRegistration;
