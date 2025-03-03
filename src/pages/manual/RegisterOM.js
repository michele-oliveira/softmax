import ensaio from "../../assets/images/manual/cad_pro_OM.png";
import ensaio1 from "../../assets/images/manual/cad_pro_OM.menu.png";
import ensaio2 from "../../assets/images/manual/cad_pro_OM.guias.png";

function RegisterOM() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Cadastro de Outros Materiais (OM)
      </h1>
      <img
        className="w-full max-w-3xl object-contain py-10"
        src={ensaio}
        alt="Desenvolvimento de Outros Materiais"
      />
      <img
        className="w-full max-w-3xl object-contain py-6"
        src={ensaio1}
        alt="Desenvolvimento de Outros Materiais"
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
            <strong>Botão Navegação;</strong>
          </li>
          <li>
            <strong>Botão Navegação;</strong>
          </li>
          <li>
            <strong>Botão Navegação;</strong>
          </li>
          <li>
            <strong>Botão Navegação;</strong>
          </li>
          <li>
            <strong>Botão de emissão de relatórios;</strong>
          </li>
          <li>
            <strong>Botão de cadastro de Fornecedores;</strong>
          </li>
        </ol>
      </div>
      <img
        className="w-full max-w-3xl object-contain py-6"
        src={ensaio2}
        alt="Cadastro de outros materiais"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ol className="list-decimal list-inside text-base space-y-2">
          <li>
            <strong>Guia Cadastro -</strong> Cadastro principal com dados dos
            produtos acabados ( produtos finais, já produzidos);
          </li>
          <li>
            <strong>Guia Especificações -</strong> Informações Complementares;
          </li>
          <li>
            <strong>Guia Fornecedores;</strong>
          </li>
          <li>
            <strong>Guia Estoque;</strong>
          </li>
          <li>
            <strong>Guia Especificação Técnica;</strong>
          </li>
          <li>
            <strong>Guia Lotes - </strong>Controle de Lotes;
          </li>
          <li>
            <strong>Guia Compras - </strong>Guia com lista de produtos já
            adquiridos;
          </li>
          <li>
            <strong>Conversão;</strong>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default RegisterOM;