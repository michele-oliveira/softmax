import recebimento from "../../assets/images/manual/mov_fn_cr001.png";
import recebimento1 from "../../assets/images/manual/mov_fn_cr002.png";
import recebimento2 from "../../assets/images/manual/mov_fn_cr003.jpg";
import recebimento3 from "../../assets/images/manual/mov_fn_cr004.png";
import recebimento4 from "../../assets/images/manual/mov_fn_cr005.png";
import recebimento5 from "../../assets/images/manual/mov_fn_cr006.png";
import recebimento6 from "../../assets/images/manual/mov_fn_cr007.png";
import recebimento7 from "../../assets/images/manual/mov_fn_cr008.png";
import recebimento8 from "../../assets/images/manual/mov_fn_cr009.png";
import recebimento9 from "../../assets/images/manual/mov_fn_cr010.png";
import recebimento10 from "../../assets/images/manual/mov_fn_cr011.png";
import recebimento11 from "../../assets/images/manual/mov_fn_cr012.jpg";

function AccountsReceivable() {
  return (
    <div>
      <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
        <title>
          Procedimento para Treinamento no Uso de Software para Financeiro -
          Contas a Receber
        </title>
        <h1 className="my-10 text-xl sm:text-2xl font-bold text-slate-900">
          Procedimento para Treinamento no Uso de Software para Financeiro -
          Contas a Receber
        </h1>
        <h2 className="mt-4 text-base sm:text-2xl font-bold text-slate-900">
          1. Objetivo
        </h2>
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          Capacitar os colaboradores do setor financeiro no uso eficiente do
          software de Contas a Receber, garantindo a correta execução dos
          processos de recebimento de receitas, controle de clientes e cobrança,
          otimizando a gestão do fluxo de caixa da empresa.
        </p>
        <h2 className="mt-4 text-base sm:text-2xl font-bold text-slate-900">
          2. Público-Alvo
        </h2>
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          Colaboradores do setor financeiro, em especial os responsáveis pela
          gestão de recebíveis, faturamento e cobranças de clientes.
        </p>
        <h2 className="mt-4 text-base sm:text-2xl font-bold text-slate-900">
          3. Duração
        </h2>
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          O treinamento terá duração de 4 horas, dividido em uma parte teórica e
          outra prática, conforme descrito abaixo:
        </p>
        <h2 className="mt-4 text-base sm:text-2xl font-bold text-slate-900">
          4. Estrutura do Treinamento
        </h2>
        <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
          <h3 className="my-2 sm:text-base font-bold text-slate-900">
            4.1 Parte Teórica
          </h3>

          <ul className="list-disc list-inside text-base space-y-2">
            <p className="px-2">
              <strong>Introdução ao Software</strong>
            </p>
            <ul className="list-disc list-inside text-base space-y-2">
              <li>Apresentação da interface e principais módulos.</li>
              <li>
                Visão geral das funcionalidades: cadastro de clientes, emissão
                de títulos, controle de recebíveis, relatórios de inadimplência.
              </li>
            </ul>
            <p className="px-2">
              <strong>Configurações Iniciais</strong>
            </p>
            <ul className="list-disc list-inside text-base space-y-2">
              <li>Cadastro de clientes e condições comerciais.</li>
              <li>
                Integração com notas fiscais eletrônicas (quando aplicável).
              </li>
              <li>
                Definição de políticas de cobrança e prazos de recebimento.
              </li>
            </ul>
            <p className="px-2">
              <strong>Processo de Contas a Receber</strong>
            </p>
            <ul className="list-disc list-inside text-base space-y-2">
              <li>
                Definição de conceitos principais: emissão de faturas, controle
                de vencimentos, baixa de pagamentos e gestão de inadimplência.
              </li>
              <li>
                Métodos de recebimento: boletos, cartões, transferências e
                pagamentos recorrentes.
              </li>
            </ul>
          </ul>
        </div>
        <div className="flex flex-col items-start w-full max-w-3xl text-left pt-4">
          <h3 className="my-2 sm:text-base font-bold text-slate-900">
            4.2 Parte Prática
          </h3>

          <h4 className="mb-2 text-base font-bold">
            Etapa 1: Cadastro de Clientes e Emissão de Faturas
          </h4>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Exercício 1: Cadastrar um novo cliente no sistema</strong>
              <ul>
                <li>Nome, CNPJ/CPF, endereço e dados bancários.</li>
                <li>
                  Definição das condições comerciais (prazo, descontos, juros e
                  multas por atraso).
                </li>
              </ul>
            </li>
            <li>
              <strong>Exercício 2: Emitir uma fatura a receber</strong>
              <ul className="list-disc list-inside text-base space-y-2">
                <li>
                  Gerar uma fatura com base em uma venda ou serviço prestado.
                </li>
                <li>Configurar data de vencimento e método de pagamento.</li>
              </ul>
            </li>
          </ul>
          <h4 className="mb-2 text-base font-bold">
            Etapa 2: Controle de Recebimentos
          </h4>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Exercício 3: Registrar um pagamento recebido</strong>
              <ul className="list-disc list-inside text-base space-y-2">
                <li>Marcar a baixa de uma fatura paga.</li>
                <li>
                  Selecionar o método de pagamento utilizado e a data do
                  recebimento.
                </li>
              </ul>
            </li>
            <li>
              <strong>Exercício 4: Cancelar ou reemitir uma fatura</strong>
              <ul className="list-disc list-inside text-base space-y-2">
                <li>Processo para corrigir faturas emitidas incorretamente.</li>
                <li>Cancelamento de títulos a receber, quando necessário.</li>
              </ul>
            </li>
          </ul>
          <h4 className="mb-2 text-base font-bold">
            Etapa 3: Gestão de Inadimplência
          </h4>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Exercício 5: Gerenciar títulos em atraso</strong>
              <ul>
                <li>Consultar lista de faturas vencidas e em aberto.</li>
                <li>
                  Aplicar juros e multas de acordo com as políticas definidas no
                  cadastro.
                </li>
              </ul>
            </li>
            <li>
              <strong>Exercício 6: Emitir segunda via de boleto</strong>
              <ul className="list-disc list-inside text-base space-y-2">
                <li>
                  Processo de reemissão de boleto para clientes inadimplentes.
                </li>
              </ul>
            </li>
            <li>
              <strong>Exercício 7: Realizar cobrança automatizada</strong>
              <ul>
                <li>
                  Configurar o envio de e-mails de cobrança automáticos para
                  clientes inadimplentes.
                </li>
              </ul>
            </li>
          </ul>
          <h4 className="mb-2 text-base font-bold">
            Etapa 4: Relatórios e Análises
          </h4>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Exercício 8: Gerar relatórios financeiros</strong>
              <ul>
                <li>Relatório de recebimentos previstos.</li>
                <li>
                  Relatório de inadimplência por cliente, por data ou por valor.
                </li>
              </ul>
            </li>
            <li>
              <strong>Exercício 9: Exportação de dados</strong>
              <ul className="list-disc list-inside text-base space-y-2">
                <li>
                  Exportar relatórios em formatos como Excel ou PDF para
                  análises futuras.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <h2 className="mt-4 text-base sm:text-2xl font-bold text-slate-900">
          5. Recursos Necessários
        </h2>
        <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              Computador para cada participante com o software devidamente
              instalado.
            </li>
          </ul>
        </div>
        <h2 className="mt-4 text-base sm:text-2xl font-bold text-slate-900">
          6. Avaliação
        </h2>
        <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
          <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
            Ao final do treinamento, os participantes passarão por uma avaliação
            prática, para garantir a compreensão dos processos e
            funcionalidades. Serão avaliados nos seguintes critérios:
          </p>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>Correção no cadastro de clientes e emissão de faturas.</li>
            <li>
              Eficiência no registro de recebimentos e gestão de inadimplência.
            </li>
            <li>Capacidade de gerar relatórios financeiros detalhados.</li>
          </ul>
        </div>
        <h2 className="mt-4 text-base sm:text-2xl font-bold text-slate-900">
          7. Conclusão
        </h2>
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          Este treinamento tem como objetivo otimizar o processo de contas a
          receber, capacitando os colaboradores a operarem o software com
          precisão. Ao dominar o controle dos recebíveis, os colaboradores
          poderão contribuir diretamente para a melhoria do fluxo de caixa e
          para a redução de inadimplências na empresa, garantindo a saúde
          financeira do negócio.
        </p>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={recebimento}
          alt="Contas a pagar"
        />
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={recebimento1}
          alt="Contas a pagar"
        />
        <h2 className="mt-4 text-base sm:text-2xl font-bold text-slate-900">
          Início do Treinamento - Módulo Contas a Receber
        </h2>
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          <strong>Imagem 1</strong> - tela de lançamento do financeiro a Receber
        </p>
        <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
          <p className="my-4 text-base sm:text-base lg:max-w-4xl">
            Atuando de forma totalmente integrada aos módulos de Vendas,
            Faturamento e Distribuição (NFE), Contas Correntes e Fluxo de Caixa,
            oferece um conjunto de funcionalidades para total controle dos
            recebíveis da empresa, administrando toda a carteira de títulos,
            recebendo automaticamente os movimentos gerados pelos demais eventos
            e demais módulos e agregando valor na gestão financeira da
            organização.
          </p>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>1. Controle de todo o faturamento a receber da empresa;</li>
            <li>
              2. Controle de títulos gerados pelo faturamento de nota fiscal;
            </li>
            <li>3. Controle das contas a receber;</li>
            <li>4. Consulta aos recebíveis em várias formas;</li>
            <li>5. Controle de cheques recebidos;</li>
            <li>6. Controle de contas correntes (internas / bancárias);</li>
            <li>7. Contas correntes monitoradas;</li>
            <li>8. Fluxo de caixa (Analítico e sintético);</li>
            <li>9. Boletos Bancários;</li>
            <li>10. Duplicatas;</li>
            <li>11. Remessa (cobrança eletrônica) – CNAB;</li>
            <li>12. Comissão de vendedores (Monitoramento);</li>
            <li>13. Relatórios gerenciais e analíticos;</li>
            <li>14. Integração com outros módulos.</li>
          </ul>
        </div>
        <h3 className="my-6 sm:text-base font-bold text-slate-900">
          Arquivos de Remessa (CNAB)
        </h3>
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          Envio de títulos ao banco para cobrança eletrônica, com funções de
          geração de arquivo, leitura de retorno com confirmação e leitura de
          retorno com baixa de títulos.
        </p>
        <h4 className="my-4 text-base font-bold">Lançamentos de Cheques</h4>
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          Cadastros dos cheques recebidos, com opções de relatórios, baixa de
          cheque, depósito, devolução e reapresentação.
        </p>
        <h3 className="my-6 sm:text-base font-bold text-slate-900">
          Principais Botões e Funções
        </h3>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={recebimento2}
          alt="Contas a pagar"
        />
        <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
          <ol className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Botão Incluir</strong> - Criar novo lançamento
            </li>
            <li>
              <strong>Botão Alterar</strong> - Alterar / Editar um lançamento
              salvo
            </li>
            <li>
              <strong>Botão Cancelar / Excluir</strong> - Botão multi-opções,
              remove baixa de título, cancela lançamento, exclui lançamento
            </li>
            <li>
              <strong>Botão Salvar</strong> - Salvar / Gravar lançamento
            </li>
            <li>
              <strong>Botão Cancelar / Abortar</strong> - Cancela a operação
              vigente, ignora alterações e retorna ao estado anterior
            </li>
            <li>
              <strong>Botões de navegação</strong>
            </li>
            <li>
              <strong>Botão de Consulta</strong> - Mesmo link do F10 do menu
              principal
            </li>
            <li>
              <strong>Botão de Cadastros</strong> - Acesso rápido aos cadastros
              de Entidades (clientes, fornecedores, transportadora, Diversos)
            </li>
            <li>
              <strong>Botão CNAB Remessa</strong> - Gera arquivo de remessa
              CNAB, registro de títulos / boletos bancários
            </li>
            <li>
              <strong>Botão de Leitura de CNAB Remessa</strong> - Lê arquivo
              gerado pelo banco com baixas e movimentações dos títulos.
            </li>
            <li>
              <strong>Botão de Boleto</strong> - Emite boleto
            </li>
            <li>
              <strong>Botão de Duplicada</strong> - Emite Duplicada
            </li>
            <li>
              <strong>Botão de Cad. De Bancos e contas</strong>
            </li>
            <li>
              <strong>Botão de lançamento de movimento avulso</strong>
            </li>
            <li>
              <strong>Botão de Controle Bancário</strong>
            </li>
            <li>
              <strong>Botão de cadastro de cheques</strong>
            </li>
            <li>
              <strong>Botão de Cadastro de Centro de custo</strong> - Módulo que
              indica níveis / tipo de despesas
            </li>
            <li>
              <strong>Botão de cadastro de Tipos de recebimento</strong>
            </li>
            <li>
              <strong>Botão de Junção de Títulos</strong> - Agrupa títulos de um
              mesmo cliente
            </li>
            <li>
              <strong>Validação de dados de Boleto</strong>
            </li>
          </ol>
        </div>
        <h3 className="my-6 sm:text-base font-bold text-slate-900">
          Incluindo um título contas a receber avulso
        </h3>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={recebimento3}
          alt="Contas a pagar"
        />
        <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
          <ol className="list-disc list-inside text-base space-y-2">
            <li>Informar Número da Nota e pedido</li>
            <li>Informar cliente</li>
            <li>Informar tipo de lançamento</li>
            <li>Informar valor</li>
            <li>Informar vencimento</li>
          </ol>
        </div>
        <h3 className="my-6 sm:text-base font-bold text-slate-900">
          Baixa de títulos do contas a receber
        </h3>
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          A baixa por liquidez ou pagamento pode ser feita de 3 formas:
        </p>
        <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
          <ol className="list-disc list-inside text-base space-y-2">
            <li>Baixa individual direto na tela do título a receber</li>
            <li>Baixa em lote na tela de consulta do contas a receber (F10)</li>
            <li>Baixa pelo módulo de CNAB leitura de arquivo retorno</li>
          </ol>
        </div>
        <h4 className="mb-2 text-base font-bold">
          Baixa individual direto na tela do título a receber
        </h4>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={recebimento4}
          alt="Contas a pagar"
        />
        <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
          <p className="my-4 text-base sm:text-base lg:max-w-4xl">
            Localize o título a ser baixado e clique em editar/alterar:
          </p>
          <ol className="list-disc list-inside text-base space-y-2">
            <li>Informar o tipo de cobrança</li>
            <li>
              Informe a conta para o recebimento (caixa interno, carteira de
              cheques ou contas bancárias)
            </li>
            <li>
              Informe o tipo de recebimento (dinheiro, cheque, online, boleto,
              etc.)
            </li>
            <li>Informe a data de pagamento</li>
            <li>Clique em salvar</li>
          </ol>
        </div>
        <h4 className="mb-2 text-base font-bold">
          Baixa em lote na tela de consulta do contas a receber (F10)
        </h4>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={recebimento5}
          alt="Contas a pagar"
        />
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={recebimento6}
          alt="Contas a pagar"
        />
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={recebimento7}
          alt="Contas a pagar"
        />
        <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
          <ol className="list-disc list-inside text-base space-y-2">
            <li>Aplique o filtro necessário e clique em baixar</li>
            <li>Selecione os títulos que deseja fazer a baixa</li>
            <li>Informe a conta para recebimento</li>
            <li>Informar o tipo de recebimento</li>
            <li>Informar observação para baixa (opcional)</li>
            <li>Informar data do recebimento</li>
            <li>Clicar em baixar para concluir a operação</li>
          </ol>
        </div>
        <h4 className="mb-2 text-base font-bold">
          Baixa pelo módulo de CNAB leitura de arquivo retorno
        </h4>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={recebimento7}
          alt="Contas a pagar"
        />
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={recebimento8}
          alt="Contas a pagar"
        />
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          Acesse módulo de leitura de retorno (Remessa CNAB). No módulo de
          leitura, clique em "Ler Remessa" e localize o arquivo de retorno
          baixado.
        </p>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={recebimento9}
          alt="Contas a pagar"
        />
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          Ao selecionar o arquivo, o sistema faz a verificação e validação dos
          títulos. Clique em processar para confirmar a operação.
        </p>
        <h3 className="my-6 sm:text-base font-bold text-slate-900">
          Consulta de contas a Receber / Relatórios
        </h3>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={recebimento10}
          alt="Contas a pagar"
        />
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          Na tela de consulta de contas a receber é possível visualizar de forma
          rápida os títulos lançados. Com vários campos de filtro, torna o
          processo de localizar títulos mais eficaz. Com um duplo clique pode-se
          abrir o título com mais detalhes (tela do contas a receber).
        </p>
        <h3 className="my-6 sm:text-base font-bold text-slate-900">
          Definição de Controle Bancário
        </h3>
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          Controle bancário é o conjunto de práticas, processos e ferramentas
          utilizados por uma empresa para monitorar, gerenciar e conciliar todas
          as transações financeiras realizadas através de contas bancárias. O
          objetivo principal é assegurar a precisão dos registros financeiros,
          garantir a disponibilidade de recursos, evitar fraudes e facilitar a
          tomada de decisões informadas.
        </p>
        <h4 className="my-6 text-base font-bold">
          Principais Componentes do Controle Bancário
        </h4>
        <div className="flex flex-col items-start w-full max-w-3xl text-left pb-6">
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Conciliação Bancária:</strong> Processo de comparação
              entre os registros internos da empresa e os extratos fornecidos
              pelo banco, identificando e corrigindo discrepâncias.
            </li>
            <li>
              <strong>Gestão de Fluxo de Caixa:</strong> Monitoramento das
              entradas e saídas de dinheiro para assegurar que a empresa possui
              liquidez suficiente para cumprir suas obrigações financeiras.
            </li>
            <li>
              <strong>Contas a Pagar e Receber:</strong> Controle rigoroso sobre
              os valores que a empresa deve a fornecedores e os montantes a
              receber de clientes.
            </li>
            <li>
              <strong>Análise de Saldo:</strong> Verificação regular dos saldos
              das contas bancárias para planejamento financeiro e investimento.
            </li>
            <li>
              <strong>Segurança Financeira:</strong> Implementação de medidas
              para proteger os ativos financeiros, incluindo controles de acesso
              e autenticação em sistemas bancários.
            </li>
          </ul>
          <h4 className="mb-2 text-base font-bold">
            Importância do Controle Bancário
          </h4>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Precisão Financeira:</strong> Evita erros nos registros
              contábeis, garantindo que as demonstrações financeiras reflitam a
              realidade.
            </li>
            <li>
              <strong>Prevenção de Fraudes:</strong> Reduz o risco de atividades
              fraudulentas através de monitoramento constante e auditorias
              internas.
            </li>
            <li>
              <strong>Decisões Estratégicas:</strong> Fornece informações
              confiáveis que auxiliam na elaboração de estratégias financeiras e
              operacionais.
            </li>
            <li>
              <strong>Compliance:</strong> Assegura o cumprimento das
              regulamentações fiscais e legais, evitando penalidades e sanções.
            </li>
            <li>
              <strong>Otimização de Recursos:</strong> Permite identificar
              oportunidades de economia e investimento ao analisar padrões de
              gastos e receitas.
            </li>
          </ul>
        </div>
        <h4 className="mb-2 text-base font-bold">
          Ferramentas Utilizadas no Controle Bancário
        </h4>
        <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Sistemas ERP (Enterprise Resource Planning):</strong>{" "}
              Softwares integrados que facilitam o gerenciamento financeiro e a
              automação de processos bancários.
            </li>
            <li>
              <strong>Aplicativos Bancários Online:</strong> Plataformas
              digitais fornecidas pelos bancos para acesso e gestão das contas
              em tempo real.
            </li>
            <li>
              <strong>Planilhas e Software de Contabilidade:</strong> Utilizados
              para registrar e acompanhar manualmente as transações financeiras.
            </li>
            <li>
              <strong>Integração CNAB:</strong> Utilização do padrão CNAB para
              troca eletrônica de informações entre empresas e bancos,
              agilizando processos como pagamentos e recebimentos.
            </li>
          </ul>
        </div>
        <h4 className="mb-2 text-base font-bold">
          Boas Práticas no Controle Bancário
        </h4>
        <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Atualizações Diárias:</strong> Manter registros
              atualizados diariamente para evitar acumulação de trabalho e
              possíveis erros.
            </li>
            <li>
              <strong>Segregação de Funções:</strong> Distribuir
              responsabilidades entre diferentes colaboradores para aumentar a
              segurança e reduzir riscos.
            </li>
            <li>
              <strong>Auditorias Regulares:</strong> Realizar verificações
              periódicas para assegurar a integridade dos processos financeiros.
            </li>
            <li>
              <strong>Educação Financeira:</strong> Investir no treinamento da
              equipe para garantir que todos estejam alinhados com as melhores
              práticas de gestão financeira.
            </li>
          </ul>
        </div>
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          <strong>Figura 1</strong> - Módulo de Controle bancário
        </p>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={recebimento11}
          alt="Contas a pagar"
        />
      </div>
    </div>
  );
}

export default AccountsReceivable;
