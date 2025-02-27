function TableCST() {
  const dados = [
    {
      codigo: "Código 1",
      descricao: "Simples Nacional",
      detalhe: "Preenchido pelo contribuinte optante pelo Simples Nacional.",
    },
    {
      codigo: "Código 2",
      descricao: "Simples Nacional - excesso de sublimite da receita bruta",
      detalhe:
        "Preenchido pelo contribuinte que ultrapassou o sublimite de receita bruta fixado pelo estado/DF.",
    },
    {
      codigo: "Código 3",
      descricao: "Regime Normal",
      detalhe:
        "Preenchido pelo contribuinte que não estiver na situação 1 ou 2.",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center px-6 py-8 lg:px-12 lg:py-16">
      <h1 className="mt-6 text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
        TABELA CRT / CST / CSOSN
      </h1>
      <div className="max-w-fit lg:max-w-3xl mx-auto p-2 md:p-6 border rounded-xl shadow-xl bg-white">
        <h2 className="text-xl font-bold mb-6 text-gray-800">
          TABELA A - Código de Regime Tributário - CRT
        </h2>
        <div className="">
          <table className="w-full table-fixed border-collapse border border-gray-300 rounded-lg overflow-x-scroll text-sm sm:text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-1 sm:p-4 text-center font-semibold border-b border-gray-300">
                  Código
                </th>
                <th className="p-1 sm:p-4 text-center font-semibold border-b border-gray-300">
                  Descrição
                </th>
                <th className="p-1 sm:p-4 text-center font-semibold border-b border-gray-300">
                  Detalhe
                </th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 hover:bg-gray-100 transition"
                >
                  <td className="p-1 sm:p-4 text-center font-bold text-gray-700 ">
                    {item.codigo}
                  </td>
                  <td className="p-1 sm:p-4 text-center text-gray-800 ">
                    {item.descricao}
                  </td>
                  <td className="p-1 sm:p-4 text-gray-600">{item.detalhe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col items-center text-center py-8 lg:px-12 lg:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
          Origem
        </h2>
        <ul className="max-w-3xl mx-auto list-disc list-inside space-y-4 text-left text-gray-700">
          <li>0 - Nacional, exceto as indicadas nos códigos 3 a 5</li>
          <li>
            1 - Estrangeira - Importação direta, exceto a indicada no código 6
          </li>
          <li>
            2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no
            código 7
          </li>
          <li>
            3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior
            a 40%
          </li>
          <li>
            4 - Nacional, cuja produção tenha sido feita em conformidade com os
            processos produtivos básicos de que tratam o Decreto-Lei nº 288/67 e
            as Leis nºs 8.248/91, 8.387/91, 10.176/01 e 11.484/07
          </li>
          <li>
            5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior
            ou igual a 40%
          </li>
          <li>
            6 - Estrangeira - Importação direta, sem similar nacional, constante
            em lista de Resolução CAMEX
          </li>
          <li>
            7 - Estrangeira - Adquirida no mercado interno, sem similar
            nacional, constante em lista de Resolução CAMEX
          </li>
        </ul>
        <div className="flex flex-col items-center text-center py-6 lg:px-12 lg:py-16">
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            Código da Situação Tributária (CST)
          </h2>

          <ul className="max-w-3xl mx-auto list-disc list-inside space-y-4 text-left text-gray-700">
            <p className="text-gray-700 my-4">
              O CST é a origem (indicada acima) mais 2 números:
            </p>
            <li>00 - Tributada integralmente</li>
            <li>
              10 - Tributada e com cobrança do ICMS por substituição tributária
            </li>
            <li>20 - Com redução da BC</li>
            <li>
              30 - Isenta / não tributada e com cobrança do ICMS por
              substituição tributária
            </li>
            <li>40 - Isenta</li>
            <li>41 - Não tributada</li>
            <li>50 - Com suspensão</li>
            <li>51 - Com diferimento</li>
            <li>60 - ICMS cobrado anteriormente por substituição tributária</li>
            <li>
              70 - Com redução da BC e cobrança do ICMS por substituição
              tributária
            </li>
            <li>90 - Outras</li>
          </ul>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-4">
          Simples (CSOSN)
        </h2>
        <p className="my-6 text-sm sm:text-base lg:max-w-4xl">
          Na NF-eletrônica 2.0 se a empresa for optante pelo Simples Nacional, o
          CST é chamado de CSOSN (Código de Situação da Operação no Simples
          Nacional), que é composto pela origem mais 3 números:
        </p>
        <ul className="max-w-3xl mx-auto list-disc list-inside space-y-4 text-left text-gray-700">
          <li>
            <b>
              101 - Tributada pelo Simples Nacional com permissão de crédito -
            </b>{" "}
            Classificam-se neste código as operações que permitem a indicação da
            alíquota do ICMS devido no Simples Nacional e o valor do crédito
            correspondente.
          </li>
          <li>
            <b>
              102 - Tributada pelo Simples Nacional sem permissão de crédito
            </b>{" "}
            - Classificam-se neste código as operações que não permitem a
            indicação da alíquota do ICMS devido pelo Simples Nacional e do
            valor do crédito, e não estejam abrangidas nas hipóteses dos códigos
            103, 203, 300, 400, 500 e 900.
          </li>
          <li>
            <b>
              103 - Isenção do ICMS no Simples Nacional para faixa de receita
              bruta
            </b>{" "}
            - Classificam-se neste código as operações praticadas por optantes
            pelo Simples Nacional contemplados com isenção concedida para faixa
            de receita bruta nos termos da Lei Complementar nº 123, de 2006.
          </li>
          <li>
            <b>
              201 - Tributada pelo Simples Nacional com permissão de crédito e
              com cobrança do ICMS por substituição tributária
            </b>{" "}
            - Classificam-se neste código as operações que permitem a indicação
            da alíquota do ICMS devido pelo Simples Nacional e do valor do
            crédito, e com cobrança do ICMS por substituição tributária.
          </li>
          <li>
            <b>
              202 - Tributada pelo Simples Nacional sem permissão de crédito e
              com cobrança do ICMS por substituição tributária
            </b>{" "}
            - Classificam-se neste código as operações que não permitem a
            indicação da alíquota do ICMS devido pelo Simples Nacional e do
            valor do crédito, e não estejam abrangidas nas hipóteses dos códigos
            103, 203, 300, 400, 500 e 900, e com cobrança do ICMS por
            substituição tributária.
          </li>
          <li>
            <b>
              203 - Isenção do ICMS no Simples Nacional para faixa de receita
              bruta e com cobrança do ICMS por substituição tributária
            </b>{" "}
            - Classificam-se neste código as operações praticadas por optantes
            pelo Simples Nacional contemplados com isenção para faixa de receita
            bruta nos termos da Lei Complementar nº 123, de 2006, e com cobrança
            do ICMS por substituição tributária.
          </li>
          <li>
            <b>300 - Imune</b> - Classificam-se neste código as operações
            praticadas por optantes pelo Simples Nacional contempladas com
            imunidade do ICMS.
          </li>
          <li>
            <b>400 - Não tributada pelo Simples Nacional</b> - Classificam-se
            neste código as operações sujeitas exclusivamente ao regime de
            substituição tributária na condição de substituído tributário ou no
            caso de antecipações.
          </li>
          <li>
            <b>
              500 - ICMS cobrado anteriormente por substituição tributária
              (substituído) ou por antecipação
            </b>{" "}
            - Classificam-se neste código as operações sujeitas exclusivamente
            ao regime de substituição tributária na condição de substituído
            tributário ou no caso de antecipações.
          </li>
          <li>
            <b>900 - Outros</b>
          </li>
          Classificam-se neste código as demais operações que não se enquadrem
          nos códigos 101, 102, 103, 201, 202, 203, 300, 400 e 500.
        </ul>
      </div>
    </div>
  );
}

export default TableCST;
