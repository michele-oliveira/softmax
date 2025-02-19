import React from "react";

import loginImg from "../../assets/images/manual/login.png";
import menuImg1 from "../../assets/images/manual/Menu.png";
import menuImg2 from "../../assets/images/manual/Menu_Cadastro.png";
import menuImg3 from "../../assets/images/manual/Menu_Movimento.png";
import menuImg4 from "../../assets/images/manual/Menu_Utilitarios.png";
import menuImg5 from "../../assets/images/manual/Menu_Relatorio.png";
import menuButtons1 from "../../assets/images/manual/Menu_Botoes_Cadastro.png";
import menuButtons2 from "../../assets/images/manual/Menu_Botoes_Movimento.png";
import menuButtons3 from "../../assets/images/manual/Menu_Botoes_Relatorios.png";
import menuButtons4 from "../../assets/images/manual/Menu_Botoes_Portaria.png";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Página Inicial
      </h1>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        Fundada em 2017, nossa empresa de software tem transformado a gestão
        empresarial com soluções inovadoras e eficientes. Com um sistema
        intuitivo e poderoso, ajudamos negócios de diversos segmentos a
        otimizarem seus processos, melhorarem a produtividade e tomarem decisões
        estratégicas com mais segurança. Conheça a tecnologia que vem
        revolucionando a administração de empresas!
      </p>
      <img
        className="w-full max-w-3xl object-contain"
        src={loginImg}
        alt="Página Inicial - Login"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="text-base pt-2">
          <b>1- Campo Nome de Usuário -</b> Colocar seu usuário
        </p>
        <p className="text-base pt-2">
          <b>2- Campo Senha- </b> Colocar sua senha
        </p>
      </div>
      <img
        className="w-full max-w-3xl object-contain"
        src={menuImg1}
        alt="Página Inicial - Login"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="text-base pt-2">
          A página inicial contém Cadastro de Clientes, Fornecedores,
          Transportadoras. Cadastro de produtos como PA (Produto acabado), MP
          (Matéria Prima), Outros Materiais, Semi-Acabados,Desenvolvimento Pro,
          Amostras. Cadastros de Agenda e Calendário. Cadastro de Operações com
          mensagens, troca de senha e relogar.
        </p>
      </div>

      <img
        className="w-full max-w-3xl object-contain"
        src={menuButtons1}
        alt="Página Inicial - Login"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="text-base pb-5">
          <b>Cadastros </b>
        </p>
        <p className="text-base pt-2">
          <b>1- Cadastro de Clientes </b> - Realizar o cadastro de clientes
        </p>
        <p className="text-base pt-2">
          <b>2- Cadastro de Fornecedores </b> - Realizar o cadastro de
          Fornecedores
        </p>
        <p className="text-base pt-2">
          <b>3- Cadastro de Clientes </b> - Realizar cadastro de Clientes
        </p>
        <p className="text-base pt-2">
          <b>4- Cadastro de Transportadoras </b>- Realiza cadastro de
          Transportadoras
        </p>
        <p className="text-base py-5">
          <b>Produtos </b>
        </p>
        <p className="text-base pt-2">
          <b>5- Produtos Acabados (PA) </b> - Realiza o cadastro de produtos
          acabados
        </p>
        <p className="text-base pt-2">
          <b>6- Matéria Prima (PA) </b> - Realiza o cadastro de matéria prima
        </p>
        <p className="text-base pt-2">
          <b>7- Outros Materiais </b> - Realiza o cadastro de outros materiais
        </p>
        <p className="text-base pt-2">
          <b>8- Semi-Acabados </b> - Realiza o cadastro de semi acabados
        </p>
        <p className="text-base pt-2">
          <b>9- Desenvolvimento Pro </b> - Realiza o cadastro de desenvolvimento
          pro
        </p>
        <p className="text-base pt-2">
          <b>10- Amostras </b> - Realiza o cadastro de amostras
        </p>
        <p className="text-base py-5">
          <b>Calendário </b>
        </p>
        <p className="text-base pt-2">
          <b>11- Calendário </b> - Realiza o cadastro de calendários
        </p>
        <p className="text-base pt-2">
          <b>12- Agenda </b> - Realiza o cadastro de agendas
        </p>
        <p className="text-base py-5">
          <b>Operações </b>
        </p>
        <p className="text-base pt-2">
          <b>13-Mensagens </b> - Realiza o cadastro de mensagens
        </p>
        <p className="text-base pt-2">
          <b>14- Troca de senha </b> - Realiza a troca da senha para acesso do
          usuário
        </p>
        <p className="text-base pt-2">
          <b>15- Relogar </b> - Possibilita o usuário relogar no sistema
        </p>
        <p className="text-base pt-2">
          <b>16- Fechar </b> - Faz o fechamento do sistema
        </p>
      </div>

      <img
        className="w-full max-w-3xl object-contain"
        src={menuButtons2}
        alt="Página Inicial - Login"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="text-base pb-5">
          <b>Pedidos </b>
        </p>
        <p className="text-base pt-2">
          <b>1- Pedidos de venda </b> - Realiza pedido de venda
        </p>
        <p className="text-base pt-2">
          <b>2- Pedido de compra </b> - Realiza o pedido de compra no sistema
        </p>
        <p className="text-base pt-2">
          <b>3- Cotação de compra </b> - Realiza cotação de compra
        </p>
        <p className="text-base py-5">
          <b>Produção </b>
        </p>
        <p className="text-base pt-2">
          <b>4- Empenhos </b>
        </p>
        <p className="text-base pt-2">
          <b>5- Mapa de Produção </b>
        </p>
        <p className="text-base pt-2">
          <b>6- Mapa de desenvolvimento </b>
        </p>
        <p className="text-base py-5">
          <b>Financeiro </b>
        </p>
        <p className="text-base pt-2">
          <b>7- Contas a receber </b>
        </p>
        <p className="text-base pt-2">
          <b>8- Contas a pagar </b>
        </p>
        <p className="text-base pt-2">
          <b>9-Controle Bancário </b>
        </p>
      </div>

      <img
        className="w-full max-w-3xl object-contain"
        src={menuButtons3}
        alt="Página Inicial - Login"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="text-base pb-5">
          <b>Relatórios </b>
        </p>
        <p className="text-base pt-2">
          <b>1- Relatório de clientes </b> - Gera e imprime o relatório de
          clientes
        </p>
        <p className="text-base pt-2">
          <b>2- Relatório de Fornecedores</b> - Gera e imprime o relatório de
          Fornecedores
        </p>
        <p className="text-base pt-2">
          <b>3- Relatório de Produtos </b> - Gera e imprime o relatório de
          produtos
        </p>
        <p className="text-base py-5">
          <b>Pedidos </b>
        </p>
        <p className="text-base pt-2">
          <b>4- Relatório de Vendas </b> - Gera e imprime o relatório de vendas
        </p>
        <p className="text-base pt-2">
          <b>5- Relatório de compras </b> - Gera e imprime o relatório de
          compras
        </p>
        <p className="text-base py-5">
          <b>Financeiro </b>
        </p>
        <p className="text-base pt-2">
          <b>6- Relatório de contas a receber</b> - Gera e imprime o relatório
          de contas a receber
        </p>
        <p className="text-base pt-2">
          <b>7- Relatório de contas a pagar </b> - Gera e imprime o relatório de
          contas a pagar
        </p>
        <p className="text-base pt-2">
          <b>8- Relatório de Bancário </b> - Gera e imprime o relatório Bancário
        </p>
        <p className="text-base pt-2">
          <b>9-Controle Cheques </b> - Gera e imprime o relatório de cheques
        </p>
        <p className="text-base py-5">
          <b>Produção </b>
        </p>
        <p className="text-base pt-2">
          <b>10- Relatório de Empenho</b> - Gera e imprime o relatório de
          empenho
        </p>
        <p className="text-base pt-2">
          <b>11- Relatório de Produção</b> - Gera e imprime o relatório de
          produção
        </p>
      </div>
      <img
        className="w-full max-w-3xl object-contain"
        src={menuButtons4}
        alt="Página Inicial - Login"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="text-base pb-5">
          <b>Portaria </b>
        </p>
        <p className="text-base pt-2">
          <b>1- Funcionários </b>
        </p>
        <p className="text-base pt-2">
          <b>2- Veículos</b>
        </p>
        <p className="text-base pt-2">
          <b>3- Visitantes </b>
        </p>
      </div>

      <img
        className="w-full max-w-3xl object-contain"
        src={menuImg2}
        alt="Página Inicial - Login"
      />

      <img
        className="w-full max-w-3xl object-contain"
        src={menuImg3}
        alt="Página Inicial - Login"
      />

      <img
        className="w-full max-w-3xl object-contain"
        src={menuImg5}
        alt="Página Inicial - Login"
      />

      <img
        className="w-full max-w-3xl object-contain"
        src={menuImg4}
        alt="Página Inicial - Login"
      />
    </div>
  );
};

export default HomePage;
