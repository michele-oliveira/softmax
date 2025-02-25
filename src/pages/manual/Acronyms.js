function Acronyms() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Siglas
      </h1>
      <p className="mt-10 text-base sm:text-base lg:max-w-4xl">
        Conheça as siglas utilizadas nos elementos do manual. Você poderá clicar no item que deseja verificar e uma nova guia com a página do item escolhido será aberta.
      </p>
      <div className="w-full max-w-3xl py-10">
        <ul className="list-inside space-y-4 text-left text-base">
          {acronymsList.map(({ acronym, description, link }) => (
            <li key={acronym}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900"
              >
                <b>{acronym}</b> - {description}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const acronymsList = [
  {
    acronym: "CFOP",
    description: "Código Fiscal de Operações e Prestações",
    link: "https://www.sefaz.pe.gov.br/Legislacao/Tributaria/Documents/Legislacao/Tabelas/CFOP.htm",
  },
  {
    acronym: "CNAE",
    description: "Classificação Nacional de Atividades Econômicas",
    link: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/cadastros/cnpj/classificacao-nacional-de-atividades-economicas-2013-cnae",
  },
  {
    acronym: "ICMS",
    description: "Imposto sobre circulação de mercadorias e serviços",
    link: "https://portal.fazenda.sp.gov.br/acessoinformacao/paginas/icms.aspx",
  },
  {
    acronym: "ICMS - ST",
    description: "ICMS em Substituição Tributária",
    link: "http://www.substituicaotributaria.com/SST/substituicao-tributaria/",
  },
];

export default Acronyms;
