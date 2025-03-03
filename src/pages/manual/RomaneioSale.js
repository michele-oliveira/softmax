import romaneio from "../../assets/images/manual/mov_ped_venda_romaneio.png";
import romaneio1 from "../../assets/images/manual/mov_ped_venda_romaneio1.png";
import romaneio2 from "../../assets/images/manual/mov_ped_venda_romaneio3.jpg";
import romaneio3 from "../../assets/images/manual/mov_ped_venda_romaneio_menu.png";

function RomaneioSale() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="my-10 text-xl sm:text-2xl font-bold text-slate-900">
        Movimento - Pedido de Venda / Romaneio de Entrega
      </h1>

      <img
        className="py-4 w-full max-w-3xl object-contain"
        src={romaneio}
        alt="Romaneio de Entrega"
      />

      <h2 className="text-lg font-semibold">O que é romaneio?</h2>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="my-4 text-base lg:max-w-4xl">
          O romaneio de carga, de entrega ou de embarque é um documento que
          descreve todas as principais informações do que está sendo
          transportado.
        </p>
        <p className="my-4 text-base lg:max-w-4xl">
          Ou seja, é basicamente uma lista dos produtos que um caminhão ou
          utilitário está levando, relacionando os volumes e a descrição de
          cada.
        </p>
        <p className="my-4 text-base lg:max-w-4xl">
          Com o romaneio de carga é possível dividir um pedido de venda em carga
          / pedidos menores, mantendo a relação com o pedido principal.
        </p>
        <p className="my-4 text-base lg:max-w-4xl">
          Exemplo: um pedido que vai ser entregue de forma parcial, este pode
          conter um ou mais itens do pedido principal, ou conter uma quantidade
          menor que a quantidade total de um ou mais itens deste mesmo pedido.
        </p>
        <p className="my-4 text-base lg:max-w-4xl">
          Dessa maneira, ao emitir uma nota fiscal de um pedido liberado
          parcialmente, o sistema gera uma sequência do mesmo pedido com os
          itens / quantidades pendentes, mantendo o mesmo número do pedido
          principal e acrescentando uma sequência.
        </p>
      </div>
      <img
        className="py-4 w-full max-w-3xl object-contain"
        src={romaneio2}
        alt="Romaneio de Entrega"
      />
      <img
        className="py-4 w-full max-w-3xl object-contain"
        src={romaneio3}
        alt="Romaneio de Entrega"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <h2 className="my-4 text-base sm:text-base font-semibold text-slate-900">Funções dos Botões</h2>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>
            <b>Botão Alterar</b> - Alterar / Editar um lançamento salvo;
          </li>
          <li>
            <b>Botão Cancelar / Excluir</b> - Remove baixa de empenho, cancela
            lançamento, exclui lançamento;
          </li>
          <li>
            <b>Botão Salvar</b> - Salvar / Gravar lançamento;
          </li>
          <li>
            <b>Botão Cancelar / Abortar</b> - Cancela a operação vigente, ignora
            alterações e retorna ao estado anterior;
          </li>
          <li>
            <b>Botões de navegação</b>;
          </li>
          <li>
            <b>Botão de Aprovar</b> - Aprovar Romaneio;
          </li>
          <li>
            <b>Botão de Aprovar todos</b> - Aprova romaneios já liberados
            (Todos);
          </li>
          <li>
            <b>Botão de Remover Liberação</b>;
          </li>
          <li>
            <b>Botão de Liberação de Romaneio em Lote</b>;
          </li>
          <li>
            <b>Botão de Emissão de Etiquetas</b>;
          </li>
          <li>
            <b>Botão de Informar Local de Separação</b>;
          </li>
          <li>
            <b>Botão de Cancelar Romaneio Geral</b>;
          </li>
          <li>
            <b>Botão de Consultar Estoque</b>;
          </li>
        </ol>
      </div>

      <img
        className="py-4 w-full max-w-3xl object-contain"
        src={romaneio1}
        alt="Romaneio 1"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="text-base">
          1 - Quantidade liberada, total a ser entregue
        </p>
        <p className="text-base">2 - Quantidades de volumes</p>
      </div>
    </div>
  );
}

export default RomaneioSale;
