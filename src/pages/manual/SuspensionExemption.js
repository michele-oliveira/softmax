function SuspensionExemption() {
  return (
      <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
        <div className="my-10 text-2xl sm:text-2xl font-bold text-slate-900">
          <h1 className="my-10 text-xl sm:text-2xl font-bold text-slate-900">Diferença entre Isento e Não Tributado</h1>
        </div>
  
        <p className="my-10 text-base sm:text-base lg:max-w-4xl">
          <strong>Isenção</strong> trata-se de um benefício temporário podendo ser
          mudado pela Receita e significa que está dispensada a cobrança de
          tributos, enquanto que <strong>não tributada</strong> compreende a não
          incidência de tributo em uma operação.
        </p>
  
        <h1 className="mb-10 text-xl sm:text-2xl font-bold text-slate-900">
          No ICMS: Suspensão, Diferimento, Isenção, Incidência e Não Incidência
        </h1>
  
        <p className="my-4 text-base sm:text-base lg:max-w-4xl">
          Quando tratamos de ICMS (Imposto sobre Circulação de Mercadorias e
          Serviços), temos como fato gerador a movimentação de mercadorias,
          chamada na legislação como circulação.
        </p>
        <p className="my-4 text-base sm:text-base lg:max-w-4xl">
          Em regra, as mercadorias vendidas, transferidas, bonificadas, incidem
          ICMS, contudo a legislação poderá prever benefícios fiscais que não
          exijam o pagamento do imposto aos contribuintes.
        </p>
        <div className="flex flex-col items-start w-full max-w-3xl text-left">
          <h3 className="my-4 text-base sm:text-1-xl font-bold text-slate-900">
            Segue explicativo:
          </h3>
  
          <p className="my-4 text-base sm:text-base lg:max-w-4xl">
            <strong>Suspensão:</strong> é o adiamento do pagamento do imposto,
            sendo que esse pagamento será feito pelo próprio contribuinte.
          </p>
          <p className="my-4 text-base sm:text-base lg:max-w-4xl">
            <strong>Diferimento:</strong> é o adiantamento do pagamento do
            imposto, sendo que esse pagamento será por outro contribuinte.
          </p>
          <p className="my-4 text-base sm:text-base lg:max-w-4xl">
            <strong>Isenção:</strong> é a exclusão, por lei, de parcela da
            hipótese de incidência, sendo objeto da isenção a parcela que a lei
            retira dos fatos que realizam a hipótese de incidência da regra de
            tributação. Diante desse complexo conceito, podemos afirmar que a
            isenção é exceção feita por lei à regra jurídica tributária podendo
            ser alterada.
          </p>
          <p className="my-4 text-base sm:text-base lg:max-w-4xl">
            <strong>Não Tributada:</strong> Compreende a não incidência de tributo
            em uma operação, exemplo: "Remessa para Conserto".
          </p>
        </div>
  
        <h1 className="my-10 text-xl sm:text-2xl font-bold text-slate-900">
          CSTs do ICMS aplicáveis a cada situação:
        </h1>
  
        <div className="flex flex-col items-start w-full max-w-3xl text-left">
          <h3 className="text-base sm:text-1-xl font-bold text-slate-900">
            CST 40 - Isenta:
          </h3>
          <p className="my-10 text-base sm:text-base lg:max-w-4xl">
            A operação é isenta de ICMS, isso quer dizer que em vias normais, esta
            operação seria tributada, mas existe algum benefício legal que isenta
            a mercadoria/operação de ser tributada pelo ICMS. O estado, no
            entanto, pode no futuro cancelar o benefício e voltar a tributar a
            operação.
          </p>
  
          <h3 className="text-base sm:text-1-xl font-bold text-slate-900">
            CST 41 - Não tributada:
          </h3>
          <p className="my-10 text-base sm:text-base lg:max-w-4xl">
            É o tipo de operação onde não existe a incidência do ICMS, um exemplo
            são as exportações de mercadorias (Constituição Federal, Art. 155 X,
            a).
          </p>
  
          <h3 className="text-base sm:text-1-xl font-bold text-slate-900">
            CST 50 - Suspensão:
          </h3>
          <p className="my-10 text-base sm:text-base lg:max-w-4xl">
            A operação é passível de tributação, mas a legislação permite o não
            recolhimento do ICMS sobre certas circunstâncias. Um exemplo disso é a
            Remessa para Industrialização ou Beneficiamento. Caso o retorno da
            mercadoria demore mais que 180 dias, deverá ser recolhido o ICMS
            anteriormente suspenso. Existem situações de suspensão, entretanto,
            que não estabelecem restrições nem limites que obriguem o recolhimento
            do ICMS.
          </p>
  
          <h3 className="my-4 text-base sm:text-1-xl font-bold text-slate-900">
            CST 51 - Diferimento:
          </h3>
          <p className="my-4 text-base sm:text-base lg:max-w-4xl">
            É empurrar o pagamento do imposto para a operação posterior,
            normalmente aplicada ao fabricante. Um exemplo disso é a venda de gelo
            para embarcações pesqueiras em SC. Alguns estados exigem que seja
            escriturado na nota fiscal o valor do imposto suspenso. Nessa
            situação, o ICMS seria calculado e destacado, mas não seria recolhido.
          </p>
        </div>
      </div>
  );
}

export default SuspensionExemption;
