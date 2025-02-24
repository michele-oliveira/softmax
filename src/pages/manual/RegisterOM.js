import ensaio from "../../assets/images/manual/cad_pro_OM.png";

function RegisterOM() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Cadastro de Outros Materiais (OM)
      </h1>
      <img
        className="w-full max-w-3xl object-contain py-10"
        src={ensaio}
        alt="Desenvolvimento de Outros Materiais"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-disc list-inside text-base space-y-2">
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
      </div>
      
    </div>
  );
}

export default RegisterOM;