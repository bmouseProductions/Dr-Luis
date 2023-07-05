import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

export const Sobre = () => {
  return (
    <div id="sobre" className="bg-white px-5 py-10 xl:px-40 xl:py-20">
      <div className="flex flex-col items-center lg:flex-row gap-10 justify-center">
        <div data-aos="fade-right" data-aos-duration="2500" className="mt-10 ">
          <Card></Card>
        </div>
        <div
          data-aos-duration="2500"
          data-aos="fade-left"
          className="flex gap-4 justify-center flex-col lg:w-[40%]"
        >
          <h1 className="text-3xl lg:text-4xl xl:text-5xl">
            Meu nome é <br />{" "}
            <strong className="text-[#00337A]">Luis Paulo Ramos</strong>
          </h1>
          <p className="text-lg text-[#6b6a6a]">
            Sou graduado em medicina pelo centro universitário de Patos de
            Minas, Especializado em Ortopedia e Traumatologia pela santa casa de
            misericórdia de Santos - Sp e subespecializado em cirurgia de ombro
            e cotovelo pela santa casa de misericórdia de Santos - SP. Sou
            membro da sociedade brasileira de ortopedia e traumatologia e da
            sociedade brasileira de cirurgia do ombro e cotovelo, além de Membro
            fundador da Associação Ortopédica brasileira de ultrassonografia
            musculoesquelética.
          </p>
          <ul className="list-disc ms-5 text-[#797968] font-semibold">
            <li className="">Especialista em Ortopedia e Traumatologia</li>
            <li>Subespecializado em cirurgia de ombro e cotovelo</li>
            <li>Membro da sociedade brasileira de ortopedia e traumatologia</li>
          </ul>
          <Button></Button>
        </div>
      </div>
    </div>
  );
};
