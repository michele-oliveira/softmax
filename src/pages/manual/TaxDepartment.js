import imposto from "../../assets/images/manual/deolhonoimposto_conf.png";

function TaxDepartment() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="my-10 text-xl sm:text-2xl font-bold text-slate-900">
        De Olho no Imposto
      </h1>

        <p className="my-4 text-base sm:text-base lg:max-w-4xl">
          Com base nas constantes alterações da NFe junto da necessidade de
          informar de maneira correta os impostos na Nota Fiscal, conforme a Lei
          de olho no imposto.
        </p>
        <p className="my-4 text-base sm:text-base lg:max-w-4xl">
          Periodicamente é fornecida uma tabela com as alterações nas alíquotas.
          Afim de automatizar esse processo e manter sempre as informações
          atualizadas, solicitamos aos nossos clientes que efetuem cadastro
          neste 
          <a
            className="text-blue-600 hover:underline font-semibold"
            href="https://deolhonoimposto.ibpt.org.br/Usuario/CriarConta"
            target="_blank"
            rel="noopener noreferrer"
          > site.
          </a>
        </p>
        <p className="my-4 text-base sm:text-base lg:max-w-4xl">
          A comunicação e atualização será feita por webservice e após o
          cadastro, alterar no sistema, incluindo em Parâmetros/ Nfe /IBPB
        </p>
        <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
          <ul className="list-decimal list-inside text-base space-y-2">
            <li>Alterar Origem: WebSERV IWS_IBPT</li>
            <li>Token: token informado site (um para cada empresa)</li>
          </ul>
        </div>

      <h2 className="my-10 text-1xl sm:text-1xl font-bold text-slate-900">
        Como configurar:
      </h2>
      <p className="text-base sm:text-base lg:max-w-4xl">
        Acessar parâmetros / NFE, selecionar origem = WebServ IWS_IBPT e
        informar token cadastrado no site.
      </p>
      <img
        className="w-full max-w-3xl object-contain py-4"
        src={imposto}
        alt="Operação de troca de títulos Factory"
      />
    </div>
  );
}

export default TaxDepartment;
