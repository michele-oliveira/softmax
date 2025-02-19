import carrierRegistrationImg from "../../assets/images/manual/cad_Transp.png";

function CarrierRegistration() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Cadastro de Transportadoras
      </h1>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        O programa <b>Maxcontrol</b> oferece um formulário de cadastro de
        trasportadoras completo para melhor organizar e adquirir os dados de
        seus agentes de transporte.
      </p>

      <img
        className="w-full max-w-3xl object-contain"
        src={carrierRegistrationImg}
        alt="Cadastro Transportadora"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="text-base pb-5">
          <b>Cadastro de Transportadora </b>
        </p>
        <p className="text-base pt-2">
          <b>1- Código </b>
        </p>
        <p className="text-base pt-2">
          <b>2- CNPJ\CPF</b> - Preencher com o CNPJ \ CPF da transportadora
        </p>
        <p className="text-base pt-2">
          <b>3- RG </b> - Preencher com o CNPJ \ CPF do dono da transportadora
        </p>
        <p className="text-base pt-2">
          <b>4- Nome </b> - Preencher com o nome da Transportadora
        </p>
        <p className="text-base pt-2">
          <b>5- Apelido </b> - Preencher com o apelido da Transportadora
        </p>
        <p className="text-base pt-2">
          <b>6- Data de cadastro </b> - Informar a data da realização o cadastro
          da transportadora
        </p>
        <p className="text-base pt-2">
          <b>Dados de Endereço/UF/CEP/N°/Bairro/Cidade e Região </b> - Preencher
          todos os campos com as informações corretas
        </p>
        <p className="text-base pt-2">
          <b>Dados de contato </b> - Preencher os campos Telefone, fax, contato,
          e-mail e site da transportadora
        </p>
        <p className="text-base pt-2">
          <b>Observações </b> - Preencher as observações pertinentes a
          transportadora
        </p>
        <p className="text-base pt-2">
          <b>Crédito em Carteira </b> - ?
        </p>
        <p className="text-base pt-2">
          <b>Placa </b> - ?
        </p>
        <p className="text-base pt-2">
          <b>UF </b> - ?
        </p>
      </div>
    </div>
  );
}

export default CarrierRegistration;
