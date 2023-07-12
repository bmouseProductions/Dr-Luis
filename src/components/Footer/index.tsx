import Logo from "../../assets/img/logo-branca.png";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-banner flex flex-col p-6 lg:px-10 lg:py-10 xl:px-40 xl:pt-20 pb-10   justify-between gap-10  ">
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
          <a
            className="text-sm flex flex-col text-left md:flex-row lg:flex-col lg:gap-1 xl:gap-0 xl:flex-row lg:justify-center lg:items-center lg:text-left"
            href="https://goo.gl/maps/NRjYnnjvp9HQjsNp7"
            target="_blank"
          >
            <IoLocationSharp size={25} className="lg:w-[35px]" /> Av. Paranaíba,
            695 - Centro, Patos de Minas - MG, 38700-190
          </a>
          <ul className="flex gap-4 cursor-pointer">
            <li>
              <a
                href="https://www.facebook.com/drluispauloramos"
                target="_blank"
              >
                <AiFillFacebook size={25} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/drluispauloramos/"
                target="_blank"
              >
                <AiOutlineInstagram size={25} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-3 lg:items-end text-white">
          <h4 className="text-2xl text-white">Departamentos</h4>
          <p className="text-sm">Ortopedia e Traumatologia</p>
          <p className="text-sm">Cirurgia de Ombro e Cotovelo</p>
          <p className="text-sm">Ultrassonografia Musculoesquelética</p>
        </div>
      </div>
      <hr />
      <p className="text-center text-white">
        Copyright ©2023 Todos os Direitos Reservados. Desevolvido por{" "}
        <a
          className="text-blue-600"
          href="https://www.bmouseproductions.com/"
          target="_blank"
        >
          Bmouse Productions
        </a>
      </p>
    </footer>
  );
};
