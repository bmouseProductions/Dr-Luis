import { Button } from "../../components/Button";

export const Consulta = () => {
  return (
    <div className="flex flex-col lg:flex-row relative">
      <div className="flex-1 Emergency_contact-1 flex items-center justify-start lg:h-[400px] xl:h-[500px]  ">
        <div
          className="flex py-10 flex-col bg-black bg-opacity-5 backdrop-blur-sm transition-all duration-300 p-6 text-black
         gap-4  w-[100%] lg:ps-10 xl:ps-40  lg:p-6  lg:w-[60%] xl:w-[60%] 2xl:w-[40%]"
        >
          <h4
            data-aos="fade-right"
            className="text-3xl  lg:text-4xl xl:text-5xl text-left text-white "
          >
            Agende sua consulta ortopédica especializada
          </h4>
          <Button></Button>
        </div>
      </div>
      {/* <div className="Emergency_contact-2 flex-1 flex flex-col items-center justify-center lg:h-[300px] xl:h-[400px]"></div> */}
    </div>
  );
};
