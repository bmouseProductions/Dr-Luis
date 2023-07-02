import Logo from "../../assets/img/logo-branca.png";
import Down from "../../assets/img/chevron.png";

export const Banner = () => {
  return (
    <div className="hidden banner lg:h-screen lg:flex lg:flex-col lg:items-center lg:justify-center">
      <img src={Logo} alt="" className=" w-[800px]" />
      <div className="down">
        <a href="">
          <button className="button-down jumping ">
            <img src={Down} alt="" />
          </button>
        </a>
      </div>
    </div>
  );
};
