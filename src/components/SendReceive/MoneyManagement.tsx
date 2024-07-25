import "./MoneyManagement.scss";
import { RiUserReceived2Line } from "react-icons/ri";
import { RiUserShared2Line } from "react-icons/ri";

export const MoneyManagement = () => {
  return (
    <div className="mm-container">
      <div className="send-money">
        <div className="send-icon">
          <RiUserShared2Line />
          <div className="send">Send Money</div>
        </div>
      </div>
      <div className="receive-money">
        <div className="receive-icon">
          <RiUserReceived2Line />
          <div className="receive">Receive Money</div>
        </div>
      </div>
    </div>
  );
};
