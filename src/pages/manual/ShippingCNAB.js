import remessa from "../../assets/images/manual/mov_fn_cr_cnab002.png";
import remessa1 from "../../assets/images/manual/mov_fn_cr_cnab003.png";
import remessa2 from "../../assets/images/manual/mov_fn_cr_cnab005.png";
import remessa3 from "../../assets/images/manual/mov_fn_cr_cnab008.jpg";
import remessa4 from "../../assets/images/manual/mov_fn_cr_cnab009.jpg";
import remessa5 from "../../assets/images/manual/mov_fn_cr_cnab012.png";
import remessa6 from "../../assets/images/manual/mov_fn_cr_cnab013.png";
import remessa7 from "../../assets/images/manual/mov_fn_cr_cnab016.png";
import remessa8 from "../../assets/images/manual/mov_fn_cr_cnab017.png";
import remessa9 from "../../assets/images/manual/mov_fn_cr_cnab024.png";
import remessa10 from "../../assets/images/manual/mov_fn_cb.png";
import remessa11 from "../../assets/images/manual/mov_fn_cr_cnab026.jpg";
import remessa12 from "../../assets/images/manual/mov_fn_cr_cnab027.png";
import remessa13 from "../../assets/images/manual/mov_fn_cr_cnab029.png";

function ShippingCNAB() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual de Operações - Remessa CNAB
      </h1>
      <p className="my-10 text-base sm:text-base lg:max-w-4xl">
        <strong>No módulo de cobrança, Contas a receber (F10)</strong>, filtre
        os títulos e selecione aqueles que deseja enviar para cobrança. Com o
        botão direito, acesse o menu de opções e clique em “Gerar Remessa”,
        conforme imagem <strong>(Figura 1)</strong>.
      </p>
      <p>Figura 1 - Módulo de Cobrança / Contas a receber</p>
      <img
        className="w-60 max-w-3xl object-contain py-10"
        src={remessa}
        alt="Remessa CNAB"
      />
      <p className="my-10 text-base sm:text-base lg:max-w-4xl">
        <strong>No Módulo a seguir, na tela de Remessa CNAB,</strong> selecione
        a Conta Bancária / Carteira para registro de títulos e clique em “Gerar
        Arquivo”. Conforme imagem <strong>(Figura 2).</strong>
      </p>
      <p>Figura 2 - Módulo de Remessa/ Boletos</p>
      <img
        className="w-full max-w-3xl object-contain py-10"
        src={remessa1}
        alt="Remessa CNAB"
      />
      <p className="my-10 text-base sm:text-base lg:max-w-4xl">
        <strong>Com o arquivo gerado,</strong> acesse o site do seu banco e, na
        opção de cobrança, selecione a opção de envio de arquivo CNAB, escolha o
        arquivo gerado e clique em adicionar.
      </p>
      <p>Figura 3 - Modelo de envio de arquivo CNAB (Sicoob)</p>
      <img
        className="w-full max-w-3xl object-contain py-10"
        src={remessa2}
        alt="Remessa CNAB"
      />
      <p>Figura 4 - Modelo de envio de arquivo CNAB (Sicredi)</p>
      <img
        className="w-full max-w-3xl object-contain py-10"
        src={remessa3}
        alt="Remessa CNAB"
      />
      <p>Figura 5 - Modelo de envio de arquivo CNAB (Bradesco)</p>
      <img
        className="w-full max-w-3xl object-contain py-10"
        src={remessa4}
        alt="Remessa CNAB"
      />
      <p className="my-10 text-base sm:text-base lg:max-w-4xl">
        <strong>Confirme a opção de envio.</strong> Esta operação visa enviar um
        lote de informações contendo todos os títulos ao banco.
      </p>

      <div className="flex flex-col items-start w-full max-w-3xl text-left">
        <ul className="list-decimal list-inside text-base space-y-2">
          <p className="text-base sm:text-base lg:max-w-4xl">
            <strong>Importante: </strong>para habilitar o envio de arquivo CNAB
            é necessário:
          </p>
          <li>
            Solicitar ao gerente da conta a liberação de envio de remessa com
            layout próprio;
          </li>
          <li>Solicitar dados para emissão do boleto / remessa; </li>
          <li>
            Homologação do arquivo, preenchimento e validação dos dados
            inseridos.{" "}
          </li>
        </ul>
      </div>
      <h2 className="mt-10 text-base sm:text-2xl font-bold text-slate-900">
        Baixa dos Títulos pelo Arquivo de Retorno
      </h2>
      <h3 className="mt-6 text-sm sm:text-2xl font-bold text-slate-900">
        Etapas do Processo
      </h3>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-decimal list-inside text-base space-y-2">
          <p className="text-base sm:text-base lg:max-w-4xl font-bold">
            1-Preparação para Importação
          </p>
          <li>
            <i>Recebimento do Arquivo:</i> Baixe o arquivo de retorno
            disponibilizado pelo banco.
          </li>
          <li>
            <i>Verificação do Layout:</i> Confirme se o arquivo está no layout
            correto (CNAB 240 ou CNAB 400), conforme configurado no ERP.{" "}
          </li>
          <p className="text-base sm:text-base lg:max-w-4xl font-bold">
            2-Importação do Arquivo no ERP
          </p>
          <li>
            <i>Acesso ao Módulo Financeiro:</i> Navegue até a seção de
            importação de arquivos de retorno.
          </li>
          <li>
            <i>Seleção do Arquivo:</i> Utilize a opção “Importar Arquivo” e
            selecione o arquivo CNAB baixado.
          </li>
          <li>
            <i>Configuração de Parâmetros:</i> Ajuste as configurações
            necessárias, como data de processamento e conta bancária associada.
          </li>
          <p className="text-base sm:text-base lg:max-w-4xl font-bold">
            3-Leitura e Validação dos Dados
          </p>
          <li>
            <i>Análise de Pré-Importação:</i> O sistema exibirá um resumo das
            transações a serem processadas.
          </li>
          <li>
            <i>Validação:</i> Verifique se há inconsistências ou erros que
            precisam ser corrigidos antes da execução.
          </li>
          <p className="text-base sm:text-base lg:max-w-4xl font-bold">
            4-Execução da Baixa Automática
          </p>
          <li>
            <i>Processamento:</i> Inicie o processo de baixa. O sistema
            atualizará automaticamente o status dos títulos conforme as
            informações do arquivo.
          </li>
          <li>
            <i>Confirmação:</i> Após a execução, revise os resultados para
            garantir que todos os títulos foram processados corretamente.
          </li>
          <p className="text-base sm:text-base lg:max-w-4xl font-bold">
            5-Relatórios e Conciliação
          </p>
          <li>
            <i>Geração de Relatórios:</i> Extraia relatórios de baixas efetuadas
            para documentação e auditoria.
          </li>
          <li>
            <i>Conciliação Bancária:</i> Utilize as informações atualizadas para
            conciliar as contas bancárias e identificar possíveis divergências.
          </li>
          <p className="text-base sm:text-base lg:max-w-4xl">
            <strong>
              6- O próximo passo é baixar o arquivo de Retorno CNAB no site do
              banco
            </strong>{" "}
            e salvar em uma pasta em seu computador.
          </p>
          <p className="text-base sm:text-base lg:max-w-4xl">
            <strong>
              7- Acesse o módulo de leitura de retorno (Remessa CNAB)
            </strong>
          </p>
          <p className="text-base sm:text-base lg:max-w-4xl">
            <i>Figura 6 -</i> Menu de leitura de retorno CNAB
          </p>
        </ul>
      </div>
      <img
        className="w-full max-w-3xl object-contain"
        src={remessa5}
        alt="Remessa CNAB"
      />
      <p className="py-6 text-base sm:text-base lg:max-w-4xl">
        <strong>
          8- No módulo de leitura, clique em “Ler Remessa” e localize o arquivo
          de retorno baixado.
        </strong>
      </p>
      <p className="text-base sm:text-base lg:max-w-4xl">
        <i>Figura 7 -</i> Módulo de leitura - Arquivo de Retorno CNAB
      </p>
      <img
        className="w-full max-w-3xl object-contain py-6"
        src={remessa6}
        alt="Remessa CNAB"
      />
      <p className="text-base sm:text-base lg:max-w-4xl">
        <strong>
          9- <strong>Ao selecionar o arquivo de remessa,</strong> o sistema faz
          a verificação e validação dos títulos.
        </strong>
      </p>
      <p className="text-base sm:text-base lg:max-w-4xl py-6">
        <i>Figura 8 -</i> Módulo de leitura de Arq Retorno - Tratamento de
        títulos
      </p>
      <img
        className="w-full max-w-3xl object-contain"
        src={remessa7}
        alt="Remessa CNAB"
      />
      <p className="py-6 text-base sm:text-base lg:max-w-4xl">
        <i>Figura 9 -</i> Módulo de leitura de Arq Retorno - Tratamento de
        títulos
      </p>
      <img
        className="w-full max-w-3xl object-contain"
        src={remessa8}
        alt="Remessa CNAB"
      />
      <p className="text-base sm:text-base lg:max-w-4xl py-6">
        <i>Figura 10 -</i> Tratamento de retorno - Alteração de vencimento
      </p>
      <img
        className="w-full max-w-3xl object-contain"
        src={remessa9}
        alt="Remessa CNAB"
      />
      <p className="text-base sm:text-base lg:max-w-4xl py-6">
        <i>Figura 11 -</i> Controle bancário
      </p>
      <img
        className="w-full max-w-3xl object-contain"
        src={remessa10}
        alt="Remessa CNAB"
      />
      <p className="text-base sm:text-base lg:max-w-4xl py-6">
        <i>Figura 12 -</i> Detalhes do título, histórico de lançamentos
      </p>
      <img
        className="w-full max-w-3xl object-contain"
        src={remessa11}
        alt="Remessa CNAB"
      />
      <p className="text-base sm:text-base lg:max-w-4xl py-6">
        <i>Figura 13 -</i> Impressão do Boleto
      </p>
      <img
        className="w-full max-w-3xl object-contain"
        src={remessa12}
        alt="Remessa CNAB"
      />
      <p className="text-base sm:text-base lg:max-w-4xl py-6">
        <i>Figura 14 -</i> Baixa do arquivo retorno CNAB
      </p>
      <img
        className="w-full max-w-3xl object-contain"
        src={remessa13}
        alt="Remessa CNAB"
      />
      <h2 className="mt-10 text-base sm:text-2xl font-bold text-slate-900">
        Vantagens do Uso de Arquivos CNAB
      </h2>

      <div className="flex flex-col items-start w-full max-w-3xl text-left">
        <ul className="list-disc list-inside text-base space-y-2">
          <p className="text-base sm:text-base lg:max-w-4xl py-6">
            O envio e a leitura de arquivos CNAB (Centro Nacional de Automação
            Bancária) facilitam significativamente os processos financeiros ao
            padronizar e automatizar a troca de informações entre as empresas e
            os bancos. Com o uso dos arquivos CNAB:
          </p>
          <li>
            <strong>Automatização de Processos:</strong> Permite que pagamentos,
            cobranças e outras transações sejam processados automaticamente pelo
            sistema ERP, reduzindo a necessidade de inserção manual de dados.
          </li>
          <li>
            <strong>Redução de Erros: </strong> A padronização minimiza
            inconsistências e erros comuns em processos manuais, aumentando a
            precisão das informações financeiras.
          </li>
          <li>
            <strong>Agilidade nas Operações: </strong> A comunicação direta e
            estruturada com os bancos acelera o processamento de transações,
            liberando recursos mais rapidamente.
          </li>
          <li>
            <strong>Facilidade na Conciliação Bancária: </strong> A leitura dos
            arquivos de retorno atualiza automaticamente o status dos títulos no
            sistema, simplificando a conciliação e identificação de
            discrepâncias.
          </li>
          <li>
            <strong>Melhor Controle Financeiro: </strong> Proporciona uma visão
            atualizada e precisa das movimentações financeiras, auxiliando na
            tomada de decisões estratégicas.
          </li>
          <p className="text-base sm:text-base lg:max-w-4xl py-6">
            Em resumo, o uso de arquivos CNAB otimiza a gestão financeira,
            economiza tempo e recursos, e melhora a eficiência operacional das
            empresas ao lidar com transações bancárias.
          </p>
        </ul>
      </div>
    </div>
  );
}

export default ShippingCNAB;
