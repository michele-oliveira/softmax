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
          <strong>1- Campo Nome de Usuário -</strong> Colocar seu usuário
        </p>
        <p className="text-base pt-2">
          <strong>2- Campo Senha- </strong> Colocar sua senha
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
          <strong>Cadastros </strong>
        </p>
        <p className="text-base pt-2">
          <strong>1- Cadastro de Clientes </strong> - Realizar o cadastro de
          clientes
        </p>
        <p className="text-base pt-2">
          <strong>2- Cadastro de Fornecedores </strong> - Realizar o cadastro de
          Fornecedores
        </p>
        <p className="text-base pt-2">
          <strong>3- Cadastro de Clientes </strong> - Realizar cadastro de
          Clientes
        </p>
        <p className="text-base pt-2">
          <strong>4- Cadastro de Transportadoras </strong>- Realiza cadastro de
          Transportadoras
        </p>
        <p className="text-base py-5">
          <strong>Produtos </strong>
        </p>
        <p className="text-base pt-2">
          <strong>5- Produtos Acabados (PA) </strong> - Realiza o cadastro de
          produtos acabados
        </p>
        <p className="text-base pt-2">
          <strong>6- Matéria Prima (PA) </strong> - Realiza o cadastro de
          matéria prima
        </p>
        <p className="text-base pt-2">
          <strong>7- Outros Materiais </strong> - Realiza o cadastro de outros
          materiais
        </p>
        <p className="text-base pt-2">
          <strong>8- Semi-Acabados </strong> - Realiza o cadastro de semi
          acabados
        </p>
        <p className="text-base pt-2">
          <strong>9- Desenvolvimento Pro </strong> - Realiza o cadastro de
          desenvolvimento pro
        </p>
        <p className="text-base pt-2">
          <strong>10- Amostras </strong> - Realiza o cadastro de amostras
        </p>
        <p className="text-base py-5">
          <strong>Calendário </strong>
        </p>
        <p className="text-base pt-2">
          <strong>11- Calendário </strong> - Realiza o cadastro de calendários
        </p>
        <p className="text-base pt-2">
          <strong>12- Agenda </strong> - Realiza o cadastro de agendas
        </p>
        <p className="text-base py-5">
          <strong>Operações </strong>
        </p>
        <p className="text-base pt-2">
          <strong>13-Mensagens </strong> - Realiza o cadastro de mensagens
        </p>
        <p className="text-base pt-2">
          <strong>14- Troca de senha </strong> - Realiza a troca da senha para
          acesso do usuário
        </p>
        <p className="text-base pt-2">
          <strong>15- Relogar </strong> - Possibilita o usuário relogar no
          sistema
        </p>
        <p className="text-base pt-2">
          <strong>16- Fechar </strong> - Faz o fechamento do sistema
        </p>
      </div>

      <img
        className="w-full max-w-3xl object-contain"
        src={menuButtons2}
        alt="Página Inicial - Login"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="text-base pb-5">
          <strong>Pedidos </strong>
        </p>
        <p className="text-base pt-2">
          <strong>1- Pedidos de venda </strong> - Realiza pedido de venda
        </p>
        <p className="text-base pt-2">
          <strong>2- Pedido de compra </strong> - Realiza o pedido de compra no
          sistema
        </p>
        <p className="text-base pt-2">
          <strong>3- Cotação de compra </strong> - Realiza cotação de compra
        </p>
        <p className="text-base py-5">
          <strong>Produção </strong>
        </p>
        <p className="text-base pt-2">
          <strong>4- Empenhos </strong>
        </p>
        <p className="text-base pt-2">
          <strong>5- Mapa de Produção </strong>
        </p>
        <p className="text-base pt-2">
          <strong>6- Mapa de desenvolvimento </strong>
        </p>
        <p className="text-base py-5">
          <strong>Financeiro </strong>
        </p>
        <p className="text-base pt-2">
          <strong>7- Contas a receber </strong>
        </p>
        <p className="text-base pt-2">
          <strong>8- Contas a pagar </strong>
        </p>
        <p className="text-base pt-2">
          <strong>9-Controle Bancário </strong>
        </p>
      </div>

      <img
        className="w-full max-w-3xl object-contain"
        src={menuButtons3}
        alt="Página Inicial - Login"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="text-base pb-5">
          <strong>Relatórios </strong>
        </p>
        <p className="text-base pt-2">
          <strong>1- Relatório de clientes </strong> - Gera e imprime o
          relatório de clientes
        </p>
        <p className="text-base pt-2">
          <strong>2- Relatório de Fornecedores</strong> - Gera e imprime o
          relatório de Fornecedores
        </p>
        <p className="text-base pt-2">
          <strong>3- Relatório de Produtos </strong> - Gera e imprime o
          relatório de produtos
        </p>
        <p className="text-base py-5">
          <strong>Pedidos </strong>
        </p>
        <p className="text-base pt-2">
          <strong>4- Relatório de Vendas </strong> - Gera e imprime o relatório
          de vendas
        </p>
        <p className="text-base pt-2">
          <strong>5- Relatório de compras </strong> - Gera e imprime o relatório
          de compras
        </p>
        <p className="text-base py-5">
          <strong>Financeiro </strong>
        </p>
        <p className="text-base pt-2">
          <strong>6- Relatório de contas a receber</strong> - Gera e imprime o
          relatório de contas a receber
        </p>
        <p className="text-base pt-2">
          <strong>7- Relatório de contas a pagar </strong> - Gera e imprime o
          relatório de contas a pagar
        </p>
        <p className="text-base pt-2">
          <strong>8- Relatório de Bancário </strong> - Gera e imprime o
          relatório Bancário
        </p>
        <p className="text-base pt-2">
          <strong>9-Controle Cheques </strong> - Gera e imprime o relatório de
          cheques
        </p>
        <p className="text-base py-5">
          <strong>Produção </strong>
        </p>
        <p className="text-base pt-2">
          <strong>10- Relatório de Empenho</strong> - Gera e imprime o relatório
          de empenho
        </p>
        <p className="text-base pt-2">
          <strong>11- Relatório de Produção</strong> - Gera e imprime o
          relatório de produção
        </p>
      </div>
      <img
        className="w-full max-w-3xl object-contain"
        src={menuButtons4}
        alt="Página Inicial - Login"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="text-base pb-5">
          <strong>Portaria </strong>
        </p>
        <p className="text-base pt-2">
          <strong>1- Funcionários </strong>
        </p>
        <p className="text-base pt-2">
          <strong>2- Veículos</strong>
        </p>
        <p className="text-base pt-2">
          <strong>3- Visitantes </strong>
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
