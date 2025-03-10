import production from "../../assets/images/manual//mov_empenho.png";
import production1 from "../../assets/images/manual/mov_empenho_mnu.jpg";
import production2 from "../../assets/images/manual/mov_empenho_demand.png";
import production3 from "../../assets/images/manual/mov_empenho_gerar.png";
import production4 from "../../assets/images/manual/mov_empenho_estoque.png";

function ProductionOrder() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mx-4 mt-10 max-w-4xl text-xl sm:text-2xl font-bold text-slate-900">
        Softmax Treinamento – Módulo de Produção / Empenho Definição de Ordem de
        Produção na Indústria
      </h1>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        A ordem de produção na indústria é um documento formal, físico ou
        digital, que autoriza e instrui o início da fabricação de um produto ou
        lote de produtos. Ela é emitida pelo departamento de planejamento ou
        controle de produção (PCP) e contém todas as informações necessárias
        para que o processo produtivo seja executado de forma eficiente,
        seguindo padrões de qualidade, prazos e custos estabelecidos.
      </p>

      <img
        className="w-full max-w-3xl object-contain"
        src={production}
        alt="Ordem de Produção"
      />

      <h2 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        O que é uma Ordem de Produção?
      </h2>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        A ordem de produção orienta todas as etapas da fabricação, trazendo
        clareza sobre os recursos, prazos e métodos necessários. É, portanto, um
        documento que traduz a demanda (interna ou externa) em um plano de
        execução para a linha de produção.
      </p>
      <h2 className="mt-6 text-xl sm:text-2xl font-bold text-slate-900">
        Componentes Principais da Ordem de Produção
      </h2>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <strong>Identificação do Produto</strong>
          </li>
          <p>
            <i>Código do Produto:</i> Número único que identifica o item a ser
            produzido.
          </p>
          <p>
            <i>Descrição do Produto:</i> Detalhes técnicos, especificações e
            características.
          </p>
          <li>
            <strong>Quantidade a Produzir</strong>
          </li>
          <p>
            <i>Número de Unidades:</i> Total de itens que devem ser fabricados
            conforme a demanda ou previsão de vendas.
          </p>
          <li>
            <strong>Datas Importantes</strong>
          </li>
          <p>
            <i>Data de Emissão:</i> Quando a ordem foi criada.
          </p>
          <p>
            <i>Data de Início:</i> Quando a produção deve começar.
          </p>
          <p>
            <i>Data de Término ou Prazo de Entrega:</i> Quando a produção deve
            ser concluída.
          </p>
          <li>
            <strong>Lista de Materiais (Bill of Materials - BOM)</strong>
          </li>
          <p>
            <i>Matérias-Primas e Componentes: </i> Detalhamento de todos os
            insumos necessários.
          </p>
          <p>
            <i>Quantidades Necessárias: </i> Quantidade de cada material para a
            produção total.
          </p>
          <p>
            <i>Reserva de matéria-prima: </i> Registro e alocação de insumos a
            serem utilizados.
          </p>
          <li>
            <strong>Processos e Operações</strong>
          </li>
          <p>
            <i>Sequência de Produção: </i> Passo a passo das etapas que devem
            ser seguidas.
          </p>
          <p>
            <i>Instruções Especiais: </i> Procedimentos específicos, padrões de
            qualidade e requisitos técnicos.
          </p>
          <li>
            <strong>Alocação de Recursos</strong>
          </li>
          <p>
            <i>Mão de Obra: </i> Equipes ou funcionários designados para a
            produção.
          </p>
          <p>
            <i>Máquinas e Equipamentos: </i> Recursos físicos necessários e sua
            disponibilidade.
          </p>
          <li>
            <strong>Custos Estimados</strong>
          </li>
          <p>
            <i>Custos de Materiais: </i>Valor dos insumos necessários.
          </p>
          <p>
            <i>Custos de Mão de Obra: </i> Estimativa de horas trabalhadas e
            remuneração.
          </p>
          <p>
            <i>Custos Indiretos:</i> Gastos gerais associados à produção.
          </p>
          <li>
            <strong>Controle de Qualidade</strong>
          </li>
          <p>
            <i>Padrões e Especificações: </i> Critérios que o produto final deve
            atender.
          </p>
          <p>
            <i>Pontos de Inspeção: </i> Etapas em que o controle de qualidade
            deve ser aplicado.
          </p>
          <li>
            <strong>Observações e Anotações Adicionais</strong>
          </li>
          <p>
            <i>Instruções Complementares: </i>Qualquer informação extra
            relevante.
          </p>
          <p>
            <i>Alterações ou Atualizações: </i>Modificações feitas após a
            emissão inicial.
          </p>
        </ol>
      </div>
      <h2 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Funções e Importância da Ordem de Produção
      </h2>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <strong>Planejamento e Organização</strong>
          </li>
          <p>
            <i>Coordenação de Atividades: </i> Garante que todas as etapas sejam
            executadas na ordem correta.
          </p>
          <p>
            <i>Gestão de Recursos:</i> Otimiza o uso de materiais, mão de obra e
            equipamentos.
          </p>
          <li>
            <strong>Controle e Monitoramento</strong>
          </li>
          <p>
            <i>Acompanhamento do Processo: </i> Permite que os gestores
            monitorem o progresso e façam ajustes, se necessário.
          </p>
          <p>
            <i>Rastreabilidade: </i>Mantém um registro detalhado para fins de
            auditoria e melhoria contínua (lotes e vínculo com documentos de
            compras, certificados e laudos).
          </p>
          <li>
            <strong>Comunicação Interna</strong>
          </li>
          <p>
            <i>Alinhamento entre Departamentos: </i> Facilita a troca de
            informações entre compras, estoque, produção e qualidade.
          </p>
          <p>
            <i>Redução de Erros: </i>Minimiza falhas decorrentes de falhas de
            comunicação.
          </p>
          <li>
            <strong>Análise de Desempenho</strong>
          </li>
          <p>
            <i>Métricas e Indicadores: </i> Facilita a troca de informações
            entre compras, estoque, produção e qualidade.
          </p>
          <p>
            <i>Identificação de Gargalos: </i>Detecção de problemas e
            implementação de ações corretivas.
          </p>
          <li>
            <strong>Apontamento de falhas</strong>
          </li>
          <p>
            <i>Falha de produtos</i>
          </p>
          <p>
            <i>Falha de processos </i>
          </p>
          <p>
            <i>Falha por operador</i>
          </p>
          <p>
            <i>Gargalos</i>
          </p>
        </ol>
      </div>
      <h2 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Processo de Emissão da Ordem de Produção
      </h2>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <strong>Identificação da Necessidade</strong>
          </li>
          <p>
            <i>Pedidos de Clientes: </i> Demandas específicas que precisam ser
            atendidas (explosão do pedido de venda).
          </p>
          <p>
            <i>Estoque de Segurança: </i> Reposição de produtos para manter
            níveis adequados.
          </p>
          <li>
            <strong>Planejamento da Produção</strong>
          </li>
          <p>
            <i>Verificação de Capacidade: </i> Análise da disponibilidade de
            recursos.
          </p>
          <p>
            <i>Programação: </i> Definição de datas e sequenciamento das ordens
            (Mapa de produção).
          </p>
          <li>
            <strong>Emissão e Aprovação</strong>
          </li>
          <p>
            <i>Criação da Ordem: </i> Preparação do documento com todas as
            informações necessárias.
          </p>
          <p>
            <i>Revisão e Aprovação: </i>Validação por gestores ou responsáveis.
          </p>
          <li>
            <strong>Distribuição</strong>
          </li>
          <p>
            <i>Comunicação aos Envolvidos: </i>Envio da ordem para os
            departamentos relevantes.
          </p>
          <li>
            <strong>Execução</strong>
          </li>
          <p>
            <i>Início da Produção: </i>Operadores e equipes iniciam as
            atividades conforme instruções.
          </p>
          <li>
            <strong>Controle e Ajustes</strong>
          </li>
          <p>
            <i>Monitoramento Contínuo: </i> Supervisão para garantir
            conformidade com o planejado.
          </p>
          <p>
            <i>Atualizações Necessárias: </i> Ajustes em caso de imprevistos ou
            mudanças.
          </p>
          <li>
            <strong>Conclusão e Fechamento</strong>
          </li>
          <p>
            <i>Finalização das Atividades: </i> Conclusão da produção conforme
            especificado.
          </p>
          <p>
            <i>Registro de Resultados: </i> Documentação de dados reais versus
            planejados.
          </p>
        </ol>
      </div>
      <h2 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Benefícios da Ordem de Produção na Indústria
      </h2>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-disc list-inside text-base space-y-2">
          <li>
            <strong>Eficiência Operacional:</strong> Otimiza processos e reduz
            desperdícios.
          </li>
          <li>
            <strong>Qualidade Assegurada:</strong> Garante que os produtos
            atendam aos padrões estabelecidos.
          </li>
          <li>
            <strong>Satisfação do Cliente:</strong> Cumpre prazos e expectativas
            de qualidade.
          </li>
          <li>
            <strong>Competitividade:</strong> Melhora a capacidade de resposta
            ao mercado.
          </li>
        </ul>
      </div>

      <h2 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Vantagens das Tecnologias Associadas (Sistemas ERP / Maxcontrol)
      </h2>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-disc list-inside text-base space-y-2">
          <li>
            <strong>Integração de Processos:</strong> Centraliza informações e
            facilita a gestão integrada.
          </li>
          <li>
            <strong>Automação:</strong> Reduz a necessidade de processos manuais
            e propensos a erros.
          </li>
          <li>
            <strong>MES (Manufacturing Execution Systems):</strong> Gestão da
            produção em tempo real para monitorar e controlar o chão de fábrica.
          </li>
          <li>
            <strong>Sistemas de Planejamento Avançado (APS):</strong> Otimiza a
            programação e sequenciamento das ordens.
          </li>
          <li>
            <strong>PCP (Planejamento e Controle de Produção):</strong> Efetua o
            planejamento de longo prazo e acompanha a execução de cada etapa
            produtiva.
          </li>
        </ul>
      </div>
      <h2 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Exemplo Prático
      </h2>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        Imagine uma fábrica de eletrodomésticos que recebe um grande pedido de
        1.000 geladeiras modelo X. O departamento de vendas comunica a demanda
        ao planejamento, que verifica a disponibilidade de recursos e emite uma
        ordem de produção com as seguintes informações:
      </p>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-disc list-inside text-base space-y-2">
          <li>
            <i>Produto: </i> Geladeira Modelo X
          </li>
          <li>
            <i>Quantidade:</i> 1.000 unidades
          </li>
          <li>
            <i>Data de Início:</i> 15 de outubro
          </li>
          <li>
            <i>Data de Término:</i> 30 de outubro
          </li>
          <li>
            <i>Materiais Necessários:</i> Lista detalhada de componentes e
            matérias-primas
          </li>
          <li>
            <i>Instruções Especiais:</i> Aplicar nova versão do software interno
          </li>
          <li>
            <i>Equipes Alocadas:</i> Linha de montagem 3, Equipe de testes 2
          </li>
        </ul>
      </div>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        A ordem é então distribuída para os departamentos envolvidos, e a
        produção é iniciada conforme planejado.
      </p>
      <h2 className="mt-6 text-xl sm:text-2xl font-bold text-slate-900">
        Conclusão
      </h2>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        A ordem de produção é um instrumento vital na indústria, servindo como
        um mapa detalhado que orienta todo o processo produtivo. Ela assegura
        que todos os envolvidos estejam alinhados, reduzindo riscos de erros,
        atrasos e desperdícios. Ao estabelecer um fluxo de trabalho claro e
        estruturado, a ordem de produção contribui significativamente para a
        eficiência operacional e o sucesso competitivo da empresa.
      </p>
      <h2 className="mt-6 text-xl sm:text-2xl font-bold text-slate-900">
        Manual - Módulo de Produção / Empenho Definição de Ordem de Produção
      </h2>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        A seguir, são apresentados os principais botões e recursos do módulo de
        produção / empenho:
      </p>
      <img
        className="w-full max-w-3xl object-contain"
        src={production1}
        alt="Ordem de Produção"
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
            <strong>Botão de pré-visualização </strong> - Visualizar impressão
            do empenho;
          </li>
          <li>
            <strong>Botão de Impressão</strong>- Impressão do empenho;
          </li>
          <li>
            <strong>Botão de réplica de pedido;</strong>
          </li>
          <li>
            <strong>Botão de relatórios;</strong>
          </li>
          <li>
            <strong>Botão de confirmação de empenho;</strong>
          </li>
          <li>
            <strong>Botão de baixa / finalização de empenho;</strong>
          </li>
          <li>
            <strong>Botão de Consulta de pedidos de venda;</strong>
          </li>
          <li>
            <strong>Botão de etiquetas;</strong>
          </li>
          <li>
            <strong>Botão de produtos;</strong>
          </li>
          <li>
            <strong>Botão de consulta de empenhos;</strong>
          </li>
          <li>
            <strong>Botão de Consulta de Mapas de produção;</strong>
          </li>
          <li>
            <strong>Botão de Consulta de materiais;</strong>
          </li>
          <li>
            <strong>Botão de requisição de Material;</strong>
          </li>
          <li>
            <strong>Botão de estorno de material;</strong>
          </li>
        </ol>
      </div>
      <h2 className="mt-6 text-xl sm:text-2xl font-bold text-slate-900">
        Produção / Empenho
      </h2>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-disc list-inside text-base space-y-2">
          <li>
            <strong>
              Configuração de questionário checklist de novo produto
            </strong>
          </li>
          <li>
            <strong>MRP (Material Requirements Planning)</strong>
          </li>
          <p>
            <i>Necessidade de insumos </i>
          </p>
          <p>
            <i> Necessidade de componentes e intermediários</i>
          </p>
          <p>
            <i>Previsão de demanda (acabados e/ou insumos) por: </i>
          </p>
          <li>Histórico de vendas</li>
          <li>Carteira programada de pedidos</li>
          <li>Previsão de vendas</li>
          <li>
            <strong>Previsão</strong>
          </li>
          <p>
            <i>Carga hora máquina </i>com base em carteira de vendas
          </p>
          <p>
            <i>Carga hora homem </i>com base em carteira de vendas
          </p>
          <li>
            <strong>Botão Salvar</strong>- Salvar / Gravar lançamento
          </li>
          <li>
            <strong>Ordens de Produção</strong>
          </li>
          <p>
            <i>Abertura das ordens de produção</i>
          </p>
          <li>Geração de ordem diretamente a partir dos pedidos</li>
          <li>Geração de ordem avulsa</li>
          <li>Aprovação de Ordem de Produção</li>
          <p>
            <i>Empenho de matérias-primas e componentes para OP </i>
          </p>
          Reserva de estoque dos insumos para a ordem
          <li>Emissão da lista de materiais para a produção</li>
          <p>
            <i>Impressão das ordens de produção </i>
          </p>
          <li>
            <strong>Registro de andamento da OP via leitura ótica</strong>
          </li>
          <li>Código de barras OP x Código de barras do setor</li>
          <li>Acompanhamento Setor x OPs</li>
          <li>
            <strong>Empenho (Ordem de produção) </strong>pode ser dividido em:
          </li>
          <li>Empenho sob demanda</li>
          <li>Empenho para Estoque</li>
        </ol>
      </div>
      <h2 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Empenho sob Demanda
      </h2>
      <img
        className="pt-4 w-full max-w-3xl object-contain"
        src={production2}
        alt="Ordem de Produção"
      />
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        É derivado diretamente do pedido de venda, com vínculo ao número do
        pedido, compondo o código do empenho, seu lote e rastreabilidade.
      </p>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-decimal list-inside text-base space-y-2">
          <li>
            Na consulta de empenhos, clique no botão{" "}
            <strong>PEDIDOS NÃO EMPENHADOS.</strong> Será exibida uma lista de
            pedidos de venda ainda não produzidos.
          </li>
          <li>
            Selecione na lista de pedidos quais deverão iniciar o processo de
            produção. Em seguida, clique com o botão direito do mouse.
          </li>
          <li>
            Na lista de opções, clique em <strong>GERAR EMPENHO</strong>.
          </li>
        </ul>
      </div>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        A imagem a seguir mostra o detalhamento do pedido. Caso haja mais itens,
        será feita a explosão (listagem dos pedidos que compõem o pedido).
      </p>
      <img
        className="pt-4 w-full max-w-3xl object-contain"
        src={production3}
        alt="Ordem de Produção"
      />
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        Confirme no botão <strong>GERAR EMPENHO</strong>.
      </p>
      <h2 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Empenho para Estoque
      </h2>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        Para gerar um empenho de estoque, inicie na tela de empenhos:
      </p>
      <img
        className="pt-4 w-full max-w-3xl object-contain"
        src={production4}
        alt="Ordem de Produção"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-decimal list-inside text-base space-y-2">
          <li>
            Clique no botão <strong>NOVO / INCLUIR</strong>.
          </li>
          <li>
            Responda <strong>NÃO</strong> à pergunta se deseja vincular com
            pedido de venda.
          </li>
          <li>Selecione o produto que deseja produzir.</li>
          <li>Preencha as quantidades:</li>
          <p>
            <i>Quantidade a Produzir –</i> Quantidade total a ser produzida.
          </p>
          <p>
            <i>Quantidade de Cargas – </i> Número de vezes que entrará em
            processo.
          </p>
          <p>
            <i>Quantidade por carga –</i> Quantidade limite de produção por vez.
            Exemplo: se o limite de produção por equipamento é de 500 kgs, uma
            produção de 1.000 kgs será dividida em 2 cargas de 500 kgs.
          </p>
          <li>A lista com a formulação do produto será exibida.</li>
          <li>
            Clique em <strong>Salvar.</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductionOrder;
