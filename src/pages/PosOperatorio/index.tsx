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
    title: "Exercícios para Fortalecimento do Manguito Rotador",
    exercicios: [
      "Rotação Externa 4 x 10 repetições",
      "Rotação Interna 4 x 10 repetições",
      "Flexão 90 graus(murro) 4 x 10 repetições",
      "Extensão 90 graus (cotovelada) 4 x 10 repetições",
    ],
  },
  {
    title: "Exercício para fortalecimento do Músculo Deltóide",
    exercicios: ["4 x 10 repetições"],
  },
  {
    title: "Exercício para Fortalecimento do Músculo Bíceps Braquial",
    exercicios: ["4 x 10 repetições"],
  },
  {
    title: "Exercícios Pendulares",
    exercicios: [
      "Rotação Para esquerda 4 x 20 repetições",
      "Rotação Para a direita 4 x 20 repetições",
      "Anteroposterior 4 x 20 repetições",
      "LateroLateral 4 x 20 repetições",
    ],
  },
  {
    title: "Rotação Lateral Passiva (cabo de vassoura)",
    exercicios: ["Rotação lateral 4 x 20 repetições"],
  },
  {
    title: "Elevação Passiva deitado ou na mesa",
    exercicios: ["Elevação deitada 4 x 20 repetições"],
  },
  {
    title: "Alongamento de Capsula posterior",
    exercicios: [
      "Rotação com auxílio de Toalha 4 x 20 segundos",
      "Alongamento deitado 4 x 20 segundos",
    ],
  },
];

export const PosOperatorio = () => {
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
                exercicios={item.exercicios}
                video="asas"
              />
            ))}
          </section>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};
