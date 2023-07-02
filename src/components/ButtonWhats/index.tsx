import Whats from "../../assets/img/whatsapp_3.png";

export const ButtonWhats = () => {
  return (
    <div className="whatsapp">
      <a
        href="https://api.whatsapp.com/send?1=pt_BR&phone=5534992593669"
        target="_blank"
      >
        <button className="button-wpp jumping">
          <img src={Whats} alt="" />
        </button>
      </a>
    </div>
  );
};
