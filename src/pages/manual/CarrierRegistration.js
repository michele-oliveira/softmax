import carrierRegistrationImg from "../../assets/images/manual/cad_Transp.png";

function CarrierRegistration() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 lg:px-10 lg:py-12">
      <h1 className="mt-10 text-xl sm:text-2xl font-bold text-slate-900">
        Manual do Sistema - Cadastro de Transportadoras
      </h1>
      <p className="mx-4 my-6 text-sm sm:text-base lg:max-w-4xl">
        O programa <strong>Maxcontrol</strong> oferece um formulário de cadastro
        de trasportadoras completo para melhor organizar e adquirir os dados de
        seus agentes de transporte.
      </p>

      <img
        className="w-full max-w-3xl object-contain"
        src={carrierRegistrationImg}
        alt="Cadastro Transportadora"
      />
      <div className="flex flex-col items-start w-full max-w-3xl text-left py-6">
        <p className="text-base pb-5">
          <strong>Cadastro de Transportadora </strong>
        </p>
        <p className="text-base pt-2">
          <strong>1- Código </strong>
        </p>
        <p className="text-base pt-2">
          <strong>2- CNPJ\CPF</strong> - Preencher com o CNPJ \ CPF da
          transportadora
        </p>
        <p className="text-base pt-2">
          <strong>3- RG </strong> - Preencher com o CNPJ \ CPF do dono da
          transportadora
        </p>
        <p className="text-base pt-2">
          <strong>4- Nome </strong> - Preencher com o nome da Transportadora
        </p>
        <p className="text-base pt-2">
          <strong>5- Apelido </strong> - Preencher com o apelido da
          Transportadora
        </p>
        <p className="text-base pt-2">
          <strong>6- Data de cadastro </strong> - Informar a data da realização
          o cadastro da transportadora
        </p>
        <p className="text-base pt-2">
          <strong>Dados de Endereço/UF/CEP/N°/Bairro/Cidade e Região </strong> -
          Preencher todos os campos com as informações corretas
        </p>
        <p className="text-base pt-2">
          <strong>Dados de contato </strong> - Preencher os campos Telefone,
          fax, contato, e-mail e site da transportadora
        </p>
        <p className="text-base pt-2">
          <strong>Observações </strong> - Preencher as observações pertinentes a
          transportadora
        </p>
        <p className="text-base pt-2">
          <strong>Crédito em Carteira </strong> - ?
        </p>
        <p className="text-base pt-2">
          <strong>Placa </strong> - ?
        </p>
        <p className="text-base pt-2">
          <strong>UF </strong> - ?
        </p>
      </div>
    </div>
  );
}

export default CarrierRegistration;
