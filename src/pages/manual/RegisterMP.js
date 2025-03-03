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
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <strong>Botão Incluir -</strong> Criar Novo lançamento;
          </li>
          <li>
            <strong>Botão Alterar -</strong> Alterar / Editar um lançamento
            salvo;
          </li>
          <li>
            <strong>Botão cancelar / Excluir -</strong> Botão cancelar;
          </li>
          <li>
            <strong>Botão Salvar -</strong> Salvar / Gravar lançamento
          </li>
          <li>
            <strong>Botão Cancelar / Abortar -</strong> Cancela a operação
            vigente, ignora alterações e retorno ao estado anterior;
          </li>
          <li>
            <strong>Botão Navegação ;</strong>
          </li>
          <li>
            <strong>Botão Navegação ;</strong>
          </li>
          <li>
            <strong>Botão Navegação ;</strong>
          </li>
          <li>
            <strong>Botão Navegação ;</strong>
          </li>
          <li>
            <strong>Botão de emissão de relatórios; </strong>
          </li>
          <li>
            <strong>Botão de gerenciador de arquivos ;</strong>
          </li>
          <li>
            <strong>Botão de cadastro de Fornecedores;</strong>
          </li>
          <li>
            <strong>Botão de etiquetas;</strong>
          </li>
          <li>
            <strong>Botão de réplica ;</strong>
          </li>
        </ol>
      </div>

      <img
        className="w-full max-w-3xl object-contain"
        src={register2}
        alt="Cadastro MP - Matéria Prima"
      />

      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <strong>Guia Cadastro – </strong> Cadastro principal com dados da
            Matéria-prima;
          </li>
          <li>
            <strong>Guia Especificações –</strong> Informações Complementares;
          </li>
          <li>
            <strong>Guia Histórico – </strong> Cadastro de observações;
          </li>
          <li>
            <strong>Guia Fornecedores;</strong>
          </li>
          <li>
            <strong>Guia Estoque;</strong>
          </li>
          <li>
            <strong>Guia Lotes – </strong>Controle de Lotes
          </li>
          <li>
            <strong>Guia Requisitos;</strong>
          </li>
          <li>
            <strong>Guia utilização em Fórmula; </strong>
          </li>
          <li>
            <strong>Guia Compras – </strong> lista de Compras;
          </li>
          <li>
            <strong>Guia Empenhos – </strong>lista de produtos que estão em
            Produção;
          </li>
          <li>
            <strong>Guia indicações/ Aplicações;</strong>
          </li>
          <li>
            <strong>Botão de cadastro de Fornecedores;</strong>
          </li>
          <li>
            <strong>Guia teste de Matéria-prima;</strong>
          </li>
          <li>
            <strong>Guia Cotação – </strong> Guia com Cotações com Fornecedores;
          </li>
        </ol>
      </div>
    </div>
  );
}

export default RegisterMP;
