import registrationImg from "../../assets/images/manual/Cadastro_Cliente.png";
import cad from "../../assets/images/manual/cad_cli_guias.png";
import cad2 from "../../assets/images/manual/cad_cli_menu.jpg";

function CustomerRegistration() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Cadastro de Cliente
      </h1>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        O programa <strong>Maxcontrol</strong> oferece um formulário de cadastro
        de clientes completo para melhor organizar e adquirir os dados de seus
        consumidores. Cadastre seus clientes com nome, endereços diversos,
        CNPJ/CPF, data de abertura/fundação e muito mais. Com módulos integrados
        e visão centralizada, cheque e acompanhe as transações de seus clientes
        através do cadastro. Veja pedidos, orçamentos, produtos adquiridos,
        ordens de produção, desenvolvimento de produtos, financeiro e demais
        dados de cada cliente em particular, filtre conforme sua necessidade e
        obtenha todas as informações de consumo dos seus clientes. Conte com
        relatórios detalhados, cadastro dos contatos, aviso de aniversário de
        contatos, etc...
      </p>
      <p className="mx-4 mb-10 text-sm sm:text-base lg:max-w-4xl">
        Integrado ao módulo de{" "}
        <strong>
          CRM Customer Relationship Management (Gestão de relacionamento com o
          cliente)
        </strong>{" "}
        reúne toda uma classe de sistemas de informações ou ferramentas que
        automatizam as funções de contato com o cliente. Estas ferramentas
        compreendem sistemas informatizados e fundamentalmente uma mudança de
        atitude corporativa, que objetiva ajudar as campanhas a criar e manter
        um bom relacionamento com seus clientes armazenando e inter-relacionando
        de forma inteligente, informações sobre suas atividades e interações com
        a empresa.
      </p>

      <img
        className="w-full max-w-3xl object-contain"
        src={registrationImg}
        alt="Cadastro Cliente"
      />

      <img
        className="w-full max-w-3xl object-contain p-4"
        src={cad2}
        alt="Cadastro Cliente"
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
          <strong>6-Botão Pedido de venda -</strong> Abre módulo de pedido de
          venda;
        </p>
        <p className="text-sm pt-1">
          <strong>7-Botão Cadastro de produtos -</strong> Abre módulo de
          cadastro de produtos;
        </p>
        <p className="text-sm pt-1">
          <strong>8-Botão de cadastro de amostra;</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>9-Botão de cadastro de desenvolvimento de produtos;</strong>
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
        <p className="text-sm pt-1">
          <strong>13-Botão de abrir cotação de venda;</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>14-Botão de abrir financeiro;</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>15-Botão de mapas;</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>16-Botão de etiquetas de endereços;</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>17-Botão de lista de email;</strong>
        </p>
      </div>

      <img
        className="w-full max-w-3xl object-contain pt-10"
        src={cad}
        alt="Cadastro Cliente"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-10 px-4">
        <p className="text-sm">
          <strong>Guia Cadastro</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Endereços – </strong> Cadastro de endereços adicionais (
          endereço de entrega e cobrança) Para adição e alteração seguir passos
          da Guia cadastro.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Contatos – </strong> Cadastro de responsáveis pela
          empresa cliente. Para adição e alteração seguir passos da Guia
          cadastro.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Dados Adicionais – </strong> Cadastro de observações,
          conta bancária, email para uso de envio de Nf-e. Para adição e
          alteração seguir passos da Guia cadastro.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Requisitos</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Observações</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Histórico – </strong> Cadastro de informações do cliente
          , LOG referente a troca de informações com cliente. Para adição e
          alteração seguir passos da Guia cadastro.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Financeiro – </strong> Guia com dados dos títulos a
          receber do cliente.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Produção – </strong>Guia com dados de produtos em
          produção.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Pedidos – </strong> Guia com lista de pedidos já
          realizados pelo cliente.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Contratos</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Cotação – </strong>Guia com Cotações abertas pelo
          cliente.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia ABC de Produtos– </strong> Guia com lista de produtos já
          adquiridos.
        </p>
        <p className="text-sm pt-1">
          <strong>Guia índice de preços</strong>
        </p>
        <p className="text-sm pt-1">
          <strong>Guia Emails</strong>
        </p>
      </div>
    </div>
  );
}

export default CustomerRegistration;
