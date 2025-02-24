import register from "../../assets/images/manual/cad_pro_PA.png";
import registerPA from "../../assets/images/manual/cad_pro_PA_Formula.png";
import register2 from "../../assets/images/manual/cad_pro_PA_FormulaTree.png";
import register3 from "../../assets/images/manual/cad_pro_PA_FPV.png";
import register4 from "../../assets/images/manual/cad_pro_PA_menu.jpg";
import register5 from "../../assets/images/manual/cad_pro_pa_guias.png";

function RegisterPA() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Cadastro de Produto Acabado (PA)
      </h1>
      <p className="py-6 text-base">
        Cadastro principal com dados dos Produtos Acabados PA ( produtos finais,
        já produzidos) pronto para venda.
      </p>
      <img
        className="w-full max-w-3xl object-contain"
        src={register}
        alt="Cadastro PA - Produto Acabado"
      />

      <p className="py-4 text-lg font-bold">Fórmula (Modelo Grade)</p>
      <img
        className="w-full max-w-3xl object-contain"
        src={registerPA}
        alt="Cadastro PA - Produto Acabado"
      />
      <p className="py-4 text-base">
        Lista de matérias-primas que compõem o produto. Nesta tela obtem-se o
        valor de custo das matérias-primas envolvidas.
      </p>

      <p className="py-4 text-lg font-bold">Fórmula (Modelo Árvore)</p>

      <img
        className="w-full max-w-3xl object-contain"
        src={register2}
        alt="Cadastro PA - Produto Acabado"
      />

      <p className="py-4 text-lg font-bold">Formação de Preço</p>

      <img
        className="w-full max-w-3xl object-contain"
        src={register3}
        alt="Cadastro PA - Produto Acabado"
      />

      <p className="pt-10 text-lg font-bold">Quanto custa o seu produto?</p>
      <p className="my-4 text-base lg:max-w-4xl">Com o MaxControl, você tem acesso a formação de preço detalhada de
            seu produto final, associado com a formulação do produto (listagem
            das matérias primas envolvidas no processo de produção - citada
            acima) disponibiza-se:</p>

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-disc list-inside text-base space-y-2">
          <li>Custos de matérias primas;</li>
          <li>Custos por equipamentos/processos;</li>
          <li>Outros custos;</li>
        </ul>
      </div>

      <img
        className="w-full max-w-3xl object-contain"
        src={register4}
        alt="Cadastro PA - Produto Acabado"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <b>Botão Incluir -</b> Criar Novo lançamento;
          </li>
          <li>
            <b>Botão Alterar -</b> Alterar / Editar um lançamento salvo;
          </li>
          <li>
            <b>Botão cancelar / Excluir -</b> Botão mult. opções, Remove baixa
            de empenho, cancela lançamento, exclui lançamento;
          </li>
          <li>
            <b>Botão Salvar -</b> Salvar / Gravar lançamento;
          </li>
          <li>
            <b>Botão Cancelar / Abortar -</b> Cancela a operação vigente, ignora
            alterações e retorno ao estado anterior;
          </li>
          <li>
            <b>Botão Réplica de produto -</b> Abre módulo de pedido de venda;
          </li>
          <li>
            <b>Botão de importar cadastro -</b> Abre módulo de cadastro de
            produtos;
          </li>
          <li>
            <b>Botão de cadastro de amostra;</b>
          </li>
          <li>
            <b>Botão de cadastro de desenvolvimento de produtos;</b>
          </li>
          <li>
            <b>Botão de matéria prima;</b>
          </li>
          <li>
            <b>Botão de etiquetas;</b>
          </li>
          <li>
            <b>
              Botão de pré-visualização/impressão de certificado de análise;
            </b>
          </li>
          <li>
            <b>Botão de emissão de relatórios;</b>
          </li>
          <li>
            <b>Botão de gerenciador de arquivos;</b>
          </li>
          <li>
            <b>Botão de lista de fórmulas;</b>
          </li>
          <li>
            <b>Botão de abrir Produtos;</b>
          </li>
          <li>
            <b>Botão de inventário;</b>
          </li>
          <li>
            <b>Botão de lista de Produtos x Moldes;</b>
          </li>
        </ol>
      </div>

      <img
        className="w-full max-w-3xl object-contain"
        src={register5}
        alt="Cadastro PA - Produto Acabado"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <b>Guia Cadastro -</b> Cadastro principal com dados dos produtos
            acabados ( produtos finais, já produzidos);
          </li>
          <li>
            <b>Guia Inf. adicionais -</b> Informações Complementares;
          </li>
          <li>
            <b>Guia Orientações Técnicas;</b>
          </li>
          <li>
            <b>Guia Histórico -</b> Cadastro de observações;
          </li>
          <li>
            <b>Guia Estoque;</b> 
          </li>
          <li>
            <b>Guia Fórmula -</b> A formulação é o processo em que combinamos uma variedade de diversos produtos ( MP,SA,PA) em proporções precisas a fim de criar um produto específico;
          </li>
          <li>
            <b>Guia Formação de preço - </b>A formação do preço de venda é um processo de análise e formulação do preço de produtos ou serviços, através da contabilização de todos os custos e despesas da empresa e na análise de preço absorvível pelo mercado. O preço de venda ideal está entre o preço que cobre as despesas e custos do negócio, atende a margem de lucro desejada e é aceito pelo mercado;
          </li>
          <li>
            <b>Guia Custos de Produção - </b>Os custos de produção incluem todas as despesas necessárias para fabricar um produto ou prestar um serviço, desde o custo da matéria-prima até o custo da mão-de-obra;
          </li>
          <li>
            <b>Guia Produção - </b> Guia com dados de produtos em produção;
          </li>
          <li>
            <b>Guia Reajuste de preço;</b>
          </li>
          <li>
            <b>
            Guia Empenho -
            </b>lista de produtos que estão em Produção;
          </li>
          <li>
            <b>Guia Lotes - </b>Controle de Lotes;
          </li>
          <li>
            <b>Guia Pedidos - </b>Guia com lista de produtos já adquiridos;
          </li>
          <li>
            <b>Guia Mapa de Produção - </b>O Mapa de Produção é uma ferramenta também conhecida como Planejamento e Controle de Produção (PCP) a fim de planejar a produção deste a compra das matérias primas, a utilização dos equipamentos, recursos humanos, dimensionamento, estrutura de produção, quantidade a ser produzida com base nas vendas ou conforme a necessidade e quantidade que atenderá ao cliente;
          </li>
          <li>
            <b>Guia RNC - </b>As RNC registram os desvios ocorridos na produção dos processos, produtos ou serviços e é uma ferramenta básica para indicar os pontos fracos e fortes da sua empresa;
          </li>
          <li>
            <b>Guia Fornecedores;</b>
          </li>
          <li>
            <b>Guia Compras - </b>lista de Compras;
          </li>
          <li>
            <b>Guia Imagines/Fotos; </b>
          </li>
          <li>
            <b>Guia indicações/ Aplicações;</b>
          </li>
          <li>
            <b>Guia Cotação - </b>Guia com Cotações abertas pelo cliente;
          </li>
          <li>
            <b>Guia Local de Estoque;</b>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default RegisterPA;
