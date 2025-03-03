import recebimento from "../../assets/images/manual/mov_compra_receb.png";
import recebimento1 from "../../assets/images/manual/mov_compra_receb1.png";
import recebimento2 from "../../assets/images/manual/mov_compra_receb2.png";
import recebimento3 from "../../assets/images/manual/mov_compra_receb3.png";

function OrderCollect() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Movimento - Pedido de Compra / Recebimento
      </h1>

      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        Complemento do módulo de compras, tem como objetivo o recebimento de
        mercadorias proveniente do setor de compras na expedição da empresa.
      </p>

      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        As áreas de recebimento são os locais nos quais são recebidos os insumos
        e produtos, onde são realizadas as primeiras verificações das cargas
        recebidas, por exemplo, conferência da nota fiscal, lotes, quantidades e
        análise de qualidade ISO.
      </p>
      <img
        className="py-6 w-full max-w-3xl object-contain"
        src={recebimento}
        alt="Pedido de compra / Recebimento"
      />

      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        Consulta de pedidos para Recebimento
      </p>
      <img
        className="py-6 w-full max-w-3xl object-contain"
        src={recebimento1}
        alt="Pedido de compra / Recebimento"
      />

      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        Nesta tela temos os pedidos de compras pendentes de recebimento. Dê dois
        cliques para abrir o pedido no módulo de recebimento.
      </p>

      <img
        className="py-6 w-full max-w-3xl object-contain"
        src={recebimento2}
        alt="Pedido de compra / Recebimento"
      />
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        Na tela de detalhes do pedido, informe o número da nota fiscal, data de
        emissão e nome do responsável pelo recebimento.
      </p>

      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        Nesta mesma tela, dê dois cliques no item (PRODUTO) para abrir a tela de
        detalhes do produto.
      </p>
      <img
        className="py-6 w-full max-w-3xl object-contain"
        src={recebimento3}
        alt="Pedido de compra / Recebimento"
      />

      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        Nesta tela de detalhes dos itens, temos a opção de informar os
        requisitos de fornecimento (parâmetros de qualidade ISO), quantidades,
        lotes e volumes recebidos.
      </p>
    </div>
  );
}

export default OrderCollect;
