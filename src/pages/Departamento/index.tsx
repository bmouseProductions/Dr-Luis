import img1 from "../../assets/img/bmouseproductions_musculoskeletal_ultrasound__photo_realistic___67068797-0e63-4042-81be-b7522df234e9 (1).png";
import img2 from "../../assets/img/bmouseproductions_doctor_performing_surgery_on_a_patients_shoul_0b5ca5e4-d9c0-4c36-9c3b-2c63bd439273.png";
import img3 from "../../assets/img/bmouseproductions_doctor_taking_x-ray_of_a_knee__portrait__phot_0f18daf7-2ecd-4102-affa-074f88fe7fd3.png";
import img4 from "../../assets/img/bmouseproductions_patient_doing_physical_rehabilitation_in_her__3d8884f2-38bd-47eb-b3f3-494161d926da.png";

import icon1 from "../../assets/img/orthopedics.svg";
import icon2 from "../../assets/img/articulation-bones.svg";
import icon3 from "../../assets/img/ultrasonography.svg";
import icon4 from "../../assets/img/groupBlack.svg";

import { useState } from "react";
import { Button } from "../../components/Button";

export const Departamento = () => {
  const [activeButton, setActiveButton] = useState("ortopedia");

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const items = [
    {
      name: "ortopedia",
      icon: icon1,
      image: img1,
      title: "Ortopedia e Traumatologia",
      text: "Especialização em Ortopedia e Traumatologia pela Santa Casa de Misericórdia de Santos - SP. Experiência e conhecimento na área de ortopedia e traumatologia.",
    },
    {
      name: "cirurgia",
      icon: icon2,
      image: img2,
      title: "Cirurgia de Ombro e Cotovelo",
      text: "Subespecialização em Cirurgia de Ombro e Cotovelo pela Santa Casa de Misericórdia de Santos - SP. Experiência e conhecimento em cirurgias relacionadas ao ombro e cotovelo.",
    },
    {
      name: "ultrassonografia",
      icon: icon3,
      image: img3,
      title: "Ultrassonografia Musculoesquelética",
      text: "Membro fundador da Associação Ortopédica Brasileira de Ultrassonografia Musculoesquelética. Experiência e conhecimento em diagnóstico por ultrassonografia musculoesquelética.",
    },
    {
      name: "ortopediaEsportiva",
      icon: icon4,
      image: img4,
      title: "Ortopedia e Traumatologia Esportiva",
      text: "Atendimento de atletas para prevenção e tratamento de lesões.",
    },
  ];

  return (
    <div className=" px-6 lg:px-80 lg:py-20 flex flex-col gap-10">
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row lg:items-end lg:justify-between ">
        <div className="lg:w-[50%] flex flex-col gap-5">
          <h1 className="text-3xl lg:text-5xl">
            Departamentos e Especializações
          </h1>
          <p className="text-[#797968]">
            Oferecemos uma gama abrangente de especializações médicas para
            atender às necessidades de nossos pacientes.
          </p>
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div className="overflow-x-auto gap-10 lg:gap-0  lg:overflow-x-hidden flex lg:justify-between cursor-pointer">
        {items.map((item) => (
          <div
            key={item.name}
            className={`bg-white flex flex-col items-center justify-center gap-3 p-10 text-center w-[200px] h-[200px]  border-2 shadow-2xl snap-center ${
              activeButton === item.name ? "active" : ""
            }`}
            onClick={() => handleClick(item.name)}
          >
            <img src={item.icon} alt="" className="w-[100px]" />
            <h4 className="text-center">{item.title}</h4>
          </div>
        ))}
      </div>
      <div className="flex  bg-white shadow-2xl">
        {items.map((item) => (
          <div
            className="flex flex-col lg:flex-row"
            key={item.name}
            style={{ display: activeButton === item.name ? "flex" : "none" }}
          >
            <img src={item.image} alt="" className="w-[500px]" />
            <div className="p-5 lg:p-20 flex flex-col gap-5">
              <h1 className="text-3xl h-10 ">{item.title}</h1>
              <p className="text-lg text-[#797968]">{item.text}</p>
              <Button />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
