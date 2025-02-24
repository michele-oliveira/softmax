import NF from "../../assets/images/manual/nfe_icone.png";
import mapa1 from "../../assets/images/manual/mov_nfe.png";

function InvoiceIssue() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual Softmax - Emissão de Nota Fiscal eletrônica
      </h1>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        Nossas soluções tem a proposta de otimizar processos, reduzir custos e
        gerar maior rentabilidade ,em anexo encaminho descritivo de Nosso
        Software MaxControl.
      </p>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        Sistema <b>ERP</b> Sob Medida para sua empresa.
      </p>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-disc list-inside text-base space-y-2">
          <li>
            <b>Emissão de Nota fiscal eletrônica:</b> Módulo integrado, rápido e
            fácil.
          </li>
          <li>
            <b>Melhorar a gestão de seu negócio.</b>
          </li>
          <li>
            <b>Otimização das atividades administrativas.</b>
          </li>
          <li>
            <b>PCP – Planejamento e Controle de produção.</b>
          </li>
          <li>
            <b>MRP – Planejamento dos recursos de Manufatura.</b>
          </li>
          <li>
            <b>
              Mais praticidade, desempenho e produtividade para sua empresa.
            </b>
          </li>
        </ul>
      </div>
      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        Contamos com módulos de administração e foco na área produtiva da
        empresa.
      </p>
      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        Nosso software visa a integração de todos os departamentos da Empresa.
      </p>
      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        Com o <b>Emissor de Nota fiscal mais simples e rápido do Mercado</b>,
        focado na facilidade de uso. Dispensamos o departamento de Faturamento.
      </p>
      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        Uma vez cadastrado e estabelecido <b>o perfil tributário</b> da empresa,
        o próprio departamento de vendas após emitir o pedido, e esse:
      </p>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className=" list-inside text-base space-y-2">
          <li>
            <b>Análise Crítica:</b> Com liberação, validação e assinatura digital do
        Gerente.
          </li>
          <li>
            <b>Aprovado pelo Financeiro:</b> Onde se analisa o perfil do Cliente e
        limite de crédito.
          </li>
          <li>
            <b>Romaneio:</b> Liberação dos itens pela expedição.
          </li>
        </ul>
      </div>
      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        <b>Com apenas um clique se emite a Nota Fiscal.</b>
      </p>
      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        Nosso processo fabril visa o controle da Produção e gerenciamento das
        Matérias Primas e gestão de Compras.
      </p>
      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        Temos módulo online para emissão de pedido, orçamento e cadastro de
        cliente através de Celular/Tablet/PC.
      </p>
      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        Conheça nossas soluções para PCP, mapa de produção e formulação de
        produtos.
      </p>
      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        Acesse nosso site:{" "}
        <a href="/">www.softmax.com.br</a>
      </p>
      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        Para Emitir NF-e a Partir do pedido de venda, clica no ícone. A tela a
        seguir será aberta com os dados da NF-e.
      </p>

      <img
        className="w-24 max-w-3xl object-contain"
        src={NF}
        alt="Mapa de produção"
      />
      <img
        className="pt-6 w-full max-w-3xl object-contain"
        src={mapa1}
        alt="Mapa de produção"
      />
      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        Clique em faturar e em seguida confirmar para emissão da Nf-e.
      </p>
      <p className="my-4 text-sm sm:text-base lg:max-w-4xl">
        Todos os processos são automáticos:
      </p>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-disc list-inside text-base space-y-2">
          <li>
            <b>Baixa de estoque</b>
          </li>
          <li>
            <b>Financeiro</b>
          </li>
          <li>
            <b>Comissão</b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InvoiceIssue;
