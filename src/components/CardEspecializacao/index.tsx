import { ReactNode } from "react";

interface Espec {
  text: string;
  img: ReactNode;
}

export const CardEspecializacao = ({ text, img }: Espec) => {
  return (
    <div className="card-especializacao m-auto ">
      <div className="bg px-5 py-2 flex flex-col items-center justify-start text-center gap-2">
        <div className="bg-header rounded-full p-2  w-[70px] h-[70px] fill-white">
          {img}
        </div>
        <p className="text-[#797968]">{text}</p>
      </div>
      <div className="blob"></div>
    </div>
  );
};
