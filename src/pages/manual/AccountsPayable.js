import pagamento from "../../assets/images/manual/mov_fn_cp001.png";
import pagamento1 from "../../assets/images/manual/mov_fn_cp003.png";
import pagamento2 from "../../assets/images/manual/mov_fn_cp005.png";
import pagamento3 from "../../assets/images/manual/mov_fn_cp008.png";
import pagamento4 from "../../assets/images/manual/mov_fn_cp010.png";
import pagamento5 from "../../assets/images/manual/mov_fn_cp011.png";
import pagamento6 from "../../assets/images/manual/mov_fn_cp012.png";
import pagamento7 from "../../assets/images/manual/mov_fn_cp013.png";
import pagamento8 from "../../assets/images/manual/mov_FN_CP_Consul.png";

function AccountsPayable() {
  return (
    <div>
      <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
        <h1 className="my-10 text-xl sm:text-2xl font-bold text-slate-900">
          Procedimento para Treinamento no Uso de Software para Financeiro -
          Contas a Pagar
        </h1>
        <h2 className="mt-4 text-base sm:text-2xl font-bold text-slate-900">
          1. Objetivo
        </h2>
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          Este treinamento tem como finalidade capacitar os colaboradores do
          setor financeiro no uso eficiente do software de Contas a Pagar,
          garantindo a correta execução dos processos financeiros e o controle
          adequado dos pagamentos a fornecedores e demais obrigações financeiras
          da empresa.
        </p>
        <h2 className="mt-4 text-base sm:text-2xl font-bold text-slate-900">
          2. Público-Alvo
        </h2>
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          Colaboradores do setor financeiro, em especial os responsáveis pelo
          controle de pagamentos e gestão de fornecedores.
        </p>
        <h2 className="mt-4 text-base sm:text-2xl font-bold text-slate-900">
          3. Duração
        </h2>
        <p className="mt-4 text-base sm:text-base lg:max-w-4xl">
          O treinamento terá duração de 4 horas, dividido em uma parte teórica e
          outra prática, conforme descrito abaixo:
        </p>
        <h2 className="mt-6 text-base sm:text-2xl font-bold text-slate-900">
          4. Estrutura do Treinamento
        </h2>
        <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
          <h3 className="my-6 sm:text-base font-bold text-slate-900">
            4.1 Parte Teórica
          </h3>
          <ul className="list-disc list-inside text-base space-y-2">
            <p className="px-2">
              <strong>Introdução ao Software</strong>
            </p>
            <ul className="list-disc list-inside text-base space-y-2">
              <li>Apresentação da interface do software.</li>
              <li>Visão geral das principais funcionalidades e módulos.</li>
            </ul>

            <p className="px-2">
              <strong>Configurações Iniciais</strong>
            </p>
            <ul className="list-disc list-inside text-base space-y-2">
              <li>Cadastro de fornecedores.</li>
              <li>Cadastro de contas bancárias da empresa.</li>
              <li>Definição de parâmetros e políticas de pagamento.</li>
            </ul>

            <p className="px-2">
              <strong>Processo de Contas a Pagar</strong>
            </p>
            <ul className="list-disc list-inside text-base space-y-2">
              <li>
                Descrição dos principais conceitos: lançamento de títulos,
                programação de pagamentos, conciliação bancária.
              </li>
              <li>
                Definição de prazos e formas de pagamento (boleto,
                transferência, TED/DOC).
              </li>
            </ul>
          </ul>
          <h3 className="my-6 sm:text-base font-bold text-slate-900">
            4.2 Parte Prática
          </h3>
          <h4 className="mb-2 text-base font-bold">
            Etapa 1: Cadastro de Fornecedores e Títulos
          </h4>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Cadastrar um novo fornecedor no sistema.</strong>
              <ul className="py-2 px-4 list-disc list-inside text-base space-y-2">
                <li>Nome, CNPJ, e dados bancários.</li>
                <li>Condições de pagamento e histórico financeiro.</li>
              </ul>
            </li>
            <li>
              <strong>Lançar um título a pagar.</strong>
              <ul className="py-2 px-4 list-disc list-inside text-base space-y-2">
                <li>Lançamento de uma nota fiscal recebida.</li>
                <li>Definição de data de vencimento e forma de pagamento.</li>
              </ul>
            </li>
          </ul>
          <h4 className="my-4 text-base font-bold">
            Etapa 2: Programação de Pagamentos
          </h4>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Programar um pagamento.</strong>
              <ul className="py-2 px-4 list-disc list-inside text-base space-y-2">
                <li>Selecionar o título a vencer.</li>
                <li>
                  Programar o pagamento automático via transferência bancária.
                </li>
              </ul>
            </li>
            <li>
              <strong>Alterar a programação de pagamento.</strong>
              <ul className="py-2 px-4 list-disc list-inside text-base space-y-2">
                <li>Alteração de datas ou valores de um título.</li>
              </ul>
            </li>
          </ul>
          <h4 className="my-4 text-base font-bold">
            Etapa 3: Conciliação Bancária
          </h4>
          <ul>
            <li>
              <strong>Realizar a conciliação bancária.</strong>
              <ul className="py-2 px-4 list-disc list-inside text-base space-y-2">
                <li>Importar o extrato bancário no sistema.</li>
                <li>Confrontar as transações e identificar discrepâncias.</li>
              </ul>
            </li>
          </ul>
          <h4 className="my-4 text-base font-bold">
            Etapa 4: Relatórios e Auditoria
          </h4>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Emitir relatórios de contas a pagar.</strong>
              <ul className="py-2 px-4 list-disc list-inside text-base space-y-2">
                <li>
                  Gerar relatórios por fornecedor, por data de vencimento ou por
                  categoria.
                </li>
              </ul>
            </li>
            <li>
              <strong>Auditoria de Pagamentos.</strong>
              <ul className=" py-2 px-4 list-disc list-inside text-base space-y-2">
                <li>Verificar pagamentos realizados e títulos em aberto.</li>
                <li>Auditoria de processos financeiros no sistema.</li>
              </ul>
            </li>
          </ul>
        </div>
        <h2 className="mt-6 text-base sm:text-2xl font-bold text-slate-900">
          5. Recursos Necessários
        </h2>
        <div className="flex flex-col items-start w-full max-w-3xl text-left">
          <ul className="py-6 list-disc list-inside text-base space-y-2 ">
            <li>
              Computador para cada participante com o software devidamente
              instalado.
            </li>
          </ul>
        </div>
        <h2 className="mt-6 text-base sm:text-2xl font-bold text-slate-900">
          6. Avaliação
        </h2>
        <p className="my-6 text-base sm:text-base lg:max-w-4xl">
          Ao final do treinamento, os colaboradores passarão por uma breve
          avaliação prática para garantir a correta absorção dos conceitos e
          funcionalidades abordados. Serão avaliados nos seguintes critérios:
        </p>
        <div className="flex flex-col items-start w-full max-w-3xl text-left">
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              Correção no cadastro de fornecedores e lançamento de títulos.
            </li>
            <li>Programação de pagamentos correta.</li>
            <li>Habilidade em realizar a conciliação bancária.</li>
          </ul>
        </div>
        <h2 className="mt-6 text-base sm:text-2xl font-bold text-slate-900">
          7. Conclusão
        </h2>
        <p className="mt-10 text-base sm:text-base lg:max-w-4xl">
          Este treinamento tem como objetivo otimizar o processo de contas a
          pagar, garantindo que os colaboradores estejam capacitados para operar
          o software com precisão, evitando erros que possam impactar o fluxo de
          caixa da empresa.
        </p>
        <h2 className="mt-6 text-base sm:text-2xl font-bold text-slate-900">
          Início do Treinamento - Módulo Contas a Pagar
        </h2>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={pagamento}
          alt="Contas a pagar"
        />
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={pagamento1}
          alt="Contas a pagar"
        />
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={pagamento2}
          alt="Contas a pagar"
        />
        <div className="flex flex-col items-start w-full max-w-3xl text-left">
          <ol className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Botão Incluir</strong> - Criar novo lançamento
            </li>
            <li>
              <strong>Botão Alterar</strong> - Alterar / Editar um lançamento
              salvo
            </li>
            <li>
              <strong>Botão Cancelar / Excluir</strong> - Botão multiopções,
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
              <strong>Botão de Consulta</strong> - Mesmo link do F11 do menu
              principal
            </li>
            <li>
              <strong>Botão de Cadastros</strong> - Acesso rápido aos cadastros
              de Entidades (clientes / fornecedores / transportadora / Diversos)
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
              <strong>Botão de Gerenciamento de arquivos</strong>
            </li>
          </ol>

          <p className="my-6 text-base sm:text-base lg:max-w-4xl">
            O contas a pagar pode ser lançado de dois modos:
          </p>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>Módulo de Contas a pagar</li>
            <li>Módulo Pagar avulso</li>
          </ul>
          <p className="my-6 text-base sm:text-base lg:max-w-4xl">
            O módulo de contas a pagar, é um módulo completo, com todas as
            informações de operação financeira, como conciliação e relatórios. E
            pode ser gerado:
          </p>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>Derivado do pedido de compra (Automaticamente)</li>
            <li>
              Gerado manualmente (água, luz, internet, despesas fixas, etc.)
            </li>
          </ul>
        </div>
        <h3 className="mt-6 text-sm sm:text-2xl font-bold text-slate-900">
          Processo de lançamento Manual de um título de contas a pagar
        </h3>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={pagamento3}
          alt="Contas a pagar"
        />
        <div className="flex flex-col items-start w-full max-w-3xl text-left">
          <ol className="list-disc list-inside text-base space-y-2">
            <li>Buscar / inserir Fornecedor</li>
            <li>Informar Número da Nota Fiscal</li>
            <li>Informar número de parcelas</li>
            <li>
              Informar centro de custo (O centro de custos é uma ferramenta de
              gestão financeira que divide uma empresa em setores ou projetos
              para separar e analisar os gastos de cada um.)
            </li>
            <li>Informar o valor do título</li>
            <li>Informar valor de desconto</li>
            <li>Informar data de vencimento</li>
          </ol>
        </div>
        <h3 className="my-10 text-sm sm:text-2xl font-bold text-slate-900">
          Processo de lançamento Manual de um título de contas a pagar avulso
        </h3>
        <p className="text-base sm:text-base lg:max-w-4xl">
          O Módulo Pagar avulso, é uma maneira mais simplificada de lançar uma
          despesa, visando o controle de fluxo de caixa.
        </p>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={pagamento4}
          alt="Contas a pagar"
        />
        <div className="flex flex-col items-start w-full max-w-3xl text-left">
          <ol className="list-disc list-inside text-base space-y-2">
            <li>Data do lançamento / Movimentação</li>
            <li>Informar despesa / fornecedor</li>
            <li>Informar conta de saída</li>
            <li>Informar valor</li>
            <li>Informar tipo de pagamento</li>
            <li>Informar texto de histórico</li>
            <li>Informar texto de Obs.</li>
            <li>Confirmar / Gravar Operação</li>
          </ol>
        </div>
        <h3 className="mt-10 text-sm sm:text-2xl font-bold text-slate-900">
          Baixa de títulos do contas a Pagar
        </h3>
        <div className="flex flex-col items-start w-full max-w-3xl text-left">
          <p className="my-4 text-base sm:text-base lg:max-w-4xl">
            A baixa por liquidez ou pagamento pode ser feita de 2 formas:
          </p>
          <div className="flex flex-col items-start w-full max-w-3xl text-left">
            <ol className="list-disc list-inside text-base space-y-2">
              <li>
                Baixa individual direto na tela do título do contas a pagar
              </li>
              <li>Baixa em lote na tela de consulta do contas a pagar F11</li>
            </ol>
          </div>
        </div>
        <h4 className="my-4 text-base font-bold">
          Baixa individual direto na tela do título do contas a pagar
        </h4>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={pagamento5}
          alt="Contas a pagar"
        />
        <div className="flex flex-col items-start w-full max-w-3xl text-left">
          <p className="my-4 text-base sm:text-base lg:max-w-4xl">
            Localize o título a ser baixado e clique em editar/ alterar:
          </p>
          <ol className="list-disc list-inside text-base space-y-2">
            <li>Clique em editar / alterar</li>
            <li>Informe da data de pagamento</li>
            <li>Informe o valor pago</li>
            <li>Informe o tipo de pagamento</li>
            <li>Informar a conta de saída do valor pago</li>
          </ol>
        </div>
        <h4 className="mt-10 text-base font-bold">
          Baixa em lote na tela de consulta do contas a pagar F11
        </h4>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={pagamento7}
          alt="Contas a pagar"
        />
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={pagamento6}
          alt="Contas a pagar"
        />
        <div className="flex flex-col items-start w-full max-w-3xl text-left">
          <ol className="list-disc list-inside text-base space-y-2">
            <li>Aplique o filtro necessário e clique em baixar</li>
            <li>Selecione os títulos que deseja fazer a baixa</li>
            <li>Informe a conta para pagamento</li>
            <li>Informar o tipo de pagamento</li>
            <li>Informar data do pagamento</li>
            <li>Clicar em baixar para concluir a operação</li>
          </ol>
        </div>
        <h3 className="mt-10 text-sm sm:text-2xl font-bold text-slate-900">
          Consulta de contas a Pagar / Relatórios
        </h3>
        <img
          className="w-full max-w-3xl object-contain py-4"
          src={pagamento8}
          alt="Contas a pagar"
        />
        <div className="flex flex-col items-start w-full max-w-3xl text-left">
          <p className="mt-10 text-base sm:text-base lg:max-w-4xl">
            Na tela de consulta de contas a pagar é possível visualizar de forma
            rápida os títulos lançados. Com vários campos de filtro, torna o
            processo de localizar títulos mais eficaz. Com um duplo clique
            pode-se abrir o título com mais detalhes (tela do contas a pagar).
          </p>
          <p className="my-6 text-base sm:text-base lg:max-w-4xl">
            <strong>Botões de Funções de baixa, Autorizar e cancelar:</strong>
          </p>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Baixa</strong>, aplica o status de título baixado,
              informando o tipo de pagamento, Conta de origem do valor e data de
              Pagamento;
            </li>
            <li>
              <strong>Autorizar</strong>, os títulos passam por um processo de
              liberação de pagamento por parte da gerência;
            </li>
            <li>
              <strong>Cancelar</strong>, cancela títulos selecionados;
            </li>
          </ul>
        </div>
        <h3 className="mt-6 text-sm sm:text-2xl font-bold text-slate-900">
          Controle bancário
        </h3>
        <div className="flex flex-col items-start w-full max-w-3xl text-left">
          <p className="my-6 text-base sm:text-base lg:max-w-4xl">
            As informações inseridas nesse módulo abastecem os dados do controle
            bancário. O controle bancário é o registro diário de todas as
            movimentações bancárias, como depósitos, créditos, pagamentos e
            débitos. Ele tem duas finalidades:
          </p>

          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              Comparar os registros da empresa com os lançamentos do banco,
              identificando diferenças
            </li>
            <li>
              Gerar informações sobre os saldos bancários, para saber se são
              suficientes para pagar compromissos
            </li>
          </ul>

          <p className="mt-10 text-base sm:text-base lg:max-w-4xl">
            Para fazer um controle bancário eficaz, é preciso: Registrar
            diariamente todas as movimentações bancárias, apurar os saldos
            existentes, ter registros individualizados para cada conta bancária.
          </p>
          <p className="mt-10 text-base sm:text-base lg:max-w-4xl">
            A conciliação bancária é a comparação do controle financeiro interno
            com o extrato bancário do mesmo período. Ela é essencial para a
            saúde financeira, pois ajuda a identificar fraudes, lançamentos
            errados e valores não compensados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountsPayable;
