import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import {
  FaArrowRight,
  FaChartBar,
  FaIndustry,
  FaShoppingBag,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

import imagemModules from "../assets/images/imagemModules.jpg";

const modulesData = [
  {
    id: "vendas",
    title: "Módulo de Vendas",
    icon: <FaShoppingCart className="text-3xl text-white mx-auto mb-2" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-left">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
            Vendas
          </h2>
          <p className="text-gray-700 mb-4">
            Apoio à operação comercial de venda da empresa, permitindo controlar
            o planejamento de metas de venda, a administração de orçamentos e
            pedidos de venda, bem como a integração automática com estoques,
            viabilizando o controle de reservas e encomendas, contas a receber,
            fiscal e contábil, e também análise e controle de créditos,
            descontos concedidos e controle de número de série.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              Controle de pedidos (vendas externas, balcão e telemarketing)
            </li>
            <li>Cronograma de entregas</li>
            <li>Consulta ao faturamento e posição de clientes</li>
            <li>Emissão de orçamentos</li>
            <li>Acesso a cadastro de produtos e estoques</li>
            <li>Emissão de ordens de produção</li>
            <li>Vários relatórios</li>
          </ul>
        </div>
        <div
          key={module.id}
          className="bg-white p-6 rounded-lg shadow-lg text-left"
        >
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
              Controle de Pedidos de Vendas
            </h2>
            <p className="text-gray-700 mb-4">
              Com o controle de pedidos de vendas toda a gestão da sua empresa
              fica mais organizada. Complete seu processo de vendas com a gestão
              de pedidos de vendas. Utilize o Maxcontrol para disparar ações
              dentro da sua empresa, como a encomenda ou fabricação de novos
              produtos, integrado com faturamento torna o processo de emissão de
              notas fiscais simples e ágil.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "compras",
    title: "Módulo de Compras",
    icon: <FaShoppingBag className="text-3xl text-white mx-auto mb-2" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-left">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
            Compras
          </h2>
          <p className="text-gray-700 mb-4">
            Possui fluxo amplo que pode se estender desde a requisição interna
            até a entrada de mercadoria e notas fiscais no sistema. A automação
            do processo de compras aumenta a produtividade na cotação de ofertas
            e comparativos de compras, através da geração de um rico histórico
            de preços e condições comerciais possibilita ao gestor buscar a
            redução de custos e melhores negociações. Veja alguns dos recursos
            básicos deste módulo.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Requisições internas</li>
            <li>Pedidos de compras</li>
            <li>Importação de XML (dispensa digitação)</li>
            <li>Gerenciamento de contratos de fornecimento</li>
            <li>
              Emissão de pedidos com envio de e-mail personalizado para
              fornecedor
            </li>
            <li>
              Baixa de pedido de compra com inclusão automática no estoque
            </li>
            <li>Entrada de notas com carga de XML</li>
            <li>Validação de notas eletrônicas na Sefaz</li>
            <li>Diferentes níveis de aprovação de compras</li>
            <li>Integração com PCP/MRP</li>
            <li>Integração com cotação de compra</li>
            <li>Análise de históricos de compras de fornecedores e produtos</li>
            <li>Follow-up dos itens durante todo percurso de compra</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Objetivos e Benefícios Gerencia as solicitações, cotações, ordens de
            compras e notas de entradas de forma prática e otimizada, evitando
            retrabalhos no processo. Permite ao comprador um acesso ágil das
            informações gerenciais, que necessita para o bom planejamento de
            compras da empresa.
          </p>
          <p className="text-gray-700 mt-4 mb-4 font-bold">Características</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Controle completo do processo de aprovação de compras</li>
            <li>Emissão de solicitações, cotações e ordens de compras</li>
            <li>
              Controle e envio personalizado de solicitação e ordem de compra
            </li>
            <li>Previsão financeira</li>
            <li>Alocação das compras por diversos centros de custos</li>
            <li>
              Efetivações parciais e totais de ordens de compras, mantendo
              controle de saldos por itens e fornecedores
            </li>
            <li>Emissão automatizada da notas de entradas e financeiro</li>
            <li>Tabela de preços de compras</li>
            <li>
              Controle da disponibilidade de estoque de produtos comprados
            </li>
            <li>
              Gerenciamento de materiais por lotes, validade, grade, número de
              série e configurador de produto
            </li>
            <li>Cálculo automático dos impostos</li>
            <li>Cálculo de preços de custo e médio</li>
          </ul>

          <p className="text-gray-700 my-4 font-bold">Cotação</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Apoio na decisão de compra, informando a melhor cotação</li>
            <li>
              Registro de todo o histórico da negociação, com comunicação
              transparente e eficiente
            </li>
            <li>
              Determinação de fornecedores habilitados por grupo de materiais
            </li>
            <li>
              Notificação aos fornecedores dos itens a serem cotados e
              alterações nas regras do processo de cotação
            </li>
            <li>
              Total integração com o módulo Planejamento de Materiais, avaliando
              ordens e demandas
            </li>
            <li>
              Relatórios personalizados para impressão das cotações, com todas
              as informações pertinentes
            </li>
            <li>
              Permite gerar o processo de cotação de itens ainda não cadastrados
              no sistema.
            </li>
          </ul>
        </div>
        <div
          key={module.id}
          className="bg-white p-6 rounded-lg shadow-lg text-left"
        >
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
              Pedido de compra
            </h2>
            <p className="text-gray-700 mb-4">
              O Pedido de Compra é um contrato formal entre a empresa e o
              fornecedor, deve representar fielmente as condições e
              características da compra efetuada. É o acordo que representa as
              condições em que foi feita a negociação, tais como: material,
              quantidade, qualidade, frequência de entregas, prazos, preços,
              local de entrega, tributação, entre outros.
            </p>
          </div>
        </div>
        <div
          key={module.id}
          className="bg-white p-6 rounded-lg shadow-lg text-left"
        >
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
              NF-e / Faturamento
            </h2>
            <p className="text-gray-700 mb-4">
              Apoio ao processo de faturamento da empresa otimizando a emissão
              de notas fiscais individuais ou em lote e também permitindo a
              montagem de cargas através de operações dos mais diversos modelos
              tais como emissão das notas fiscais na própria empresa, em armazém
              geral ou ponto de retirada. Totalmente aderente à legislação
              vigente, atende também a emissão de Nota Fiscal Eletrônica
              Ambiente Nacional, integrando-se automaticamente com os módulos de
              contas a receber, estoque e escrita fiscal. Derivado do pedido de
              venda é a emissão da nota fiscal (nota fiscal impresa ou NF-e).
              Informa-se a quantidade disponibilizada, este ato deduz do estoque
              de produto acabado gerando faturamento de contas a receber.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Pedido de Venda totalmente integrado aNF-e Nota Fiscal
                eletrônica
              </li>
              <li>Consulta Instantânea a Notas Fiscais</li>
              <li>Baixa automática de estoques</li>
              <li>Baixa automática de pedido de venda</li>
              <li>Controle de comissão de vendedores e representantes</li>
              <li>Integração com financeiro (geração de parcelas)</li>
              <li>Controle de tomada de crédito</li>
              <li>Relatórios gerenciais e analíticos</li>
              <li>Emissão de notas fiscais em lote.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "producao",
    title: "Módulo de Produção e Estoque",
    icon: <FaIndustry className="text-3xl text-white mx-auto mb-2" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-left">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
            PCP-Planejamento e controle de produção
          </h2>
          <p className="text-gray-700 mb-4">
            Planejamento da produção, análise de demandas de pedidos e
            parâmetros de reposição, gerando ordens de compra e produção em
            função das regras e parâmetros universais do MRP, agiliza o processo
            de análise de necessidade e liberação de ordens. Sua velocidade do
            planejamento simplifica e automatiza o processo produtivo,
            eliminando falhas e atrasos no processo produtivo, integrando os
            departamentos de produção, compras e suprimentos.
          </p>
          <p className="text-gray-700 mb-4 font-bold">Características</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Planejamento da produção</li>
            <li>Planejamento de materiais</li>
            <li>Mapa de produção</li>
            <li>
              Tratamento de políticas de cobertura de estoque totalmente
              parametrizável
            </li>
            <li>
              Avaliação de todas as demandas e ordens em andamento e planejadas
              (conceito de reserva e encomenda)
            </li>
            <li>
              Adota todos os conceitos de ponto de reposição, estoque mínimo e
              MRP, integrado com as políticas de cobertura de estoque
            </li>
            <li>Liberação de solicitações ou ordens de compra</li>
            <li>
              Avaliação de todas as demandas e ordens em andamento e planejadas
              (conceito de reserva e encomenda)
            </li>
            <li>Geração de rancho e suprimento da produção</li>
          </ul>
        </div>
        <div
          key={module.id}
          className="bg-white p-6 rounded-lg shadow-lg text-left"
        >
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
              MRP - Planejamento dos Recursos de Manufatura
            </h2>
            <p className="text-gray-700 mb-4">
              Planejar é uma das atividades mais importantes dentro de uma
              organização e, portanto, deve ocupar um lugar de destaque dentro
              dela. Após emissão do pedido de venda e sua aprovação, o mesmo é
              facilmente visualizado pelo PCP que efetua análise e explosão da
              sua ordem de produção.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Visa otimizar os processos produtivos e a gestão de inventários
              </li>
              <li>
                Define que matérias-primas, materiais e produtos são necessários
                para cada uma das etapas da produção ou para venda quando e em
                que quantidades.
              </li>
              <li>Mapa de produção</li>
              <li>
                Define o planejamento das compras, atividades produtivas, vendas
                e prazos de entrega.
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Ordem de Compra Programação da produção realizada é feita analise
              do estoque e sua disponibilidade. Em caso de insuficiência de
              estoque é gerada Ordem de compra.
            </p>
          </div>
        </div>
        <div
          key={module.id}
          className="bg-white p-6 rounded-lg shadow-lg text-left"
        >
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
              Estoque
            </h2>
            <p className="text-gray-700 mb-4">
              Proporciona completa gestão, otimizando o investimento em
              estoques, aumentando o uso eficiente dos recursos da empresa e
              minimizando as necessidades de capital investido. Tudo isso é
              obtido através do uso de ferramentas inteligentes que permitem de
              maneira segura e flexível: analisar/determinar a permanência e
              periodicidade de reabastecimento dos itens de estoque, determinar
              o volume necessário de estoque para um determinado período,
              controlar os volumes de estoques em termos de quantidade e valor,
              dentre outras.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Cadastro de produtos (PA, SA, MP, OM, DC).</li>
              <li>Unidades de gerenciamento</li>
              <li>Movimentação de entrada e saída</li>
              <li>Categoria de produtos</li>
              <li>Controles de lotes (FIFO/PEPS)</li>
              <li>Formação de preços de produtos</li>
              <li>Preços de produtos em entoque (venda Médio e custos)</li>
              <li>Classificação Fiscal de produtos</li>
              <li>Codificação de estoque</li>
              <li>Inventários</li>
              <li>Avaliação de estoque</li>
              <li>Ponto crítico e recompra</li>
              <li>Produtos compostos</li>
              <li>Composição de itens do estoque</li>
              <li>Vários relatórios</li>
              <li>Integração com outros módulos</li>
            </ul>
          </div>
        </div>
        <div
          key={module.id}
          className="bg-white p-6 rounded-lg shadow-lg text-left"
        >
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
              Fórmula de Produtos
            </h2>
            <p className="text-gray-700 mb-4">
              Com uma tabela unificada para o cadastro de produtos e insumos, o
              Maxcontrol garante total flexibilidade para a especificação de
              composição dos produtos, seja qual for a complexidade. As fórmulas
              dos produtos de fabricação própria podem incluir outros itens
              compostos, se adequando a qualquer que seja a estrutura dos seus
              produtos. Uma tabela de vínculos permite apontar os fornecedores
              que vendem cada produto e, opcionalmente, informar códigos,
              descrições e preços diferenciados por fornecedor
            </p>
          </div>
        </div>
        <div
          key={module.id}
          className="bg-white p-6 rounded-lg shadow-lg text-left"
        >
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
              Controle de estoque
            </h2>
            <p className="text-gray-700 mb-4">
              Saber "o que", "quando" e "quanto" deve ser reposto no estoque,
              controlando o que sai e o que resta de material estocado. Esta
              informação deve estar disponível a qualquer momento do dia, sem
              que haja necessidade de contar ou medir fisicamente o estoque.
              Evitar desvios, perdas, validade e roubo são um dos motivos
              importantes para que sua a empresa invista num controle de
              estoques eficiente.
            </p>
          </div>
        </div>
        <div
          key={module.id}
          className="bg-white p-6 rounded-lg shadow-lg text-left"
        >
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
              Linha de produção
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Controle de equipamentos;</li>
              <li>Controle de processos;</li>
              <li>Ordem de produção por linha de produção;</li>
              <li>Relatório de produtividade por maquina;</li>
              <li>Relatório de produtividade por Processo;</li>
              <li>Relatório de produtividade por Operador;</li>
              <li>Preços de produtos em entoque (venda Médio e custos)</li>
              <li>Apontamento de gargalos de produção;</li>
              <li>Vinculo com PCP / MRP.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "financeiro",
    title: "Módulo Financeiro",
    icon: <FaMoneyBill1Wave className="text-3xl text-white mx-auto mb-2" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-left">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
            Contas a Receber
          </h2>
          <p className="text-gray-700 mb-4">
            Atuando de forma totalmente integrada aos módulos de Vendas,
            Faturamento e Distribuição, Contas Correntes e Fluxo de Caixa
            oferece um conjunto de funcionalidades para total controle dos
            recebíveis da empresa, administrando toda a carteira de títulos,
            recebendo automaticamente os movimentos gerados pelos demais eventos
            e demais módulos e agregando valor na gestão financeira da
            organização. Controle de todo o faturamento a receber da empresa.
            Contém títulos gerados pelo faturamento de nota fiscal.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Controle das contas a receber</li>
            <li>Consulta aos recebíveis em várias formas</li>
            <li>Controle de cheques recebidos</li>
            <li>Controle de contas correntes (internas /bancárias)</li>
            <li>Contas correntes monitoradas</li>
            <li>Fluxo de caixa (Analítico e sintético)</li>
            <li>Boletos Bancários</li>
            <li>Duplicatas</li>
            <li>Remessa (cobrança eletrônica)- CNAB</li>
            <li>Comissão de vendedores (Monitoramento)</li>
            <li>Relatórios gerenciais e analíticos</li>
            <li>Integração com outros módulos</li>
          </ul>
          <p className="text-gray-700 mb-4 font-bold pt-4">
            Arquivos de Remessa (CNAB)
          </p>
          <p className="text-gray-700 mb-4">
            Envio de títulos ao banco para cobrança eletrônica com funções de
            geração de arquivo, leitura de retorno com confirmação e leitura de
            retorno com baixa de títulos.
          </p>
          <p className="text-gray-700 mb-4">
            Lançamentos de Cheques Cadastros dos cheques recebidos, com opções
            de baixa de cheque, depósito, devolução e reapresentação.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-left">
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
              Custos
            </h2>
            <p className="text-gray-700 mb-4">
              A importância de saber calcular corretamente seu preço! Por quanto
              vender seu Produto? O modulo tem por objetivo auxiliar na formação
              do preço de venda, adotando procedimentos técnicos para formar o
              preço de venda adequado de produtos ou serviços.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Cadastros de operações fabris;</li>
              <li>Processos produtivos;</li>
              <li>Monitoramento de performances de processos;</li>
              <li>Pré-cálculo de custo de produtos (desenvolvimento);</li>
              <li>Centro de custo e grupos;</li>
              <li>Relatórios gerenciais e analíticos;</li>
              <li>Boletos Bancários</li>
              <li>Duplicatas</li>
              <li>Remessa (cobrança eletrônica)- CNAB</li>
              <li>Integração com outros módulos;</li>
            </ul>
            <p className="text-gray-700 my-4">
              Com o MaxControl você tem acesso a formação de preço detalhada de
              seu produto final, associado com a formulação do produto (listagem
              das matérias primas envolvidas no processo de produção )
              disponibiza-se :
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Custos de matérias primas;</li>
              <li>Custos por equipamentos/processos;</li>
              <li>Outros custos;</li>
            </ul>
            <p className="text-gray-700 my-4">
              Definição do preço final de venda, com várias simulações de
              margens de lucro.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-left">
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
              Contas a Pagar
            </h2>
            <p className="text-gray-700 mb-4">
              Atuando de forma totalmente integrada aos módulos de Compras,
              Recebimento, Contas Correntes e Fluxo de Caixa oferece um conjunto
              de funcionalidades para total controle dos pagamentos e obrigações
              devidos pela empresa, administrando toda a carteira de títulos,
              recebendo automaticamente os movimentos gerados pelos demais
              eventos e demais módulos e agregando valor na gestão financeira da
              organização. Controle de todo o faturamento a pagar da empresa.
              Contém títulos gerados pelo faturamento do pedido de compra.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-left">
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
              Controle Bancário
            </h2>
            <p className="text-gray-700 mb-4">
              Controle completo da área financeira da empresa com gerenciamento
              de contas a pagar, contas a receber, fluxo de caixa e contas
              correntes, automatiza as operações e decisões do dia a dia
              provendo informações gerenciais para o processo de tomada de
              decisão. Integrado com os demais módulos do ERP Maxcontrol,
              proporciona o controle financeiro global da empresa, permitindo o
              fluxo de informações com rapidez e assertividade.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "qualidade",
    title: "Módulo de Desenvolvimento e Qualidade",
    icon: <FaTools className="text-3xl text-white mx-auto mb-2" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-left">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
            Ensaio de Produtos/Desenvolvimento
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              Módulo destinado ao desenvolvimento de novos produtos (ensaios);
            </li>
            <li>
              Identificação de composição de produto (formula de produtos);
            </li>
            <li>Apuração de custos de produção;</li>
            <li>Histórico dos testes;</li>
            <li>Em cada teste, gera sequência de testes;</li>
            <li>
              Após aprovação exporta dados de desenvolvimento (formulas e
              custos) para produto final;
            </li>
            <li>
              Vínculo com produto final, fácil localização do desenvolvimento
              anexado ao produto;
            </li>
            <li>
              Anexador de documentos (fotos, imagens, PDFs, Docs em geral);
            </li>
            <li>
              Vinculado ao modulo de cadastro de amostras (identificar e
              etiquetar amostras de clientes).
            </li>
          </ul>
        </div>
        <div
          key={module.id}
          className="bg-white p-6 rounded-lg shadow-lg text-left"
        >
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
              Controle de Qualidade
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Segue parâmetros e recursos ISO;</li>
              <li>
                Avaliação de fornecedores (certificação e pontuação de
                fornecedores) com parâmetros de liberar compras somente de
                fornecedores qualificados;
              </li>
              <li>
                Avaliação de Matéria-Prima (certificação e testes de
                matérias-primas) parâmetros de liberar compras somente de
                matérias-Primas avaliadas e certificadas;
              </li>
              <li>
                Reavaliação periódica de certificados e suspensão automática de
                certificados vencidos;
              </li>
              <li>
                Expedição com requisitos de recebimento. (Avaliação de
                recebimento, tais como: pontualidade, estado de embalagem entre
                outros);
              </li>
              <li>
                Avaliação de produção (baixa de ordem de produção com requisitos
                e qualificação de lotes);
              </li>
              <li>Emissão de laudos e certificados.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "gestao",
    title: "Módulo de Gestão e Administração",
    icon: <FaChartBar className="text-3xl text-white mx-auto mb-2" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-left">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
            Gestão de Contratos
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Lançamentos de Contratos;</li>
            <li>Aprovação;</li>
            <li>Controle de despesas;</li>
          </ul>
        </div>
        <div
          key={module.id}
          className="bg-white p-6 rounded-lg shadow-lg text-left"
        >
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
              Portaria/Visitantes
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Controle de visitantes;</li>
              <li>Agendamento de visitantes;</li>
              <li>Controle de entrada e saída de funcionários;</li>
              <li>
                Controle de entrada e saída de veículos (vinculado com Frota).
              </li>
            </ul>
          </div>
        </div>
        <div
          key={module.id}
          className="bg-white p-6 rounded-lg shadow-lg text-left"
        >
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">
              Frotas
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Controle de veículos;</li>
              <li>Controle de manutenção;</li>
              <li>Agendamento de manutenção fixado em quilometragem;</li>
              <li>
                Controle de abastecimentos (média de consumo, financeiro (conta
                a Pagar) por postos de combustível;
              </li>
              <li>
                Vinculado com modulo de Portaria apontamento de quilometragem,
                motoristas,entrada e saídas.
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

const ModulesPage = () => {
  const [activeModule, setActiveModule] = useState("vendas");

  const location = useLocation();
  const { target } = location.state || {};

  const handleModuleClick = (moduleId) => {
    if (activeModule !== moduleId) {
      setActiveModule(moduleId);
    }
  };

  useEffect(() => {
    if (target && modulesData.find((module) => module.id === target)) {
      setActiveModule(target);
      window.scrollTo(0, 0);
    }
  }, [target]);

  return (
    <>
      <Header />
      <div
        className="h-[400px] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${imagemModules})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-5"></div>
        <div className="relative z-10 text-center text-white px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Maxcontrol
          </h1>
          <p className="text-sm md:text-xl mb-6">
            Totalmente preparado para atender a sua empresa, seja ela de
            pequeno, médio ou grande porte. Relatórios gerenciais, gráficos
            dinâmicos e controle total da sua empresa.
          </p>
          <p className="text-sm md:text-xl mb-6 font-bold">
            Estamos preparados para atender Auditoria de Qualidade ISO.
          </p>
          <p className="text-sm md:text-xl mb-6">
            Maxcontrol é modulado, permitindo alterações para melhor atender as
            necessidades da sua empresa.
          </p>
        </div>
      </div>

      <div className="py-10 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mt-2 text-base text-gray-600 font-medium max-w-3xl mx-auto">
            Conheça os módulos desse sistema e suas aplicações:
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modulesData.map((module) => (
              <button
                key={module.id}
                onClick={() => handleModuleClick(module.id)}
                className={`p-4 rounded-lg border shadow-sm transition-all duration-300 ${
                  activeModule === module.id ? "bg-blue-500" : "bg-slate-900"
                } hover:shadow-md`}
              >
                {module.icon}
                <span className="text-lg font-semibold text-white">
                  {module.title}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-10">
            {modulesData.map(
              (module) =>
                activeModule === module.id && (
                  <div className="flex-1" key={module.id}>
                    {module.content}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-10">
        <p className="text-2xl font-semibold text-gray-700 mb-6">
          Entre em contato conosco:
        </p>
        <Link to="/contact">
          <button className="bg-blue-500 text-white py-3 px-10 rounded-full flex items-center justify-center space-x-3 hover:bg-green-400 transition-transform transform hover:scale-105 shadow-lg duration-300">
            <span className="text-lg">Nos contate</span>
            <FaArrowRight className="text-xl" />
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default ModulesPage;
