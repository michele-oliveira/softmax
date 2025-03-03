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
        <p className="text-base pt-2">
          Além disso, o sistema possui um acesso rápido acionando as teclas do
          teclado (atalhos):
          <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
            <ul className="list-disc list-inside text-base font-semibold space-y-2">
              <li>F1</li>
              <li>F2 - Ligações;</li>
              <li>F3 - Cálc.</li>
              <li>F4 -Empenho;</li>
              <li>F5 - Mensagens;</li>
              <li>F6 -  Compras;</li>
              <li>F7- Vendas;</li>
              <li>F8 - Roteiro;</li>
              <li>F9</li>
              <li>F10 - Receber;</li>
              <li>F11 -  Pagar;</li>
              <li>F12</li>
            </ul>
          </div>
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
          <strong>1- Cadastro de Clientes </strong> - Permite registrar
          informações detalhadas dos clientes para facilitar o gerenciamento de
          vendas e comunicação.
        </p>
        <p className="text-base pt-2">
          <strong>2- Cadastro de Fornecedores </strong> - Realiza o cadastro de
          fornecedores, essencial para o controle de compras e relacionamento
          com parceiros.
        </p>
        <p className="text-base pt-2">
          <strong>4- Cadastro de Transportadoras </strong>- Registra informações
          sobre transportadoras, facilitando a gestão de entregas e logística de
          pedidos.
        </p>
        <p className="text-base py-5">
          <strong>Produtos </strong>
        </p>
        <p className="text-base pt-2">
          <strong>5- Produtos Acabados (PA) </strong> - Realiza o cadastro de
          produtos acabados para controle de estoque e processos de venda.
        </p>
        <p className="text-base pt-2">
          <strong>6- Matéria Prima (PA) </strong> - Cadastro de matéria-prima
          usada na produção, garantindo o controle adequado de estoque e
          consumo.
        </p>
        <p className="text-base pt-2">
          <strong>7- Outros Materiais </strong> - Realiza o cadastro de
          materiais diversos que são usados na produção ou operação da empresa.
        </p>
        <p className="text-base pt-2">
          <strong>8- Semi-Acabados </strong> - Permite o cadastro de produtos
          semiacabados que ainda passarão por processos adicionais antes de se
          tornarem produtos finais.
        </p>
        <p className="text-base pt-2">
          <strong>9- Desenvolvimento Pro </strong> - Registra os produtos em
          desenvolvimento, essenciais para o acompanhamento de novos produtos e
          suas fases.
        </p>
        <p className="text-base pt-2">
          <strong>10- Amostras </strong> - Cadastra amostras de produtos para
          testes, avaliações ou apresentações a clientes.
        </p>
        <p className="text-base py-5">
          <strong>Calendário </strong>
        </p>
        <p className="text-base pt-2">
          <strong>11- Calendário </strong> - Permite o cadastro de calendários
          para o controle de feriados, períodos de produção e outros eventos
          importantes.
        </p>
        <p className="text-base pt-2">
          <strong>12- Agenda </strong> - Cadastro de agendas para organizar
          compromissos, reuniões e prazos de produção.
        </p>
        <p className="text-base py-5">
          <strong>Operações </strong>
        </p>
        <p className="text-base pt-2">
          <strong>13-Mensagens </strong> - Permite o cadastro e envio de
          mensagens internas para comunicação entre os usuários do sistema.
        </p>
        <p className="text-base pt-2">
          <strong>14- Troca de senha </strong> - Permite aos usuários trocar sua
          senha de acesso ao sistema para manter a segurança.
        </p>
        <p className="text-base pt-2">
          <strong>15- Relogar </strong> - Funcionalidade que permite ao usuário
          se reconectar ao sistema após um desconecte.
        </p>
        <p className="text-base pt-2">
          <strong>16- Fechar </strong> - Fecha o sistema, encerrando a sessão de
          forma segura.
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
          <strong>1- Pedidos de venda </strong> - Realiza o registro de pedidos
          de venda, gerenciando o fluxo de solicitações dos clientes.
        </p>
        <p className="text-base pt-2">
          <strong>2- Pedido de compra </strong> - Registra os pedidos de compra
          de matérias-primas ou produtos, facilitando o controle de aquisições.
        </p>
        <p className="text-base pt-2">
          <strong>3- Cotação de compra </strong> - Permite gerar cotações para
          compras, garantindo comparações e negociações antes de realizar a
          compra.
        </p>
        <p className="text-base py-5">
          <strong>Produção </strong>
        </p>
        <p className="text-base pt-2">
          <strong>4- Empenhos </strong> - Gerencia os empenhos de produção,
          registrando as alocações de recursos e prazos.
        </p>
        <p className="text-base pt-2">
          <strong>5- Mapa de Produção </strong> - Visualiza o andamento da
          produção, acompanhando as etapas de fabricação e recursos utilizados.
        </p>
        <p className="text-base pt-2">
          <strong>6- Mapa de desenvolvimento </strong> - Acompanha o progresso
          dos projetos de desenvolvimento de novos produtos ou melhorias no
          processo produtivo.
        </p>
        <p className="text-base py-5">
          <strong>Financeiro </strong>
        </p>
        <p className="text-base pt-2">
          <strong>7- Contas a receber </strong> - Controla os valores devidos
          pelos clientes, facilitando a gestão de cobranças e pagamentos.
        </p>
        <p className="text-base pt-2">
          <strong>8- Contas a pagar </strong> - Registra e controla os
          compromissos financeiros da empresa com fornecedores e outros
          credores.
        </p>
        <p className="text-base pt-2">
          <strong>9-Controle Bancário </strong>- Gerencia as movimentações
          bancárias, como entradas, saídas e devoluções, garantindo um controle
          financeiro preciso.
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
          <strong>1- Relatório de clientes </strong> - Gera e imprime relatórios
          detalhados sobre clientes, facilitando a análise de dados e
          desempenho.
        </p>
        <p className="text-base pt-2">
          <strong>2- Relatório de Fornecedores</strong> - Gera e imprime
          relatórios sobre fornecedores, ajudando no controle de compras e
          relações comerciais.
        </p>
        <p className="text-base pt-2">
          <strong>3- Relatório de Produtos </strong> - Gera relatórios sobre os
          produtos, facilitando o controle de estoque e vendas.
        </p>
        <p className="text-base py-5">
          <strong>Pedidos </strong>
        </p>
        <p className="text-base pt-2">
          <strong>4- Relatório de Vendas </strong> - Gera e imprime relatórios
          detalhados sobre as vendas realizadas, auxiliando no planejamento
          financeiro e comercial.
        </p>
        <p className="text-base pt-2">
          <strong>5- Relatório de compras </strong> - Gera relatórios de
          compras, permitindo acompanhar o volume de aquisições e sua relação
          com a produção.
        </p>
        <p className="text-base py-5">
          <strong>Financeiro </strong>
        </p>
        <p className="text-base pt-2">
          <strong>6- Relatório de contas a receber</strong> - Gera relatórios
          sobre as contas a receber, facilitando o controle financeiro.
        </p>
        <p className="text-base pt-2">
          <strong>7- Relatório de contas a pagar </strong> - Gera relatórios
          sobre as contas a pagar, oferecendo visibilidade sobre os compromissos
          financeiros.
        </p>
        <p className="text-base pt-2">
          <strong>8- Relatório de Bancário </strong> - Gera relatórios das
          transações bancárias, como depósitos e retiradas, facilitando a
          conciliação bancária.
        </p>
        <p className="text-base pt-2">
          <strong>9-Controle Cheques </strong> - Gera relatórios sobre cheques
          emitidos e recebidos, facilitando o controle de pagamentos e
          recebimentos via cheque.
        </p>
        <p className="text-base py-5">
          <strong>Produção </strong>
        </p>
        <p className="text-base pt-2">
          <strong>10- Relatório de Empenho</strong> - Gera relatórios sobre
          empenhos de produção, facilitando o controle de alocações de recursos.
        </p>
        <p className="text-base pt-2">
          <strong>11- Relatório de Produção</strong> - Gera relatórios sobre o
          andamento da produção, permitindo o monitoramento de eficiência e
          produtividade.
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
          <strong>1- Funcionários </strong> - Cadastro e controle dos
          funcionários da empresa, incluindo dados pessoais e informações de
          acesso ao sistema.
        </p>
        <p className="text-base pt-2">
          <strong>2- Veículos</strong> - Registro de veículos utilizados pela
          empresa, facilitando a gestão de frota e logística.
        </p>
        <p className="text-base pt-2">
          <strong>3- Visitantes </strong> - Controle de visitantes, permitindo
          registrar entradas e saídas para segurança e organização.
        </p>
      </div>

      <h1 className="my-10 text-xl sm:text-2xl font-bold text-slate-900">
        Cadastro
      </h1>

      <img
        className="w-full max-w-3xl object-contain"
        src={menuImg2}
        alt="Página Inicial - Login"
      />

      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        A aba de cadastros possibilita realizar o cadastro dos seguintes
        tópicos:{" "}
      </p>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-decimal list-inside text-base font-semibold space-y-2">
          <li>Clientes;</li>
          <li>Fornecedores;</li>
          <li>Transportadoras;</li>
          <li>Produtos;</li>
          <li>Empresa;</li>
          <li>Ramos de Atividade;</li>
          <li>Usuários;</li>
          <li>Financeiro;</li>
          <li>Faturamento;</li>
          <li>Diversos;</li>
          <li>Parâmetros;</li>
        </ul>
      </div>

      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        Você poderá verificar os detalhes e especificações de cada tópico no
        menu lateral.
      </p>

      <h1 className="my-10 text-xl sm:text-2xl font-bold text-slate-900">
        Movimento
      </h1>

      <img
        className="w-full max-w-3xl object-contain"
        src={menuImg3}
        alt="Página Inicial - Login"
      />

      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        A aba de movimento possibilita realizar a movimentação dos seguintes
        tópicos:{" "}
      </p>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-decimal list-inside text-base font-semibold space-y-2">
          <li>Financeiro;</li>
          <li>Faturamento;</li>
          <li>Compras;</li>
          <li>Livro Fiscal;</li>
          <li>Movimento de Estoque;</li>
          <li>Produção;</li>
          <li>Controle de Ligações;</li>
          <li>RNC;</li>
          <li>Gerenciamento de pendências;</li>
        </ul>
      </div>

      <p className="my-6 text-sm sm:text-base lg:max-w-4xl">
        Você poderá verificar os detalhes e especificações de cada tópico no
        menu lateral.
      </p>

      <h1 className="my-10 text-xl sm:text-2xl font-bold text-slate-900">
        Relatórios
      </h1>

      <img
        className="w-full max-w-3xl object-contain"
        src={menuImg5}
        alt="Página Inicial - Login"
      />

      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        A aba de relatórios possibilita realizar o relatório dos seguintes
        tópicos:
      </p>

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-decimal list-inside text-base font-semibold space-y-2">
          <li>Financeiro;</li>
          <li>Faturamento;</li>
          <li>Compras;</li>
          <li>Indicadores de Desempenho;</li>
          <li>Cliente;</li>
          <li>Fornecedores;</li>
          <li>Produtos;</li>
        </ul>
      </div>

      <p className="my-6 text-sm sm:text-base lg:max-w-4xl">
        Nesse módulo é possível gerar e imprimir relatórios dos tópicos
        indicados.
      </p>

      <h1 className="my-10 text-xl sm:text-2xl font-bold text-slate-900">
        Utilitários
      </h1>

      <img
        className="w-full max-w-3xl object-contain"
        src={menuImg4}
        alt="Página Inicial - Login"
      />

      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        A aba de Utilitários:
      </p>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-decimal list-inside text-base font-semibold space-y-2">
          <li>Themas;</li>
          <li>Registro de Atividades;</li>
          <li>Paleta de Cores;</li>
          <li>Dados do sistema (Sefaz);</li>
          <li>Dados de Conexão;</li>
          <li>Suporte;</li>
          <li>Procurar Atualização;</li>
          <li>Registro</li>
          <li>Desbloquear usuário;</li>
          <li>CEP - Guia Postal;</li>
          <li>Mensagens;</li>
          <li>Google Maps;</li>
          <li>Calcular Datas;</li>
          <li>Estoque;</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
