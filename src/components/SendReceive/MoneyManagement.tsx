import { IoAddCircleOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { ReceiveMoneyModal, SendMoneyModal } from "../../modals";
import { useState } from "react";

export const MoneyManagement = () => {
  /**
   * 1. State is used when I want to open the modal.
   */
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);

  /**
   * 1. This where the function to set the state to open
   */
  const onClickSendModalOpen = () => {
    setIsSendModalOpen(true);
  };

  const onClickCloseSendModal = () => {
    setIsSendModalOpen(false);
  };

  const onClickReceiveModalOpen = () => {
    setIsReceiveModalOpen(true);
  };

  const onClickCloseReceiveModal = () => {
    setIsReceiveModalOpen(false);
  };

  return (
    <div className="flex items-center gap-5 w-full justify-around">
      <div
        className="w-fit p-4 rounded-lg border"
        onClick={onClickSendModalOpen}
      >
        <div className="flex items-center gap-2">
          <LuSend size={20} color="white" />
          <div className="text-white">Send Money</div>
        </div>
      </div>
      <div
        className="w-fit p-4 rounded-lg border"
        onClick={onClickReceiveModalOpen}
      >
        <div className="flex items-center gap-2">
          <IoAddCircleOutline size={20} color="white" />
          <div className="text-white">Add Money</div>
        </div>
      </div>
      {/**
       * 1. The modal is used here because the component to trigger it is here.
       */}
      <SendMoneyModal
        isSendOpen={isSendModalOpen}
        handleClose={onClickCloseSendModal}
      />
      <ReceiveMoneyModal
        isReceiveOpen={isReceiveModalOpen}
        handleClose={onClickCloseReceiveModal}
      />
    </div>
  );
};
