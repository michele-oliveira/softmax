import ensaio from "../../assets/images/manual/cad_pro_DSP.png";

function ProductDevelopment() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Desenvolvimento de Produto/Ensaio
      </h1>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-disc list-inside text-base space-y-2">
          <li>Módulo destinado ao desenvolvimento de novos produtos (ensaios);</li>
          <li>Identificação de composição de produto (fórmula de produtos);</li>
          <li>Apuração de custos de produção;</li>
          <li>Histórico dos testes;</li>
          <li>Em cada teste, gera sequência de testes;</li>
          <li>Após aprovação, exporta dados de desenvolvimento (fórmulas e custos) para produto final;</li>
          <li>Vínculo com produto final, fácil localização do desenvolvimento anexado ao produto;</li>
          <li>Anexador de documentos (fotos, imagens, PDFs, documentos em geral);</li>
          <li>Vinculado ao módulo de cadastro de amostras (identificar e etiquetar amostras de clientes);</li>
        </ul>
      </div>
      <img
        className="w-full max-w-3xl object-contain"
        src={ensaio}
        alt="Desenvolvimento de Produtos e Ensaios"
      />
    </div>
  );
}

export default ProductDevelopment;
