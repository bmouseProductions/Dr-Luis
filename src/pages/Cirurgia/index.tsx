import { CardVideos } from "./CardVideos";
import { ButtonUp } from "../../components/ButtonUp";
import { ButtonWhats } from "../../components/ButtonWhats";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { Banner } from "./Banner";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";

const exercicios = [
  {
    title: "Tenodese do Bíceps",
    link: "https://www.youtube.com/embed/iKlJmDXdAno",
  },
  {
    title: "Reconstrução de capsula superior",
    link: "https://www.youtube.com/embed/DfH8bV9ZXig",
  },
  {
    title: "Reparo do Manguito Rotador - Fileira Única",
    link: "https://www.youtube.com/embed/erRyi4rVrHs",
  },
  {
    title: "Reparo do Manguito Rotador - FIleira dupla",
    link: "https://www.youtube.com/embed/GhbIXS_ERy8",
  },
  {
    title: "Artroplastia total do Ombro",
    link: "https://www.youtube.com/embed/K1Vf0tHHdPI",
  },
  {
    title: "Artroplastia Reversa do Ombro",
    link: "https://www.youtube.com/embed/gqitRa4dm1U",
  },
  {
    title: "Artroscopia de ombro - Cirurgia de Bankart",
    link: "https://www.youtube.com/embed/TMytPkQeblM",
  },
  {
    title: "Cirurgia de Reparo do tendão do bíceps",
    link: "https://www.youtube.com/embed/lxme5WjKBhI ",
  },
];

export const Cirurgia = () => {
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    // Simule um tempo de carregamento usando um setTimeout
    setTimeout(() => {
      setCarregado(true);
    }, 3000); // Altere o valor aqui para ajustar a duração do carregamento
  }, []);

  return (
    <div>
      {!carregado ? (
        <Loading />
      ) : (
        <div>
          <header className="bg-header">
            <Header></Header>
            <Banner></Banner>
          </header>
          <ButtonUp></ButtonUp>
          <ButtonWhats></ButtonWhats>
          <section className="2xl:px-40 bg-white grid grid-cols-1   md:grid-cols-2 xl:grid-cols-3 py-10 gap-10">
            {exercicios.map((item, index) => (
              <CardVideos
                key={index}
                title={item.title}
                iframeLink={item.link}
              />
            ))}
          </section>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};
