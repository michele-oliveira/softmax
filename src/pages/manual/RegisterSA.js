import ensaio from "../../assets/images/manual/cad_pro_SA.png";
import ensaio1 from "../../assets/images/manual/cad_pro_SA.menu.png";
import ensaio2 from "../../assets/images/manual/cad_pro_SA.guias.png";

function RegisterSA() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Cadastro de Produtos semi-acabados (SA)
      </h1>
      <img
        className="w-full max-w-3xl object-contain py-10"
        src={ensaio}
        alt="Cadastro de produtos semi-acabados"
      />
      <img
        className="w-full max-w-3xl object-contain py-6"
        src={ensaio1}
        alt="Cadastro de produtos semi-acabados"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <strong>Botão Incluir -</strong> Criar Novo lançamento;
          </li>
          <li>
            <strong>Botão Alterar -</strong> Alterar / Editar um lançamento
            salvo;
          </li>
          <li>
            <strong>Botão cancelar / Excluir -</strong> Botão mult. opções,
            Remove baixa de empenho, cancela lançamento, exclui lançamento;
          </li>
          <li>
            <strong>Botão Salvar -</strong> Salvar / Gravar lançamento;
          </li>
          <li>
            <strong>Botão Cancelar / Abortar -</strong> Cancela a operação
            vigente, ignora alterações e retorno ao estado anterior;
          </li>
          <li>
            <strong>Botão Réplica de produto -</strong> Abre módulo de pedido de
            venda;
          </li>
          <li>
            <strong>Botão de importar cadastro -</strong> Abre módulo de
            cadastro de produtos;
          </li>
          <li>
            <strong>Botão de cadastro de amostra;</strong>
          </li>
          <li>
            <strong>Botão de cadastro de desenvolvimento de produtos;</strong>
          </li>
          <li>
            <strong>Botão de matéria prima;</strong>
          </li>
          <li>
            <strong>Botão de etiquetas;</strong>
          </li>
          <li>
            <strong>
              Botão de pré-visualização/impressão de certificado de análise;
            </strong>
          </li>
          <li>
            <strong>Botão de emissão de relatórios;</strong>
          </li>
          <li>
            <strong>Botão de gerenciador de arquivos;</strong>
          </li>
          <li>
            <strong>Botão de abrir Produtos;</strong>
          </li>
        </ol>
      </div>
      <img
        className="w-full max-w-3xl object-contain py-6"
        src={ensaio2}
        alt="Cadastro de produtos semi-acabados"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <strong>Guia Cadastro -</strong> Cadastro principal com dados dos
            produtos acabados ( produtos finais, já produzidos);
          </li>
          <li>
            <strong>Guia Inf. adicionais -</strong> Informações Complementares;
          </li>
          <li>
            <strong>Guia Fornecedores;</strong>
          </li>
          <li>
            <strong>Guia Orientações Técnicas;</strong>
          </li>
          <li>
            <strong>Guia Fórmula -</strong> A formulação é o processo em que
            combinamos uma variedade de diversos produtos ( MP,SA,PA) em
            proporções precisas a fim de criar um produto específico;
          </li>
          <li>
            <strong>Guia Custos de Produção - </strong>Os custos de produção
            incluem todas as despesas necessárias para fabricar um produto ou
            prestar um serviço, desde o custo da matéria-prima até o custo da
            mão-de-obra;
          </li>
          <li>
            <strong>Guia Formação de preço - </strong>A formação do preço de
            venda é um processo de análise e formulação do preço de produtos ou
            serviços, através da contabilização de todos os custos e despesas da
            empresa e na análise de preço absorvível pelo mercado. O preço de
            venda ideal está entre o preço que cobre as despesas e custos do
            negócio, atende a margem de lucro desejada e é aceito pelo mercado;
          </li>
          <li>
            <strong>Guia Histórico;</strong>
          </li>
          <li>
            <strong>Guia Estoque;</strong>
          </li>
          <li>
            <strong>Guia Especificação Técnica;</strong>
          </li>
          <li>
            <strong>Guia Empenho -</strong>lista de produtos que estão em
            Produção;
          </li>
          <li>
            <strong>Guia Lotes - </strong>Controle de Lotes;
          </li>
          <li>
            <strong>Guia Compras - </strong>Guia com lista de produtos já
            adquiridos;
          </li>
          <li>
            <strong>Guia Mapa de Produção - </strong>O Mapa de Produção é uma
            ferramenta também conhecida como Planejamento e Controle de Produção
            (PCP) a fim de planejar a produção deste a compra das matérias
            primas, a utilização dos equipamentos, recursos humanos,
            dimensionamento, estrutura de produção, quantidade a ser produzida
            com base nas vendas ou conforme a necessidade e quantidade que
            atenderá ao cliente;
          </li>
          <li>
            <strong>Guia RNC - </strong>As RNC registram os desvios ocorridos na
            produção dos processos, produtos ou serviços e é uma ferramenta
            básica para indicar os pontos fracos e fortes da sua empresa;
          </li>
          <li>
            <strong>Guia Indicações/Aplicações;</strong>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default RegisterSA;