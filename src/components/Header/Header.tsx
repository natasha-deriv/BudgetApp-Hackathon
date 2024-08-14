import { useBalance } from "../../hooks";
import { MoneyManagement } from "../SendReceive/MoneyManagement";

export const Header = () => {
  const { balance } = useBalance();
  return (
    <div className="flex flex-col bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-b-lg p-3">
      <div>
        <h1 className="font-light text-white text-sm">Welcome Back,</h1>
        <h1 className="font-bold text-white text-lg">Natasha</h1>
      </div>
      <div className="flex items-center flex-col">
        <div className="font-bold text-white text-sm">Your Balance</div>
        <div className="font-bold text-white text-2xl">
          ${balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <MoneyManagement />
      </div>
    </div>
  );
};
