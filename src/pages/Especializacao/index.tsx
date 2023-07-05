import { ReactSVG } from "react-svg";

import { CardEspecializacao } from "../../components/CardEspecializacao";

const infos = [
  {
    text: "Experiência em Cirurgia de Ombro e Cotovelo altamente especializada.",
    img: <ReactSVG src="/ombroecotovelo.svg" className="w-[70%] m-auto" />,
  },
  {
    text: "Atendimento personalizado e centrado no paciente.",
    img: <ReactSVG src="/location.svg" className="w-[70%] m-auto" />,
  },

  {
    text: "Equipe multidisciplinar experiente e dedicada.",
    img: <ReactSVG src="/doctors.svg" className="w-[100%] m-auto mt-4" />,
  },
  {
    text: "Compromisso com a recuperação e bem-estar dos pacientes.",
    img: <ReactSVG src="/recuperation.svg" className="" />,
  },
  {
    text: "Utilização de tecnologias avançadas para diagnóstico e tratamento.",
    img: <ReactSVG src="/medicaltechnology.svg" className="w-[100%] m-auto" />,
  },
  {
    text: "Membro ativo de associações renomadas na área.",
    img: <ReactSVG src="/medicalassociation.svg" className="w-[90%] m-auto" />,
  },
];

export const Especializacao = () => {
  return (
    <>
      <div className=" pt-10 flex flex-col items-center gap-10 xl:px-40  xl:gap-0">
        <h1 className="px-6 text-3xl lg:text-4xl text-left xl:px-0 xl:h-36 xl:text-5xl lg:text-center lg:w-[600px] xl:w-[700px]">
          Especialização em Ortopedia e Traumatologia de alta qualidade.
        </h1>
        <div className=" w-full pb-10 flex gap-10 overflow-x-auto lg:w-auto lg-gap-0 lg:overflow-x-hidden lg:grid lg:grid-cols-3 lg:px-40 lg:gap-10 lg:py-10 ">
          {infos.map((item, index) => (
            <div className="z-10 px-6 lg:px-0">
              <CardEspecializacao key={index} text={item.text} img={item.img} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
