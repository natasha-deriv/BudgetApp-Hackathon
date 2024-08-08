import { Modal } from "@deriv-com/ui";
import "./SendMoneyModal.scss";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useBalance, useTransactions } from "../../hooks";

/**
 * 1. This is where the props are typed. Any new props, it needs to be added here.
 */
type SendMoneyModalProps = {
  isSendOpen: boolean;
  handleClose: VoidFunction;
};

/**
 * 1. Modal component has an isOpen props. isOpen needs to be passed to trigger the modal.
 * 2. To trigger the modal, a state is needed. State needs to be passed from parent.
 * 3. Added a prop called isOpen but since this is TypeScript, props need to be typed. Any new props, it needs to be added.
 */
export const SendMoneyModal = ({
  isSendOpen,
  handleClose,
}: SendMoneyModalProps) => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  const { subtractBalance } = useBalance();

  const { handleTransactions } = useTransactions();

  const handleSubmit = () => {
    subtractBalance(Number(amount));
    handleTransactions(Number(amount), address, "send");
  };

  return (
    <Modal className="send-modal" isOpen={isSendOpen} ariaHideApp={false}>
      <div className="send-money-title">
        <div>Transfer</div>
        <IoClose className="cancel-icon" size={20} onClick={handleClose} />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <p className="amount-title">Transfer Amount</p>
          <input
            className="amount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <p className="amount-title">Transfer Receipient</p>
          <input
            className="receipient"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button type="submit" className="send-button">
            Send
          </button>
        </div>
      </form>
    </Modal>
  );
};
