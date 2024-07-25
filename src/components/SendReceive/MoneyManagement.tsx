import "./MoneyManagement.scss";
import { RiUserReceived2Line } from "react-icons/ri";
import { RiUserShared2Line } from "react-icons/ri";
import { SendMoneyModal } from "../../modals";
import { useState } from "react";

export const MoneyManagement = () => {
  /**
   * 1. State is used when I want to open the modal.
   */
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);

  /**
   * 1. This where the function to set the state to open
   */
  const onClickSendModalOpen = () => {
    setIsSendModalOpen(true);
  };

  return (
    <div className="mm-container">
      <div className="send-money" onClick={onClickSendModalOpen}>
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
      {/**
       * 1. The modal is used here because the component to trigger it is here.
       */}
      <SendMoneyModal isOpen={isSendModalOpen} />
    </div>
  );
};
