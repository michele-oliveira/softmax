import controle from "../../assets/images/manual/mov_fn_cb.png";

function BankingControl() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Financeiro - Controle Bancário (CB)
      </h1>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl"><strong>O módulo Financeiro</strong> permite a gestão completa das movimentações bancárias, incluindo entradas, saídas e devoluções. Com essa funcionalidade, é possível monitorar o fluxo de caixa, conciliar transações e garantir maior controle sobre as finanças da empresa.</p>
      <img
        className="w-full max-w-3xl object-contain py-10"
        src={controle}
        alt="Controle Bancário"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-disc list-inside text-base space-y-2">
          <li><strong>Visão clara das finanças –</strong> Acompanhamento detalhado de receitas e despesas. </li>
          <li><strong>Gestão de devoluções –</strong> Registro e controle de estornos de forma organizada. </li>
          <li><strong>Conciliação bancária –</strong> Facilita o alinhamento entre os registros financeiros e extratos bancários.</li>
          <li><strong>Otimização do tempo –</strong> Redução de erros e maior agilidade na administração financeira. </li>
          <li><strong>Melhoria no planejamento –</strong> Auxilia na tomada de decisões estratégicas com base em dados precisos. </li>
        </ul>
      </div>
      
    </div>
  );
}

export default BankingControl;