import { Button } from "../../components/Button";

export const Consulta = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="Emergency_contact-1 flex-1 flex flex-col items-center justify-center">
        <div className="flex py-10 flex-col gap-4 lg:p-0 w-[70%]">
          <h4 className="text-3xl lg:text-5xl text-left text-white">
            Agende sua consulta ortopédica especializada
          </h4>
          <Button></Button>
        </div>
      </div>
      <div className="Emergency_contact-2 flex-1"></div>
    </div>
  );
};
