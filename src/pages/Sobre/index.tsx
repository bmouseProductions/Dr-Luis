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
            Sou graduado em medicina pelo Centro Universitário de Patos de Minas
            - UNIPAM, especializado em Ortopedia e Traumatologia pela Santa Casa
            de Misericórdia de Santos - SP e subespecializado em Cirurgia de
            Ombro e Cotovelo pela Santa Casa de Misericórdia de Santos - SP. Sou
            membro da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) e
            da Sociedade Brasileira de Cirurgia do Ombro e Cotovelo (SBCOC),
            além de membro fundador da Associação Ortopédica Brasileira de
            Ultrassonografia Musculoesquelética.
          </p>
          <ul className="list-disc ms-5 text-[#797968] font-semibold">
            <li className="">Especialista em Ortopedia e Traumatologia</li>
            <li>Subespecializado em Cirurgia de Ombro e Cotovelo</li>
            <li>Membro da Sociedade Brasileira de Ortopedia e Traumatologia</li>
          </ul>
          <Button></Button>
        </div>
      </div>
    </div>
  );
};
