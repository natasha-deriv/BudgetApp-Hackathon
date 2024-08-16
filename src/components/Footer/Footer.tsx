import { RiHome2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLineChart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bottom-0 fixed w-full p-[10px] shadow-[rgba(2,0,15,0.5)_0px_0px_8px_0px] ">
      <div className="flex justify-evenly">
        <Link to="/">
          <RiHome2Line size={30} />
        </Link>
        <Link to="/expenses">
          <AiOutlineLineChart size={30} />
        </Link>
        <Link to="/settings">
          <IoSettingsOutline size={30} />
        </Link>
      </div>
    </div>
  );
};
