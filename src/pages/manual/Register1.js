import ManualSideBar from "../../components/ManualSideBar";
import cadastro from "../assets/images/manual/Cadastro_Cliente.png";
import cad from "../assets/images/manual/cad_cli_guias.png";
import cad2 from "../assets/images/manual/cad_cli_menu.jpg";

function RegisterClient() {
  return (
    <>
      <ManualSideBar />

      <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
        <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
          Manual do Sistema - Cadastro de Cliente
        </h1>
        <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
          O programa <b>Maxcontrol</b> oferece um formulário de cadastro de
          clientes completo para melhor organizar e adquirir os dados de seus
          consumidores. Cadastre seus clientes com nome, endereços diversos,
          CNPJ/CPF, data de abertura/fundação e muito mais. Com módulos
          integrados e visão centralizada, cheque e acompanhe as transações de
          seus clientes através do cadastro. Veja pedidos, orçamentos, produtos
          adquiridos, ordens de produção, desenvolvimento de produtos,
          financeiro e demais dados de cada cliente em particular, filtre
          conforme sua necessidade e obtenha todas as informações de consumo dos
          seus clientes. Conte com relatórios detalhados, cadastro dos contatos,
          aviso de aniversário de contatos, etc...
        </p>
        <p className="mx-4 mb-10 text-sm sm:text-base lg:max-w-4xl">
          Integrado ao módulo de{" "}
          <b>
            CRM Customer Relationship Management (Gestão de relacionamento com o
            cliente)
          </b>{" "}
          reúne toda uma classe de sistemas de informações ou ferramentas que
          automatizam as funções de contato com o cliente. Estas ferramentas
          compreendem sistemas informatizados e fundamentalmente uma mudança de
          atitude corporativa, que objetiva ajudar as campanhas a criar e manter
          um bom relacionamento com seus clientes armazenando e
          inter-relacionando de forma inteligente, informações sobre suas
          atividades e interações com a empresa.
        </p>

        <img
          className="w-full max-w-3xl object-contain"
          src={cadastro}
          alt="Cadastro Cliente"
        />

        <img
          className="w-full max-w-3xl object-contain p-4"
          src={cad2}
          alt="Cadastro Cliente"
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
            <b>6-Botão Pedido de venda -</b> Abre módulo de pedido de venda;
          </p>
          <p className="text-sm pt-1">
            <b>7-Botão Cadastro de produtos -</b> Abre módulo de cadastro de
            produtos;
          </p>
          <p className="text-sm pt-1">
            <b>8-Botão de cadastro de amostra;</b>
          </p>
          <p className="text-sm pt-1">
            <b>9-Botão de cadastro de desenvolvimento de produtos;</b>
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
          <p className="text-sm pt-1">
            <b>13-Botão de abrir cotação de venda;</b>
          </p>
          <p className="text-sm pt-1">
            <b>14-Botão de abrir financeiro;</b>
          </p>
          <p className="text-sm pt-1">
            <b>15-Botão de mapas;</b>
          </p>
          <p className="text-sm pt-1">
            <b>16-Botão de etiquetas de endereços;</b>
          </p>
          <p className="text-sm pt-1">
            <b>17-Botão de lista de email;</b>
          </p>
        </div>

        <img
          className="w-full max-w-3xl object-contain pt-10"
          src={cad}
          alt="Cadastro Cliente"
        />

        <div className="flex flex-col items-start w-full max-w-3xl text-left py-10 px-4">
          <p className="text-sm">
            <b>Guia Cadastro</b>
          </p>
          <p className="text-sm pt-1">
            <b>Guia Endereços – </b> Cadastro de endereços adicionais ( endereço
            de entrega e cobrança) Para adição e alteração seguir passos da Guia
            cadastro.
          </p>
          <p className="text-sm pt-1">
            <b>Guia Contatos – </b> Cadastro de responsáveis pela empresa
            cliente. Para adição e alteração seguir passos da Guia cadastro.
          </p>
          <p className="text-sm pt-1">
            <b>Guia Dados Adicionais – </b> Cadastro de observações, conta
            bancária, email para uso de envio de Nf-e. Para adição e alteração
            seguir passos da Guia cadastro.
          </p>
          <p className="text-sm pt-1">
            <b>Guia Requisitos</b>
          </p>
          <p className="text-sm pt-1">
            <b>Guia Observações</b>
          </p>
          <p className="text-sm pt-1">
            <b>Guia Histórico – </b> Cadastro de informações do cliente , LOG
            referente a troca de informações com cliente. Para adição e
            alteração seguir passos da Guia cadastro.
          </p>
          <p className="text-sm pt-1">
            <b>Guia Financeiro – </b> Guia com dados dos títulos a receber do
            cliente.
          </p>
          <p className="text-sm pt-1">
            <b>Guia Produção – </b>Guia com dados de produtos em produção.
          </p>
          <p className="text-sm pt-1">
            <b>Guia Pedidos – </b> Guia com lista de pedidos já realizados pelo
            cliente.
          </p>
          <p className="text-sm pt-1">
            <b>Guia Contratos</b>
          </p>
          <p className="text-sm pt-1">
            <b>Guia Cotação – </b>Guia com Cotações abertas pelo cliente.
          </p>
          <p className="text-sm pt-1">
            <b>Guia ABC de Produtos– </b> Guia com lista de produtos já
            adquiridos.
          </p>
          <p className="text-sm pt-1">
            <b>Guia índice de preços</b>
          </p>
          <p className="text-sm pt-1">
            <b>Guia Emails</b>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterClient;
