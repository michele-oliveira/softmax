import register from "../../assets/images/manual/cad_pro_MP.png";
import register1 from "../../assets/images/manual/cad_pro_mp_menu.jpg";
import register2 from "../../assets/images/manual/cad_pro_mp_guias.png";

function RegisterMP() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Cadastro de Matéria Prima (MP)
      </h1>
      <p className="my-6 text-base lg:max-w-4xl">
        Matéria-prima é um componente essencial para a fabricação de mercadorias
        finais ou produtos intermediários. Pode ter origem natural ou ser
        processada.
      </p>
      <img
        className="w-full max-w-3xl object-contain"
        src={register}
        alt="Cadastro MP - Matéria Prima"
      />

      <img
        className="w-full max-w-3xl object-contain py-10"
        src={register1}
        alt="Cadastro MP - Matéria Prima"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-disc list-inside text-base space-y-2">
          <li>
            <b>Botão Incluir -</b> Criar Novo lançamento;
          </li>
          <li>
            <b>Botão Alterar -</b> Alterar / Editar um lançamento salvo;
          </li>
          <li>
            <b>Botão cancelar / Excluir -</b> Botão cancelar;
          </li>
          <li>
            <b>Botão Salvar -</b> Salvar / Gravar lançamento
          </li>
          <li>
            <b>Botão Cancelar / Abortar -</b> Cancela a operação vigente, ignora
            alterações e retorno ao estado anterior;
          </li>
          <li>
            <b>Botão Navegação ;</b>
          </li>
          <li>
            <b>Botão Navegação ;</b> 
          </li>
          <li>
            <b>Botão Navegação ;</b> 
          </li>
          <li>
            <b>Botão Navegação ;</b> 
          </li>
          <li>
            <b>Botão de emissão de relatórios; </b>
          </li>
          <li>
            <b>Botão de gerenciador de arquivos ;</b> 
          </li>
          <li>
            <b>Botão de cadastro de Fornecedores;</b> 
          </li>
          <li>
            <b>Botão de etiquetas;</b> 
          </li>
          <li>
            <b>Botão de réplica ;</b> 
          </li>
        </ol>
      </div>

      <img
        className="w-full max-w-3xl object-contain"
        src={register2}
        alt="Cadastro MP - Matéria Prima"
      />

<div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-disc list-inside text-base space-y-2">
          <li>
            <b>Guia Cadastro – </b> Cadastro principal com dados da Matéria-prima;
          </li>
          <li>
            <b>Guia Especificações –</b> Informações Complementares;
          </li>
          <li>
            <b>Guia  Histórico – </b> Cadastro de observações;
          </li>
          <li>
            <b>Guia Fornecedores;</b>
          </li>
          <li>
            <b>Guia Estoque;</b>
          </li>
          <li>
            <b>Guia Lotes – </b>Controle de Lotes
          </li>
          <li>
            <b>Guia Requisitos;</b> 
          </li>
          <li>
            <b>Guia utilização em Fórmula; </b> 
          </li>
          <li>
            <b>Guia Compras – </b> lista de Compras;
          </li>
          <li>
            <b>Guia Empenhos – </b>lista de produtos que estão em Produção;
          </li>
          <li>
            <b>Guia indicações/ Aplicações;</b> 
          </li>
          <li>
            <b>Botão de cadastro de Fornecedores;</b> 
          </li>
          <li>
            <b>Guia teste de Matéria-prima;</b> 
          </li>
          <li>
            <b>Guia Cotação – </b> Guia com Cotações com Fornecedores;
          </li>
        </ol>
      </div>
    </div>
  );
}

export default RegisterMP;
