import { CardEspecializacao } from "../../components/CardEspecializacao";
import img1 from "../../assets/img/ombroecotovelo.svg";
import img2 from "../../assets/img/medico.png";
import img3 from "../../assets/img/doctors.svg";
import img4 from "../../assets/img/medico.png";
import img5 from "../../assets/img/medicaltechnology.svg";
import img6 from "../../assets/img/medicalassociation.svg";

const infos = [
  {
    text: "Experiência em Cirurgia de Ombro e Cotovelo altamente especializada.",
    img: img1,
  },
  {
    text: "Atendimento personalizado e centrado no paciente.",
    img: img2,
  },

  {
    text: "Equipe multidisciplinar experiente e dedicada.",
    img: img3,
  },
  {
    text: "Compromisso com a recuperação e bem-estar dos pacientes.",
    img: img4,
  },
  {
    text: "Utilização de tecnologias avançadas para diagnóstico e tratamento.",
    img: img5,
  },
  {
    text: "Membro ativo de associações renomadas na área.",
    img: img6,
  },
];

export const Especializacao = () => {
  return (
    <>
      <div className="bg-white pt-10 flex flex-col items-center gap-10 lg:px-40  lg:gap-0">
        <h1 className="px-6 text-3xl text-left lg:px-0 lg:h-36 lg:text-5xl lg:text-center lg:w-[700px]">
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
