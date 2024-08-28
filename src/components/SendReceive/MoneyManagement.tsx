import { IoAddCircleOutline } from "react-icons/io5";
import { ReceiveMoneyModal, AddIncomeModal } from "../../modals";
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
      <div className="w-fit p-4 rounded-lg" onClick={onClickSendModalOpen}>
        <div className="flex items-center gap-2 flex-col">
          <div className="text-white font-bold text-lg">Income</div>
          <div className="flex items-center gap-1">
            <IoAddCircleOutline size={15} color="white" />
            <div className=" text-white text-xs">Add Income</div>
          </div>
        </div>
      </div>
      <div className="w-fit p-4 rounded-lg" onClick={onClickReceiveModalOpen}>
        <div className="flex items-center gap-2 flex-col">
          <div className="text-white font-bold text-lg">Expense</div>
          <div className="flex items-center gap-1">
            <IoAddCircleOutline size={15} color="white" />
            <div className="text-white text-xs">Add Expense</div>
          </div>
        </div>
      </div>
      {/**
       * 1. The modal is used here because the component to trigger it is here.
       */}
      <AddIncomeModal
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
