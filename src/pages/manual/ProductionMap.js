import mapa from "../../assets/images/manual/mov_mapa_prod.png";
import mapa1 from "../../assets/images/manual/mov_mapa_prod_LT.png";

function ProductionMap() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Softmax - Movimento - Mapa de Produção
      </h1>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl"><strong>O Mapa de Produção</strong> é uma funcionalidade que permite visualizar e acompanhar todas as etapas do processo produtivo em tempo real. Através dele, é possível monitorar o status das ordens de produção, identificar gargalos, otimizar recursos e garantir o fluxo eficiente da fabricação. Com uma interface intuitiva, o Mapa de Produção facilita o planejamento e a tomada de decisões, melhorando a produtividade e reduzindo desperdícios.</p>

      <img
        className="w-full max-w-3xl object-contain"
        src={mapa}
        alt="Mapa de produção"
      />
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">A Linha do Tempo de Produção oferece uma visão cronológica detalhada de todas as etapas do processo produtivo. Com ela, é possível rastrear o andamento das ordens de produção, desde a sua criação até a finalização, identificando tempos de execução, atrasos e eventuais interrupções. Essa funcionalidade permite uma gestão mais eficiente, facilitando a análise de desempenho, a alocação de recursos e a tomada de decisões estratégicas para otimizar a produtividade.</p>
      <img
        className="w-full max-w-3xl object-contain"
        src={mapa1}
        alt="Mapa de produção"
      />
    </div>
  );
}

export default ProductionMap;
