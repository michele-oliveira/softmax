function Taxpayer() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Softmax - Contribuinte
      </h1>
      <h2 className="mt-10 max-w-4xl text-xl sm:text-2xl font-bold text-slate-900">
        Quais são as diferenças entre os tipos: contribuinte, contribuinte
        isento e não contribuinte do ICMS?
      </h2>
      <p className="my-6 text-sm sm:text-base lg:max-w-4xl">
        Ao se deparar com o tipo de venda, você vai ser obrigado a indicar se o
        cliente vai ser declarado como Contribuinte, Não contribuinte ou Isento
        do ICMS. Veja as diferenças:
      </p>

      <div className="flex flex-col items-start w-full max-w-3xl text-left">
        <ul className="list-decimal list-inside text-base space-y-2">
          <p className="my-6 text-sm sm:text-base lg:max-w-4xl">
           <i> Veja as diferenças:</i>
          </p>
          <li>
            <b>Contribuinte</b>
          </li>
          <p>
            Regulamentado pelo artigo 4 da Lei Kandir, um contribuinte é uma
            Pessoa Física ou Jurídica que realiza operações de comércio ou
            operações de circulação de mercadoria ou prestação de serviço de
            transporte intermunicipal e interestadual (mesmo que no exterior)
            com volume ou habitualidade.
          </p>
          <p>
            Importante ressaltar que o contribuinte pode ser um produtor rural
            ou Pessoa Física e não é obrigado a ter um CNPJ. Basta ele efetuar
            operações de venda. Além disso, toda vez que você marcar o cliente
            como contribuinte precisará informar a inscrição estadual. Caso
            contrário, não será possível autorizar a NF-e.
          </p>
          <li>
            <b> Contribuinte Isento</b>
          </li>
          <p>
            Um Contribuinte Isento simplesmente não possui ou está impedido de
            ter uma inscrição estadual e portanto está isento de contribuir o
            ICMS. É por isso que você não consegue autorizar uma NF-e para uma
            pessoa cujo campo de inscrição estadual esteja preenchido.
          </p>
          <p>
            Porém, vale ressaltar que muitos estados não permitem contribuintes
            isentos, como: AM, BA, CE, GO, MG, MS, MT, PE, RN e SE.
          </p>
          <p>
            Quem são os isentos? Geralmente ONGs, prefeituras, quem possui MEI,
            entre outros. Se for uma empresa, ela não deve ter uma Inscrição
            Estadual em seus registros no site do Sintegra e no Cadastro
            Centralizado de Contribuinte será considerado como Consumidor Final.
          </p>
          <li>
            <b>Não Contribuinte</b>{" "}
          </li>
          <p>
            Um não contribuinte nada mais é do que uma Pessoa (seja ela Física
            ou Jurídica) que não realiza atividades sujeitas ao ICMS. Portanto,
            um consumidor final que não vai revender o produto de forma alguma é
            um não contribuinte. Desta forma, ele está comprando para seu
            próprio consumo, ou seja, uma operação normal.
          </p>
          <p>
            Algumas construtoras do estado de São Paulo possuem Inscrição
            Estadual, mas são classificadas como Não Contribuintes conforme
            regra específica do artigo 4º da Lei Complementar 87/9, anexo XI
            (Operações com Construção Civil no RICMS/SP).
          </p>
        </ul>
      </div>
      <h2 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Como saber qual preencher?
      </h2>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
          A melhor forma é sempre questionar o seu cliente. Você precisa
          interagir com ele de alguma maneira. Entretanto, confira estas dicas
          que podem ajudar no preenchimento adequado:
        </p>
        <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
          Se o cliente for uma Pessoa Física, muito provavelmente ele não é um
          contribuinte;
        </p>
        <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
          Se o seu cliente vende algo que é tributado pelo ICMS, então é um
          contribuinte;Inscrição Estadual CNPJ, então ele é contribuinte. Caso
          contrário, ele é isento;
        </p>
        <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
          Se o seu cliente for uma Pessoa Jurídica que não está no site do
          SINTEGRA, pode ser que ele não seja um contribuinte;
        </p>
        <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
          Vale lembrar que estas são dicas úteis, porém não infalíveis. Sempre
          faça uma dupla verificação com o cliente!
        </p>
      </div>
    </div>
  );
}

export default Taxpayer;
