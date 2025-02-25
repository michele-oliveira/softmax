import cheques from "../../assets/images/manual/mov_FN_CH.png";
import cheque1 from "../../assets/images/manual/mov_FN_CH_Consul.png";
import cheque2 from "../../assets/images/manual/mov_fn_ch_mnu.jpg";

function CheckControl() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Financeiro - Cadastro de Cheques (CH)
      </h1>
      <p className="mt-10 text-base sm:text-base lg:max-w-4xl">
        Para maior controle dos cheques recebidos em suas operações financeiras,
        o sistema <b>Maxcontrol</b>, oferece o modulo de cadastro de cheques.
      </p>
      <p className="my-4 text-base sm:text-base lg:max-w-4xl">
        O cheque ainda é um meio de pagamento muito usual no Brasil para as
        empresas. Portanto, se você trabalha com cheques, independentemente da
        quantidade, sabe que é de extrema importância ter o conhecimento de todo
        o caminho que ele percorreu até ser compensado no banco. Este controle
        muitas vezes é realizado por meio de planilhas ou até mesmo cadernetas,
        deixando o processo de rastreio lento e passível de erros.
      </p>
      <p className="mb-4 text-base sm:text-base lg:max-w-4xl">
        Com o nosso sistema de controle de cheques, é possível manter a
        rastreabilidade total de todos os cheques emitidos, recebidos e
        repassados, sendo necessário apenas informar o número do cheque. Assim,
        é possível ter conhecimento de informações como a data que o cheque foi
        recebido, quem emitiu o cheque, qual cliente te repassou e para quem e
        quando foi repassado por você.
      </p>
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-disc list-inside text-base space-y-2">
          <p>Neste módulo é possível:</p>
          <li>Incluir cheques, do emitente ou terceiros;</li>
          <li>Controle de data de vencimento (Bom para); </li>
          <li>Relatórios de cheques; </li>
          <li>Status de cheques (deposito, devolvido, pago a fornecedor); </li>
          <li>Modulo de devolução; </li>
          <li>Vinculado ao contas a receber; </li>
          <li>Vinculado à conta a pagar (repasse de cheques);</li>
          <li>Vinculado ao controle bancário.</li>
        </ul>
      </div>
      <img
        className="w-full max-w-3xl object-contain py-6"
        src={cheques}
        alt="Cadastro de cheques"
      />
      <img
        className="w-full max-w-3xl object-contain py-6"
        src={cheque2}
        alt="Cadastro de cheques"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <ul className="list-disc list-inside text-base space-y-2">
          <li>
            <b>Botão Incluir</b> - Criar novo lançamento;
          </li>
          <li>
            <b>Botão Alterar</b> - Alterar / Editar um lançamento salvo;
          </li>
          <li>
            <b>Botão cancelar / Excluir</b> - Botão mult opções, remove baixa de
            título, cancela lançamento, exclui lançamento;
          </li>
          <li>
            <b>Botão Salvar</b> - Salvar / Gravar lançamento;
          </li>
          <li>
            <b>Botão Cancelar / Abortar</b> - Cancela a operação vigente, ignora
            alterações e retorno ao estado anterior;
          </li>
          <li>
            <b>Botões de navegação</b>;
          </li>
          <li>
            <b>Botão de Consulta</b> - relatórios;
          </li>
          <li>
            <b>Botão de Cadastros</b> - Acesso rápido ao cadastros de Entidades
            (clientes / fornecedores / transportadora/ Diversos);
          </li>
          <li>
            <b>Botão de Cad. De Bancos e contas</b>;
          </li>
          <li>
            <b>Botão de lançamento de contas a receber</b>;
          </li>
          <li>
            <b>Botão de lançamento de contas a pagar</b>.
          </li>
        </ul>
      </div>
      <h2 className="mt-10 text-base sm:text-2xl font-bold text-slate-900">
      Consultas e Relatórios
      </h2>
      <img
        className="w-full max-w-3xl object-contain py-6"
        src={cheque1}
        alt="Cadastro de cheques"
      />
    </div>
  );
}

export default CheckControl;
