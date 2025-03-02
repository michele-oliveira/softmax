import order from "../../assets/images/manual/mov_ped_venda.png";
import order1 from "../../assets/images/manual/mov_ped_venda_menu.jpg";
import order2 from "../../assets/images/manual/mov_ped_venda_menuitens.png";
import order3 from "../../assets/images/manual/mov_ped_venda_aprovfinan.png";
import order5 from "../../assets/images/manual/mov_ped_venda_Consul.png";

function OrderSales() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Movimentos - Pedido de venda
      </h1>
      <p className="mt-10 text-base lg:max-w-4xl">
        Apoio à operação comercial de venda da empresa, permitindo controlar o
        planejamento de metas de venda, a administração de orçamentos e pedidos
        de venda, bem como a integração automática com estoques, viabilizando o
        controle de reservas e encomendas, contas a receber, fiscal e contábil,
        e análise e controle de créditos, descontos concedidos e controle de
        número de série.
      </p>
      <img
        className="w-full max-w-3xl object-contain pt-6"
        src={order}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-disc list-inside text-base space-y-2">
          <li>
            Controle de pedidos (vendas externas, balcão e telemarketing);
          </li>
          <li>Cronograma de entregas;</li>
          <li>Consulta ao faturamento e posição de clientes;</li>
          <li>Histórico dos testes;</li>
          <li>Em cada teste, gera sequência de testes;</li>
          <li>Emissão de orçamentos;</li>
          <li>Acesso a cadastro de produtos e estoques;</li>
          <li>Emissão de ordens de produção;</li>
          <li>Vários relatórios;</li>
        </ul>
      </div>
      <img
        className="w-full max-w-3xl object-contain"
        src={order1}
        alt="Desenvolvimento de Produtos e Ensaios"
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
            <strong>Botão de pré-visualização/impressão </strong> - impressão do
            pedido;
          </li>
          <li>
            <strong>Botão de emissão de nota Fiscal;</strong>
          </li>
          <li>
            <strong>Botão de réplica de pedido;</strong>
          </li>
          <li>
            <strong>Botão de visualizar pedidos do cliente;</strong>
          </li>
          <li>
            <strong>Botão de pré-visualização/impressão</strong>- Impressão do
            pedido;
          </li>
          <li>
            <strong>Botão de emissão de Certificado;</strong>
          </li>
          <li>
            <strong>Botão de abrir cadastro do cliente;</strong>
          </li>
          <li>
            <strong>Botão de abrir cadastro do produto;</strong>
          </li>
          <li>
            <strong>Botão de Consulta de pedidos de vendas;</strong>
          </li>
          <li>
            <strong>Botão de Romaneio / Liberação de produtos;</strong>
          </li>
          <li>
            <strong>Botão de Romaneio / Liberação de produtos;</strong>
          </li>
          <li>
            <strong>Botão de Junção - </strong> Juntar pedidos em um único
            pedido;
          </li>
          <li>
            <strong>Botão de ficha de separação - </strong> Impressão de ficha,
            etiquetas;
          </li>
          <li>
            <strong>Botão de Relatório;</strong>
          </li>
          <li>
            <strong>
              Botão de Emissão de Nota fiscal de Devolução de venda;
            </strong>
          </li>
          <li>
            <strong>Botão de gerenciador de arquivos;</strong>
          </li>
          <li>
            <strong>Botão de Consulta CFOP / NCM;</strong>
          </li>
        </ol>
      </div>
      <h2 className="mt-10 text-lg lg:max-w-4xl font-bold">
        O que é um Pedido de Venda/Orçamento?
      </h2>
      <p className="mt-10 text-base lg:max-w-4xl">
        O Orçamento e o Pedido de Venda são peças fundamentais para o
        faturamento da empresa. Através deles é possível prever a venda e
        demanda de produtos. O Orçamento consiste no documento de abertura da
        venda e que expressa as necessidades do cliente em produtos e serviços.
      </p>
      <p className="mt-10 text-base lg:max-w-4xl">
        O <strong>Pedido de Venda </strong>consiste na confirmação do processo
        de venda aberto por um Orçamento ou por pedidos gerados diretamente na
        rotina, ou pelo módulo de acolhimento/ beneficiamento. Geralmente, as
        empresas tratam os pedidos de venda de forma muito rigorosa, em detalhes
        minuciosos, pois, caso contrário, o pedido corre o risco de não ser
        faturado, gerando transtornos à empresa.
      </p>
      <p className="mt-10 text-base lg:max-w-4xl">
        Quando há a necessidade de formalização das necessidades do cliente em
        relação ao que a sua empresa pode oferecer, o pedido de vendas é o
        principal instrumento de efetivação desse atendimento.
      </p>
      <p className="mt-10 text-base lg:max-w-4xl italic">
        Garanta o registro de todas as fases da venda realizada.
      </p>
      <h2 className="mt-10 text-lg lg:max-w-4xl font-bold">
        Principais Funcionalidades
      </h2>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <strong>Propostas Comerciais:</strong> Ferramenta para criar e
            gerenciar propostas de vendas personalizadas, incluindo preços,
            termos e condições, para potenciais clientes.
          </li>
          <li>
            <strong>Cadastro de Produtos:</strong> Módulo para inserir e manter
            informações detalhadas sobre os produtos ou serviços oferecidos,
            como descrições, preços e imagens.
          </li>
          <li>
            <strong>Gestão de Clientes: </strong> Sistema para armazenar e
            organizar dados dos clientes, incluindo informações de contato,
            histórico de compras e preferências.
          </li>
          <li>
            <strong>Análise de Crédito / Carteira de Crédito: </strong>Módulo
            que avalia o risco de crédito dos clientes antes de aprovar uma
            venda, levando em conta o histórico de pagamentos, limite de crédito
            e situação financeira. Também gerencia a carteira de crédito da
            empresa, acompanhando saldos devedores e vencimentos.
          </li>
          <li>
            <strong>Análise Crítica:</strong> Processo que envolve a avaliação
            detalhada dos pedidos de venda para garantir que estejam de acordo
            com as políticas da empresa, verificando a disponibilidade de
            estoque, condições de pagamento, descontos aplicados e demais
            aspectos críticos para aprovação final do pedido.
          </li>
          <li>
            <strong>Emissão de Pedidos de Venda:</strong> Processo para gerar e
            processar pedidos de clientes, desde a seleção de produtos até a
            confirmação do pedido.
          </li>
          <li>
            <strong>Processamento de Recebimento/Emissão de Boletos: </strong>{" "}
            Ferramenta para emitir boletos bancários e gerenciar o recebimento
            de pagamentos de forma automatizada.
          </li>
          <li>
            <strong>Emissão de Notas Fiscais:</strong>Sistema que permite a
            geração de notas fiscais eletrônicas, atendendo às exigências legais
            e fiscais.
          </li>
          <li>
            <strong>Emissão de notas fiscais triangular:</strong> Processo
            específico para operações de venda em que há três partes envolvidas:
            o vendedor (fornecedor), o destinatário (cliente final) e um
            terceiro que faz a intermediação (transportadora ou distribuidor). A
            emissão de notas fiscais triangular é utilizada para registrar
            corretamente a movimentação dos produtos, de modo que o fornecedor
            envie diretamente ao cliente final, mas o faturamento seja realizado
            para o intermediário, cumprindo todas as obrigações fiscais dessa
            operação.
          </li>
          <li>
            <strong>Listas de Preços:</strong> Possibilidade de criar múltiplas
            tabelas de preços para diferentes clientes, regiões ou campanhas
            promocionais.
          </li>
          <li>
            <strong>Gestão de Estoque: </strong>Monitoramento em tempo real dos
            níveis de estoque, com alertas para reposição e controle de entradas
            e saídas de produtos.
          </li>
          <li>
            <strong>Relatórios de Vendas:</strong>Geração de relatórios
            detalhados que auxiliam na análise de desempenho de vendas por
            período, produto, vendedor, entre outros.
          </li>
          <li>
            <strong>Gestão de Vendedores e Comissões: </strong>Controle sobre a
            equipe de vendas, incluindo o cálculo automático de comissões
            baseadas nas vendas realizadas.
          </li>
          <li>
            <strong>Configuração de Promoções e Descontos:</strong>Ferramenta
            para criar e aplicar promoções especiais, cupons e descontos em
            produtos ou serviços.
          </li>
          <li>
            <strong>Histórico de Vendas:</strong> Registro completo de todas as
            transações de venda realizadas, permitindo consultas e análises
            futuras.
          </li>
          <li>
            <strong>Devoluções e Reembolsos:</strong> Módulo para gerenciar
            processos de devolução de produtos e emissão de reembolsos aos
            clientes.
          </li>
          <li>
            <strong>Configuração de Preços: </strong> Ajuste e gerenciamento dos
            preços dos produtos, incluindo políticas de preços diferenciadas por
            cliente ou volume de compra.
          </li>
          <li>
            <strong>Gestão de Cotas de Vendas: </strong> Definição e
            acompanhamento de metas de vendas para a equipe ou individualmente,
            facilitando a avaliação de desempenho.
          </li>
          <li>
            <strong>Análise de Performance de Vendas: </strong>Ferramentas
            analíticas que permitem avaliar o desempenho das vendas e
            identificar tendências ou oportunidades.
          </li>
          <li>
            <strong>Automação de Processos de Vendas:</strong>Implementação de
            fluxos de trabalho automatizados para agilizar tarefas repetitivas e
            aumentar a eficiência.
          </li>
          <li>
            <strong>Integração com CRM: </strong> Conexão com sistemas de gestão
            de relacionamento com o cliente para sincronizar dados e melhorar a
            comunicação.
          </li>
          <li>
            <strong>Gestão de Contratos de Venda: </strong> Armazenamento e
            gerenciamento de contratos estabelecidos com clientes, incluindo
            termos, renovações e compliance.
          </li>
          <li>
            <strong>Catálogo de Produtos:</strong>Apresentação organizada dos
            produtos ou serviços disponíveis, com detalhes que facilitam a
            seleção pelo cliente.
          </li>
          <li>
            <strong>Gestão de Impostos: </strong> Cálculo automático e aplicação
            dos impostos pertinentes em cada transação, conforme as legislações
            vigentes.
          </li>
          <li>
            <strong>
              Provisionamento de Produção, Indicação de Necessidade de
              Produção/Compra:{" "}
            </strong>{" "}
            Sistema que identifica a necessidade de produzir ou adquirir mais
            produtos com base nas vendas e no estoque atual.
          </li>
          <li>
            <strong>
              Indicação de Itens para Produção (Explosão de Vendas):{" "}
            </strong>
            Funcionalidade que detalha os componentes necessários para atender
            às vendas realizadas, auxiliando no planejamento de produção.
          </li>
        </ol>
      </div>
      <p className="mt-6 text-base lg:max-w-4xl italic">
        Descubra oportunidades de negócios com seus clientes.
      </p>
      <h2 className="mt-10 text-lg lg:max-w-4xl font-bold">
        Detalhes de Menu por Item (Produto)
      </h2>
      <img
        className="w-full max-w-3xl object-contain"
        src={order2}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
      <p className="my-6 text-base lg:max-w-4xl">
        <strong>Detalhes de Aprovação Financeira:</strong> Permite verificar
        limite de crédito, possíveis restrições, descontos e condições de
        pagamento de cada cliente antes de aprovar efetivamente o pedido de
        venda.
      </p>
      <img
        className="w-full max-w-3xl object-contain"
        src={order3}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
      <h2 className="mt-10 text-lg lg:max-w-4xl font-bold">
        Consultas e Relatórios de Pedido de Vendas (F7)
      </h2>
      <img
        className="w-full max-w-3xl object-contain"
        src={order5}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
      <p className="my-6 text-base lg:max-w-4xl">
        Ferramenta que permite visualizar e gerar relatórios detalhados sobre os
        pedidos de venda realizados. Essa funcionalidade oferece uma visão
        completa do status dos pedidos, incluindo informações como data de
        criação, cliente, produtos solicitados, valores, condições de pagamento
        e situação atual (concluído, pendente, em processamento).
      </p>
      <p className="my-6 text-base lg:max-w-4xl">
        Os relatórios gerados facilitam o acompanhamento das vendas, a análise
        de desempenho e a tomada de decisões estratégicas, proporcionando uma
        visão clara da operação comercial.
      </p>
    </div>
  );
}

export default OrderSales;
