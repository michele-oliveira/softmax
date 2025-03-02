import mapa from "../../assets/images/manual/mov_mapa_prod.png";
import mapa1 from "../../assets/images/manual/mov_mapa_prod_LT.png";

function ProductionMap() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Softmax - Movimento - Mapa de Produção
      </h1>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl"></p>

      <img
        className="w-full max-w-3xl object-contain"
        src={mapa}
        alt="Mapa de produção"
      />
      <img
        className="w-full max-w-3xl object-contain"
        src={mapa1}
        alt="Mapa de produção"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="text-base pb-5">
          <strong> </strong>
        </p>
        <p className="text-base pt-2">
          <strong> </strong>
        </p>
        <p className="text-base pt-2">
          <strong> </strong>
        </p>
        <p className="text-base pt-2">
          <strong> </strong>
        </p>
        <p className="text-base pt-2">
          <strong> </strong>
        </p>
        <p className="text-base pt-2">
          <strong> </strong>
        </p>
        <p className="text-base pt-2">
          <strong> </strong>
        </p>
      </div>
    </div>
  );
}

export default ProductionMap;
