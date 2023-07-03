import { Banner } from "../../components/Banner";
import { ButtonUp } from "../../components/ButtonUp";
import { ButtonWhats } from "../../components/ButtonWhats";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { Consulta } from "../Consulta";
import { Departamento } from "../Departamento";
import { Especializacao } from "../Especializacao";
import { Sobre } from "../Sobre";

export const Home = () => {
  return (
    <div>
      <header className="bg-header">
        <Header></Header>
        <Banner></Banner>
      </header>
      <ButtonUp></ButtonUp>
      <ButtonWhats></ButtonWhats>
      <Sobre></Sobre>
      <div className="bg-image">
        <Departamento></Departamento>
        <Especializacao></Especializacao>
      </div>
      <Consulta></Consulta>
      <Footer></Footer>
    </div>
  );
};
