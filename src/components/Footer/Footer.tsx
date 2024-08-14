import { RiHome2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLineChart } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="bottom-0 fixed w-full p-[10px] shadow-[rgba(2,0,15,0.5)_0px_0px_8px_0px] ">
      <div className="flex justify-evenly">
        <RiHome2Line size={30} />
        <AiOutlineLineChart size={30} />
        <IoSettingsOutline size={30} />
      </div>
    </div>
  );
};
