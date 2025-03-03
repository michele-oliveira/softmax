function Cnae() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="my-10 text-xl sm:text-2xl font-bold text-slate-900">
        O que é o CNAE?
      </h1>
      <p className="mx-4 mb-10 text-sm sm:text-base lg:max-w-4xl">
        As subclasses CNAE são um detalhamento da Classificação Nacional de
        Atividades Econômicas - CNAE, mantendo sua estrutura, apenas sendo
        acrescida de mais um nível de desagregação, com a especificação de 1301
        subclasses (Antecedentes).
      </p>
      <p className="mx-4 mb-10 text-sm sm:text-base lg:max-w-4xl">
        A CNAE é uma classificação usada com o objetivo de padronizar os códigos
        de identificação das unidades produtivas do país nos cadastros e
        registros da administração pública nas três esferas de governo, em
        especial na área tributária, contribuindo para a melhoria da qualidade
        dos sistemas de informação que dão suporte às decisões e ações do
        Estado, possibilitando, ainda, a maior articulação inter sistemas.
      </p>
      <p className="mx-4 mb-10 text-sm sm:text-base lg:max-w-4xl">
        A definição e atualização das subclasses são atribuições da Subcomissão
        Técnica para a CNAE - Subclasses , organizada no âmbito da CONCLA, sob a
        coordenação de representante da Secretaria da Receita Federal e com a
        participação de representantes da administração tributária das esferas
        estadual e municipal e do IBGE.
      </p>
      <p className="mx-4 mb-10 text-sm sm:text-base lg:max-w-4xl">
        A versão original da tabela de códigos e denominações CNAE-Fiscal, num
        total de 1301 subclasses, foi oficializada pela Resolução IBGE/CONCLA nº
        01, de 25/06/98. A versão revisada da tabela CNAE-Fiscal 1.0 com
        acréscimo de códigos (total de 1146) e correção em algumas denominações,
        foi publicada pela Resolução CONCLA nº 03 de 07/05/2001. As alterações
        na CNAE-Fiscal 1.1 resultaram da atualização em relação à CNAE 1.0 e a
        ISIC/CIIU 3.1 e também de ajustes em função de dificuldades apontadas
        pela experiência de sua implementação. A CNAE-Fiscal 1.1, com 1183
        subclasses, foi oficializada pela Resolução CONCLA nº 07 de 16/12/2002.
      </p>
      <p className="mx-4 mb-10 text-sm sm:text-base lg:max-w-4xl">
        A versão 2.0 da CNAE, com 1301 subclasses, foi aprovada e divulgada pela
        Resolução CONCLA nº 01, de 04/09/2006, entrou em vigor em janeiro de
        2007. A versão revisada da tabela CNAE 2.1 -Subclasses com inclusões e
        exclusões de subclasses, alterações na denominação de códigos, sem
        mudança de conteúdo, foi publicada pela Resolução Concla nº 02 de
        25/06/2010, entrou em vigor em dezembro de 2010.
      </p>
      <h2 className="my-10 text-base sm:text-base font-semibold text-slate-900">
        Fonte:{" "}
        <a
          href="http://subcomissaocnae.fazenda.pr.gov.br/modules/conteudo/conteudo.php?conteudo=1"
          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
        >
          http://subcomissaocnae.fazenda.pr.gov.br/modules/conteudo/conteudo.php?conteudo=1
        </a>
      </h2>
    </div>
  );
}

export default Cnae;
