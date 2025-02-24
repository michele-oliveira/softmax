import production from "../../assets/images/manual//mov_empenho.png";

function ProductionOrder() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mx-4 mt-10 text-xl sm:text-2xl font-bold text-slate-900">
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
            <b>Identificação do Produto</b>
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
            <b>Quantidade a Produzir</b>
          </li>
          <p>
            <i>Número de Unidades:</i> Total de itens que devem ser fabricados
            conforme a demanda ou previsão de vendas.
          </p>
          <li>
            <b>Datas Importantes</b>
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
            <b>Lista de Materiais (Bill of Materials - BOM)</b>
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
            <b>Processos e Operações</b>
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
            <b>Alocação de Recursos</b>
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
            <b>Custos Estimados</b>
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
            <b>Controle de Qualidade</b>
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
            <b>Observações e Anotações Adicionais</b>
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
    </div>
  );
}

export default ProductionOrder;
