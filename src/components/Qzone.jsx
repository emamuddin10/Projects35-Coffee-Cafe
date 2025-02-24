import bg from "../assets/bg.png";
import classp from "../assets/class.png";
import play from "../assets/playground.png";
import swimming from "../assets/swimming.png";
const Qzone = () => {
  return (
    <div className="bg-slate-300 p-5">
      <h1 className=" font-bold">Q-Zone</h1>

      <div className="flex flex-col gap-5">
        <img src={classp} alt="" />
        <img src={play} alt="" />
        <img src={swimming} alt="" />
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
