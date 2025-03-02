import order from "../../assets/images/manual/mov_ped_compra.png";
import order1 from "../../assets/images/manual/mov_ped_compra_menu.jpg";
import order2 from "../../assets/images/manual/mov_ped_compra_Consul.png";
import order3 from "../../assets/images/manual/mov_ped_compra_novo.png";
import order4 from "../../assets/images/manual/mov_ped_compra_xml.png";
import order5 from "../../assets/images/manual/mov_ped_compra_xmlID.png";
import order6 from "../../assets/images/manual/mov_ped_compra_xmlbx.png";
import order7 from "../../assets/images/manual/mov_ped_compra_xmlid2.png";

function OrderPurchase() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Movimentações - Pedido de compra
      </h1>
      <p className="mt-10 text-base lg:max-w-4xl">
        O <strong>Pedido de Compra</strong> é um contrato formal entre a empresa
        e o fornecedor, deve representar fielmente as condições e
        características da compra efetuada. É o acordo que representa as
        condições em que foi feita a negociação, tais como: material,
        quantidade, qualidade, frequência de entregas, prazos, preços, local de
        entrega, tributação,entre outros. Esta rotina permite que o Pedido de
        Compra seja:
      </p>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-disc list-inside text-base space-y-2">
          <li>Gerado manualmente;</li>
          <li>
            Relacionado a uma Solicitação de Compras previamente cadastrada;
          </li>
          <li>Automaticamente por meio da análise da melhor cotação.</li>
          <li>Importação de XML.</li>
        </ul>
      </div>
      <p className="my-10 text-base lg:max-w-4xl">
        A compra de um produto pode ser feita :
      </p>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-disc list-inside text-base space-y-2">
          <li>PA - Produto Acabado - Cadastro do produto final;</li>
          <li>SA - Semi Acabado;</li>
          <li>MP - Matéria-prima;</li>
          <li>OM - Outros materiais - Cadastro de produtos diversos;</li>
          <li>AV - Avulso / produto não cadastrado, Mão de obra e outros.</li>
        </ul>
      </div>
      <h2 className="py-6 text-lg lg:max-w-4xl font-bold">
        Funções Comuns do Módulo de Pedido de Compras
      </h2>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <strong>Cadastro de Fornecedores: </strong> Inserção e gestão de
            informações sobre os fornecedores, como dados de contato, produtos
            oferecidos e condições comerciais.
          </li>
          <li>
            <strong>Emissão de Pedidos de Compra:</strong> Criação de pedidos de
            compra de produtos ou serviços com base na necessidade de reposição
            ou demanda planejada.
          </li>
          <li>
            <strong>Aprovação de Pedidos de Compra:</strong> Processo de
            aprovação automática ou manual dos pedidos de compra conforme
            critérios pré-estabelecidos, como limites de compra e alçadas.
          </li>
          <li>
            <strong>Consulta de Pedidos de Compra:</strong> Ferramenta para
            visualizar os detalhes de pedidos de compra já emitidos, permitindo
            acompanhar o status, itens e valores.
          </li>
          <li>
            <strong>Gestão de Cotações:</strong> Solicitação e comparação de
            cotações entre diferentes fornecedores, facilitando a escolha das
            melhores condições de compra.
          </li>
          <li>
            <strong>Controle de Recebimento: </strong>Acompanhamento da entrega
            dos itens adquiridos, registrando a entrada dos produtos no estoque
            e verificando possíveis discrepâncias.
          </li>
          <li>
            <strong>Emissão de Relatórios de Compras:</strong> Geração de
            relatórios para análise de desempenho das compras, incluindo volume
            de compras, fornecedores, prazos e condições.
          </li>
          <li>
            <strong>Gestão de Estoque Integrado:</strong> Sincronização
            automática com o módulo de estoque, atualizando as quantidades à
            medida que os produtos são recebidos.
          </li>
          <li>
            <strong>Controle de Orçamentos: </strong> Verificação do impacto de
            um pedido de compra no orçamento disponível, garantindo que a
            empresa esteja dentro dos limites financeiros planejados.
          </li>
          <li>
            <strong>Requisições de Compra: </strong> Módulo que permite que
            diferentes setores da empresa façam solicitações de compra,
            iniciando o processo de aquisição.
          </li>
          <li>
            <strong>Histórico de Pedidos de Compra: </strong> Registro completo
            de todos os pedidos de compra realizados, facilitando consultas e
            auditorias.
          </li>
          <li>
            <strong>Gestão de Prazos de Entrega: </strong> Acompanhamento dos
            prazos de entrega acordados com os fornecedores para garantir o
            cumprimento dos cronogramas.
          </li>
          <li>
            <strong>Integração com Contas a Pagar: </strong> Conexão com o
            módulo financeiro para programar pagamentos aos fornecedores
            conforme os pedidos de compra são processados.
          </li>
          <li>
            <strong>Automação de Reabastecimento: </strong> Sistema que sugere
            ou gera automaticamente pedidos de compra com base em parâmetros
            definidos, como níveis mínimos de estoque ou previsão de demanda.
          </li>
          <li>
            <strong>Gestão de Contratos de Fornecimento: </strong> Gerenciamento
            de contratos a longo prazo com fornecedores, garantindo que os
            pedidos de compra estejam dentro dos termos acordados.
          </li>
          <li>
            <strong>Análise de Fornecedores:</strong> Avaliação de desempenho
            dos fornecedores com base em critérios como pontualidade, qualidade
            dos produtos e condições comerciais ISO.
          </li>
        </ol>
      </div>
      <p className="mb-10 text-base lg:max-w-4xl">
        Essas funções ajudam a garantir que o processo de compra seja eficiente,
        transparente e alinhado com as necessidades da empresa.
      </p>
      <p className="mb-10 text-base lg:max-w-4xl">
        Aliado a parâmetros ISO, a compra de insumos (matéria prima) deve
        atender a certificações de fornecedores e requisitos de produtos.
      </p>
      <img
        className="w-full max-w-3xl object-contain"
        src={order}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
      <img
        className="w-full max-w-3xl object-contain p-6"
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
            <strong>Navegação;</strong>
          </li>
          <li>
            <strong>Navegação;</strong>
          </li>
          <li>
            <strong>Navegação;</strong>
          </li>
          <li>
            <strong>Botão de pré-visualização/impressão </strong> - impressão do
            pedido;
          </li>
          <li>
            <strong>Botão de Baixa / Finalização da Compra;</strong>
          </li>
          <li>
            <strong>Botão de réplica de pedido;</strong>
          </li>
          <li>
            <strong>Botão de cadastro de Fornecedores;</strong>
          </li>
          <li>
            <strong>Botão de cadastro de Transportadoras;</strong>
          </li>
          <li>
            <strong>Botão de cadastro de produtos;</strong>
          </li>
          <li>
            <strong>Botão de Consulta de pedidos de Compra; </strong>
          </li>
          <li>
            <strong>Botão de Junção </strong> - Juntar pedidos em um único
            pedido;
          </li>
          <li>
            <strong>Botão de Relatório;</strong>
          </li>
          <li>
            <strong>
              Botão de Emissão de Nota fiscal de Devolução de compra;
            </strong>
          </li>
          <li>
            <strong>Botão de gerenciador de arquivos ; </strong>
          </li>
          <li>
            <strong>Botão de Emitir Nota fiscal ;</strong>
          </li>
          <li>
            <strong>Botão de cotação ;</strong>
          </li>
        </ol>
      </div>
      <h2 className="py-10 text-lg lg:max-w-4xl font-bold">
        Consulta e Relatórios de Pedido de Compra
      </h2>
      <p className="pb-6 text-base lg:max-w-4xl">
        Ferramenta que permite acessar e gerar relatórios detalhados sobre os
        pedidos de compra realizados pela empresa. Com essa funcionalidade, é
        possível visualizar informações como fornecedor, data de emissão, itens
        adquiridos, quantidade, preços, prazos de entrega, status (concluído,
        pendente, cancelado) e condições de pagamento.
      </p>
      <p className="pb-6 text-base lg:max-w-4xl">
        Os relatórios gerados auxiliam no acompanhamento do processo de compras,
        controle de estoque e planejamento de novas aquisições, proporcionando
        maior controle e eficiência na gestão do abastecimento da empresa.
      </p>
      <img
        className="w-full max-w-3xl object-contain"
        src={order2}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
      <img
        className="w-full max-w-3xl object-contain pt-6"
        src={order3}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <strong>Clique no botão NOVO para novo pedido;</strong>
          </li>
          <li>
            <strong>Selecione o Fornecedor;</strong>
          </li>
          <li>
            <strong>Informe o tipo de pagamento e as parcelas;</strong>
          </li>
          <li>
            <strong>Selecione o XML ( se já o tiver em mãos);</strong>
          </li>
          <li>
            <strong>Preencha com os produtos;</strong>
          </li>
          <li>
            <strong>Informe o transporte e o tipo;</strong>
          </li>
          <li>
            <strong>Clique em salvar;</strong>
          </li>
        </ol>
      </div>
      <p className="pb-6 text-base lg:max-w-4xl">
        Caso opte por importar o XML:
      </p>
      <p className="pb-6 text-base lg:max-w-4xl">
        Selecione o XML e clique em importar, será necessário vincular os itens
        da nota fiscal com os produtos cadastrados ou importar os intens como
        produtos novos.
      </p>
      <img
        className="w-full max-w-3xl object-contain pt-6"
        src={order4}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
      <img
        className="w-full max-w-3xl object-contain pt-6"
        src={order5}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
      <p className="py-6 text-base lg:max-w-4xl">
        Após pedido preenchido e salvo clique em Baixar pedido opção 11 do MENU
      </p>
      <p className="pb-6 text-base lg:max-w-4xl">
        Caso o pedido já esteja com o XML vinculado , ela já esta pronto para a
        baixa. Clicar em baixar:
      </p>
      <img
        className="w-full max-w-3xl object-contain pt-6"
        src={order6}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
      <h2 className="py-10 text-lg lg:max-w-4xl font-bold">
        Baixa/ Finalização do pedido de Compra
      </h2>
      <p className="pb-6 text-base lg:max-w-4xl">
        Selecione o XML e clique em importar, será necessário vincular os itens
        da nota fiscal com os produtos cadastrados ou importar os intens como
        produtos novos.
      </p>
      <img
        className="w-full max-w-3xl object-contain pt-6"
        src={order4}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
      <img
        className="w-full max-w-3xl object-contain pt-6"
        src={order5}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
      <p className="py-6 text-base lg:max-w-4xl">
        Após pedido preenchido e salvo clique em Baixar pedido:
      </p>
      <p className="pb-6 text-base lg:max-w-4xl">
        Caso o preenchimento foi manual,
      </p>
      <p className="pb-6 text-base lg:max-w-4xl">
        Selecionar espécie , e localizar o XML:
      </p>
      <img
        className="w-full max-w-3xl object-contain pt-6"
        src={order6}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
      <img
        className="w-full max-w-3xl object-contain pt-6"
        src={order7}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
      <p className="py-6 text-base lg:max-w-4xl">
        Após esse processo, clicar em baixar;
      </p>
      <p className="pb-6 text-base lg:max-w-4xl">
        O estoque será atualizado, gerado contas a pagar do fornecedor;
      </p>
      <h2 className="py-10 text-lg lg:max-w-4xl font-bold">
        Movimento - Pedido de Compra / Recebimento
      </h2>
      <p className="pb-6 text-base lg:max-w-4xl">
        Complemento do módulo de compras, com objetivo de efetuar o recebimento
        de mercadorias provenientes do setor de compras na expedição da empresa.
      </p>
      <p className="pb-6 text-base lg:max-w-4xl">
        As áreas de recebimento são os locais nos quais são recebidos os insumos
        e produtos, onde são realizadas as primeiras verificações das cargas
        recebidas, por exemplo, conferência da nota fiscal, lotes, quantidades e
        análise de qualidade (ISO).
      </p>
      <h2 className="py-10 text-lg lg:max-w-4xl font-bold">
        Consulta de Pedidos para Recebimento
      </h2>
      <p className="pb-6 text-base lg:max-w-4xl">
        Nesta tela são exibidos os pedidos de compras pendentes de recebimento.
        Dê dois cliques para abrir o pedido no módulo de recebimento.
      </p>
      <p className="pb-6 text-base lg:max-w-4xl">
        Na tela de detalhes do pedido, informe o número da nota fiscal, data de
        emissão e nome do responsável pelo recebimento.
      </p>
      <p className="pb-6 text-base lg:max-w-4xl">
        Nesta mesma tela, dê dois cliques no item (produto) para abrir a tela de
        detalhes do produto.
      </p>
      <p className="pb-6 text-base lg:max-w-4xl">
        Nesta tela de detalhes dos itens, há a opção de informação dos
        requisitos de fornecimento (parâmetros de qualidade ISO), quantidades,
        lotes e volumes recebidos.
      </p>
    </div>
  );
}

export default OrderPurchase;
