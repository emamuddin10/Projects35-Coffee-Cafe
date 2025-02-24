import moment from "moment/moment";
import logo from "../assets/logo.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  // console.log(import.meta.env.VITE_a)
  return (
    <div className="text-center space-y-3">
      <div className="logo mt-20">
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <p className="font-display">Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
      <div className="flex items-center gap-2 p-2 bg-slate-200 w-11/12 mx-auto ">
        <span className="bg-red-400 px-3 py-1 text-white">Latest</span>
        <Marquee speed={20} pauseOnHover={true}>
          <Link to='/latest'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, id.</Link>
          <Link to='/latest'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, id.</Link>
          <Link to='/latest'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, id.</Link>
        </Marquee>
      </div>
      
    </div>
  );
};

export default Header;
