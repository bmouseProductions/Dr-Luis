import Logo from "../../assets/img/logo-branca.png";

export const Footer = () => {
  return (
    <footer className="bg-banner flex flex-col p-6 lg:px-40 lg:pt-20 pb-10   justify-between gap-10  ">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-5 text-white">
          <img src={Logo} alt="" className="w-[200px] lg:w-[300px]" />
          <p className="text-sm">
            Ortopedista e traumatologista com especialização em ombro e
            cotovelo, experiência em hospitais renomados, supervisor de
            residência médica e coordenador de departamento.
          </p>
        </div>
        <div className="flex-1 flex flex-col lg:items-center gap-3 text-white">
          <h4 className="text-2xl text-white">Contatos</h4>
          <p className="text-sm">
            Av. Paranaíba, 695 - Centro, Patos de Minas - MG, 38700-190
          </p>
          <ul className="flex gap-4">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-3 lg:items-end text-white">
          <h4 className="text-2xl text-white">Departamentos</h4>
          <p className="text-sm">Ortopedia e Traumatologia</p>
          <p className="text-sm">Cirurgia de Ombro e Cotovole</p>
          <p className="text-sm">Ultrassonografia Musculoesquelética</p>
        </div>
      </div>
      <hr />
      <p className="text-center text-white">
        Copyright ©2023 Todos os Direitos Reservados. Desevolvido por Bmouse
        Productions
      </p>
    </footer>
  );
};
