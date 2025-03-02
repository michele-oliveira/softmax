function TableConfins() {
  return (
    <div>
      <h1>Tabelas CST PIS / COFINS</h1>
      <div>
        <div>
          <h2>
            <strong>CST – PIS/Pasep e COFINS </strong>
          </h2>
          <p>
            A Instrução Normativa RFB nº 1.009, de 10 de fevereiro de 2010, em
            seu Anexo Único estabeleceu os Códigos de Situação Tributária – CST,
            relativos as contribuições para o PIS/Pasep e a COFINS, que deverão
            ser utilizados pelos contribuintes: – na elaboração dos arquivos
            digitais da Escrituração Fiscal Digital (EFD);e – emissão de Nota
            Fiscal Eletrônica – Nfe.
          </p>
          <ul>
            <li>CST Operações de Saída</li>
            <li>CST Operações de Entrada</li>
            <li>NOTAS</li>
          </ul>
          <div>
            <span>
              <strong> CST Operações de Saída</strong>
            </span>
            <h2>
              <strong> CST – Operações de Saídas</strong>
            </h2>
            <p>
              Para identificação das saídas na Nfe e na EFD-Contribuições
              deverão ser informados os seguintes códigos de situação tributária
              para o PIS/Pasep e a COFINS:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Descrição</th>
                  <th>Incidência do Imposto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <strong>01</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Operação Tributável com Alíquota Básica</strong>
                      <br />
                      (Operações de saídas cujas receitas estejam sujeitas às
                      alíquotas de: 0,65% PIS e 3,00% COFINS no Regime
                      Cumulativo e 1,65% PIS e 7,6% COFINS no Regime Não
                      Cumulativo)
                    </p>
                  </td>
                  <td>
                    <strong>Sim</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>02</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>
                        Operação Tributável com Alíquota Diferenciada
                      </strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>03</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>
                        Operação Tributável com Alíquota por Unidade de Medida
                        de Produto
                      </strong>{" "}
                      (Quando o fabricante ou importador fez a opção pelos
                      regimes especiais de tributação como o RECOB ou o REFRI)
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>04</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>
                        Operação Tributável Monofásica – Revenda a Alíquota Zero
                      </strong>{" "}
                      (Receitas decorrentes da revenda de produtos que tiveram
                      sua tributação concentrada na etapa anterior, como por
                      exemplo bebidas frias, auto-peças, pneus, medicamentos…)
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Não</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>05</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>
                        Operação Tributável por Substituição Tributária
                      </strong>{" "}
                      (A revenda de produtos sujeitos a substituição tributária
                      das contribuições será com alíquota zero, portanto quando
                      o revendedor utilizar este código deverá indicar também
                      que a alíquota é zero, pois o código também será utilizado
                      pelo fabricante ou importador)
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Não</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>06</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Operação Tributável a Alíquota Zero</strong>{" "}
                      (Operações cujas receitas estão sujeitas à alíquota zero
                      também na fabricação/importação e não somente na revenda)
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Não</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>07</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Operação Isenta das Contribuições</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Não</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>08</strong>
                    </p>
                  </td>
                  <td width={508}>
                    <p>
                      <strong>Operação sem Incidência das Contribuições</strong>{" "}
                      (Este CST também será utilizado para as receitas não
                      consideradas como faturamento no regime cumulativo;
                      exportação de mercadorias)
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Não</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>09</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Operação com Suspensão das Contribuições</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Não</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>49</strong>
                  </td>
                  <td>
                    <strong>Outras Operações de Saída</strong> (Utilização deste
                    CST para todas as saídas não representativas de receitas
                    tais como: remessa para industrialização; remessa para
                    conserto; remessa para demonstração; devolução de compras;
                    transferências entre matriz e filiais…)
                  </td>
                  <td width={109}>
                    <p>
                      <strong>Depende</strong>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <span>
              <strong> CST Operações de Entrada</strong>
            </span>
            <h2>
              <strong>
                CST – Entradas Créditos Básicos Regime Não Cumulativo
              </strong>
            </h2>
            <p>
              Estes CST deverão ser utilizados nas aquisições efetuadas por
              pessoas jurídicas sujeitas ao regime de apuração do PIS/Pasep e da
              COFINS na sistemática da não cumulatividade, conforme cada
              situação, em relação aos créditos básicos (alíquotas de 1,65% e
              7,6%, respectivamente):
            </p>
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Descrição</th>
                  <th>Incidência do Imposto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <strong>50 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Operação com Direito a Crédito</strong> – Vinculada
                    Exclusivamente a Receita Tributada no Mercado Interno
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>51 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Operação com Direito a Crédito</strong> – Vinculada
                    Exclusivamente a Receita Não Tributada no Mercado Interno
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>52 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Operação com Direito a Crédito</strong> – Vinculada
                    Exclusivamente a Receita de Exportação
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>53 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Operação com Direito a Crédito</strong> – Vinculada
                    a Receitas Tributadas e Não-Tributadas no Mercado Interno
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>54 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Operação com Direito a Crédito</strong>– Vinculada a
                    Receitas Tributadas no Mercado Interno e de Exportação
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>55 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Operação com Direito a Crédito</strong>– Vinculada a
                    Receitas Não-Tributadas no Mercado Interno e de Exportação
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>56 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Operação com Direito a Crédito</strong> – Vinculada
                    a Receitas Tributadas e Não-Tributadas no Mercado Interno, e
                    de Exportação
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2>
              <strong>
                CST – Entradas Créditos Presumidos Regime Não Cumulativo
              </strong>
            </h2>
            <p>
              Estes CST deverão ser utilizados nas aquisições efetuadas por
              pessoas jurídicas sujeitas ao regime de apuração do PIS/Pasep e da
              COFINS na sistemática da não cumulatividade, conforme cada
              situação, em relação aos créditos presumidos (as alíquotas são
              variáveis conforme a previsão da legislação específica que
              estabeleceu o crédito presumido):
            </p>
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Descrição</th>
                  <th>Incidência do Imposto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <strong>60 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Crédito Presumido</strong>
                    – Operação de Aquisição Vinculada Exclusivamente
                    <br />a Receita Tributada no Mercado Interno
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>61 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Crédito Presumido</strong>
                    – Operação de Aquisição Vinculada Exclusivamente
                    <br />a Receita Não-Tributada no Mercado Interno
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>62 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Crédito Presumido</strong>
                    – Operação de Aquisição Vinculada Exclusivamente
                    <br />a Receita de Exportação
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>63 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Crédito Presumido</strong>
                    – Operação de Aquisição Vinculada a Receitas
                    <br />
                    Tributadas e Não-Tributadas no Mercado Interno
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>64 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Crédito Presumido</strong>
                    – Operação de Aquisição Vinculada a Receitas
                    <br />
                    Tributadas no Mercado Interno e de Exportação
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>65 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Crédito Presumido</strong>
                    – Operação de Aquisição Vinculada a Receitas
                    <br />
                    Não-Tributadas no Mercado Interno e de Exportação
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>66 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Crédito Presumido</strong>– Operação de Aquisição
                    Vinculada a Receitas Tributadas e Não-Tributadas no Mercado
                    Interno, e de Exportação
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>67 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Crédito Presumido</strong>– Outras Operações
                  </td>
                  <td>
                    <p>
                      <strong>Sim</strong>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2>
              <strong>
                CST – Entradas Créditos Presumidos Regime Não Cumulativo
              </strong>
            </h2>
            <p>
              Estes CST deverão ser utilizados nas aquisições efetuadas por
              pessoas jurídicas sujeitas ao regime de apuração do PIS/Pasep e da
              COFINS na sistemática da não cumulatividade, conforme cada
              situação, em relação aos créditos presumidos (as alíquotas são
              variáveis conforme a previsão da legislação específica que
              estabeleceu o crédito presumido):
            </p>
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Descrição</th>
                  <th>Incidência do Imposto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <strong>70 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Operação de Aquisição sem Direito a Crédito</strong>
                    <br />
                    (As aquisições de produtos sujeitos a tributação monofásica,
                    <br />
                    destinados a revenda serão ser informados neste CST)
                  </td>
                  <td>
                    <p>
                      <strong>Não</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>71 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Operação de Aquisição com Isenção</strong>
                  </td>
                  <td width={117}>
                    <p>
                      <strong>Não</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>72 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Operação de Aquisição com Suspensão</strong>
                  </td>
                  <td>
                    <p>
                      <strong>Não</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>73 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Operação de Aquisição a Alíquota Zero</strong>
                  </td>
                  <td>
                    <p>
                      <strong>Não</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>74 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>
                      Operação de Aquisição sem Incidência da Contribuição
                    </strong>
                  </td>
                  <td>
                    <p>
                      <strong>Não</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>75 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>
                      Operação de Aquisição por Substituição Tributária
                    </strong>
                  </td>
                  <td>
                    <p>
                      <strong>Não</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>98 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Outras Operações de Entrada</strong>
                    <br />
                    (Nestes CST serão informadas as entradas decorrentes de
                    retorno de
                    <br />
                    remessa para industrialização, conserto, demonstração…)
                  </td>
                  <td>
                    <p>
                      <strong>Não</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>99 </strong>
                    </p>
                  </td>
                  <td>
                    <strong>Outras Operações</strong>
                  </td>
                  <td>
                    <p>
                      <strong>Não</strong>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              <strong>Nota1:</strong> A pessoa jurídica optante pelo lucro
              presumido, não informará dados referente às suas entradas na
              EFD-Contribuições.
            </p>
            <p>
              <strong>Nota2:</strong> A pessoa jurídica sujeita a sistemática de
              não cumulatividade, somente fará a escrituração referente às suas
              aquisições geradoras de créditos, as demais aquisições estão
              dispensadas dos seus registros.
            </p>

            <h2>
              <strong>Simples Nacional – CST PIS/Pasep e COFINS NFe</strong>
            </h2>
            <p>
              O CST PIS e Cofins a ser informado quando da emissão de NF-e, por
              empresas optantes do Simples Nacional, será:
            </p>

            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <strong>49</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>
                        Vendas tributadas no regime do Simples Nacional
                        (Recolhimento único)
                      </strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>02</strong>
                    </p>
                  </td>
                  <td width={700}>
                    <p>
                      <strong>
                        Fabricação de produtos sujeitos a tributação monofásicas
                        (medicamentos, autopeças)
                      </strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>04</strong>
                    </p>
                  </td>
                  <td width={700}>
                    <p>
                      <strong>
                        Revenda de produtos sujeitos a tributação monofásicas
                        (Combustíveis, bebidas frias, medicamentos, autopeças,
                        etc.)
                      </strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>05</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>
                        Tributadas no regime de substituição tributária
                        (cigarros, motocicletas, maquinas agrícolas
                        auto-propulsadas).
                      </strong>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <strong>08</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>
                        Vendas para exportação e a Pessoa Jurídica comercial
                        exportadora, com o fim específico de exportação
                      </strong>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <span>
              <strong> NOTAS</strong>
            </span>
            <h3>
              <strong>NOTAS:</strong>
            </h3>
            <ul>
              <li>
                <p>
                  As CST´s 49 e 99 podem ou não ser marcadas, depende da
                  situação;
                </p>
              </li>
              <li>
                <p>
                  AS CST´s de 60 a 67 não estão vinculadas ao regime da empresa
                  Lucro Presumido ou real.
                </p>
              </li>
              <li>
                <p>
                  Geralmente a CST de PIS e COFINS são iguais. Somente não serão
                  iguais por via de força de lei como ocorreu com a compra de
                  britas, onde na entrada as CST´s eram diferentes.
                </p>
              </li>
            </ul>
            <h2>
              <strong>Grupos da CST de PIS/COFINS</strong>
            </h2>
            <p>
              As CST’s de PIS e da COFINS possuem algumas particularidades em
              relação as demais CST’s pois são divididas em alguns grupos.
            </p>
            <h2>
              <strong>Operação tributável com alíquota básica (CST 01)</strong>
            </h2>
            <p>
              Nas operações que se enquadram neste CST 01, são utilizadas
              alíquotas conforme a modalidade adotada pela pessoa jurídica,
              sendo:
            </p>
            <ul>
              <li>
                <p>Modalidade cumulativa- Pis 0,65% e Cofins 3%;</p>
              </li>
              <li>
                <p>Modalidade não cumulativa- Pis 1,65% e Cofins 7,6%</p>
              </li>
            </ul>
            <h2>
              <strong>
                Operação tributável com alíquota diferenciada (CST 02)
              </strong>
            </h2>
            <p>
              Os produtos sujeitos a incidência monofásica (recolhimento
              concentrado) de Pis e Cofins no fabricante ou importador devem
              utilizar o CST 02. Os produtos sujeitos a utilização deste CST,
              são: combustíveis, fármacos e perfumarias, veiculos, maquinas e
              autopeças bebidas frias.
            </p>
            <p>
              Podemos citar como exemplo produtos sujeitos a este CST, quando
              vendidos pelo fabricante ou importador:
            </p>
            <ul>
              <li>
                <p>COMBUSTÍVEIS;</p>
              </li>
              <li>
                <p>FÁRMACOS E PERFUMARIAS;</p>
              </li>
              <li>
                <p>VEÍCULOS, MAQUINAS E AUTOPEÇAS;</p>
              </li>
            </ul>
            <h2>
              <strong>
                Operação tributável com alíquota por unidade de medida de
                produto (CST 03)
              </strong>
            </h2>
            <p>
              Dentre os produtos sujeitos a incidência monofásica, temos aqueles
              que estão sujeitos ao recolhimento de Pis e Cofins por unidade de
              medida. Os produtos sujeitos ao recolhimento por unidade de medida
              são combustíveis e álcool, embalagens de bebidas frias, bebidas
              frias.
            </p>
            <p>
              Em relação aos produtos que se enquadram no CST 03, podes citar:
            </p>
            <ul>
              <li>
                <p>COMBUSTÍVEIS;</p>
              </li>
              <li>
                <p>EMBALAGENS DE BEBIDAS FRIAS;</p>
              </li>
              <li>
                <p>BEBIDAS FRIAS – previstas no Decreto 6.707/2007;</p>
              </li>
              <li>
                <p>PAPEL IMUNE</p>
              </li>
            </ul>
            <h2>
              <strong>
                Operação tributável monofásica – revenda a alíquota zero (CST
                04)
              </strong>
            </h2>
            <p>
              Na comercialização dos produtos relacionados neste item, OPERAÇÃO
              TRIBUTÁVEL COM ALÍQUOTA DIFERENCIADA (CST 02) e também OPERAÇÃO
              TRIBUTÁVEL COM ALÍQUOTA POR UNIDADE DE MEDIDA DE PRODUTO (CST 03),
              quando realizada por pessoa jurídica não se enquadrar na condição
              de fabricante, industrial, importador ou a estes equiparados, será
              utilizado o CST 04 (Operação Tributável Monofásica – Revenda a
              Alíquota Zero).
            </p>
            <h2>
              <strong>
                Operação tributável por substituição tributária (CST 05)
              </strong>
            </h2>
            <p>
              Nos produtos sujeitos a substituição tributária de PIS e COFINS,
              deverá o fabricante ou importador utilizar o CST 05. A
              Substituição Tributária de PIS e COFINS é o regime no qual é
              atribuída a responsabilidade do recolhimento destas contribuições
              ao fabricante ou importador. A contribuição recolhida pelo
              fabricante ou importador é maior, antecipando o recolhimento
              devido em relação às operações seguintes.
            </p>
            <p>
              Exemplo de produtos sujeitos a este CST, quando vendidos pelo
              fabricante ou importador:
            </p>
            <ul>
              <li>
                <p>CIGARROS E CIGARRILHAS;</p>
              </li>
              <li>
                <p>MOTOCICLETAS;</p>
              </li>
              <li>
                <p>MAQUINAS AGRICOLAS AUTOPROPULSADAS;</p>
              </li>
            </ul>
            <h2>
              <strong>Operação tributável a alíquota zero (CST 06)</strong>
            </h2>
            <p>
              Os produtos sujeitos a incidência da alíquota zero do PIS e COFINS
              e que utilizarão o CST 06 são geralmente INSUMOS E PRODUTOS
              AGROPECUÁRIOS:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableConfins;
